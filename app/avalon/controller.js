var avalon = require('avalon');
var jQuery = require('jQuery');

var controller =  avalon.define({
    $id: 'controller',
    site: [],
    selected: [],
    select: [],
    loading: true,
    getData: function (url, model, data, method, callback) {
	    jQuery.ajax({
            type: method || 'GET',
            url: url,
            data: data || {},
            dataType: 'json',
            success: function (response) {
                if (model) {
                    controller[model] = response;
                }
                callback && callback(response);
            },
            error: function (error) {}
        });
    },
    checkSelected: function () {
	    controller.getData('http://mini.com/checkSelected', 'selected', null, null,  function (response) {
		    for (var i = 0; i < controller['selected'].size(); i++) {
                controller.site[controller['selected'][i].id - 1].selected = 1;
            }
            controller.loading = false;
        });
    },
    selectSite: function (el, index) {
        if (el.selected === 1) {
            return false;
        }
        controller.select.push({id: el.id, siteIndex: index});
        controller.site[index].selected = 1;
    },
    close: function (index, siteIndex) {
        controller.select.removeAt(index);
        controller.site[siteIndex].selected = 0;
    },
    submit: function () {
        if (controller.select.size() < 1  || controller.loading) {
            return false;
        }
        controller.loading = true;
        var data = {id: ''};
        for (var i in controller.select.$model) {
            data.id += controller.select.$model[i].id + ',';
        }
        controller.getData('http://mini.com/insertSite', null, data, 'POST', function (response) {
            if (response === 1) {
                for (var i in controller.select.$model) {
                    controller.site[controller.select.$model[i].siteIndex].selected = 1;
                }
                controller.select.removeAll();
                controller.loading = false;
                alert('选座成功');
            } else {
                alert('选座失败');
            }
        })
    }
});

module.exports = controller;