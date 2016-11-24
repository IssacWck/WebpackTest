<template>
    <div id="controller">
        <Titles></Titles>
        <Site v-bind:site="site" v-on:select="selectSite"></Site>
        <Selected v-on:close="close" v-on:submit="submit" v-bind:select="select"></Selected>
        <Loading v-bind:loading="loading"></Loading>
    </div>
</template>

<script>
    import jQuery from 'jQuery';
    import Titles from './Title';
    import Loading from './Loading';
    import Site from './Site';
    import Selected from './Selected';

    export default {
        name: 'controller',
        data () {
            return {
                loading: true,
                site: [],
                select: [],
                selected: []
            }
        },
        components: {
            Titles,
            Loading,
            Site,
            Selected
        },
        created () {
            this.getData('http://mini.com/getSite', null, null, function (response) {
                this.site = response;
                this.checkSelected(function () {
                    this.loading = false;
                    setInterval(function () {
                        this.checkSelected();
                    }.bind(this), 5000);
                }.bind(this));
            }.bind(this));
        },
        methods: {
            getData (url, data, method, callback) {
                jQuery.ajax({
                    type: method || 'GET',
                    url: url,
                    data: data || {},
                    dataType: 'json',
                    success: function (response) {
                        callback && callback(response);
                    },
                    error: function (error) {}
                });
            },
            checkSelected (callback) {
                this.getData('http://mini.com/checkSelected', null, null, function (response) {
                    this.selected = response;
                    for (var i = 0; i < this.selected.length; i++) {
                        this.site[this.selected[i].id - 1].selected = 1;
                    }
                    callback && callback();
                }.bind(this));
            },
            selectSite (el, index) {
                if (el.selected === 1) {
                    return false;
                }
                this.select.push({id: el.id, siteIndex: index});
                this.site[index].selected = 1;
            },
            close (index, siteIndex) {
                this.select.splice(index, 1);
		        this.site[siteIndex].selected = 0;
            },
            submit () {
                if (this.select.length < 1 || this.loading) {
                    return false;
                }
                this.loading = true;
                var i, data = '';
                for (i in this.select) {
                    data += this.select[i].id + ',';
                }
                this.getData('http://mini.com/insertSite', {id: data}, 'POST', function (response) {
                    if (response === 1) {
                        for (i in this.select) {
                            this.site[this.select[i].siteIndex].selected = 1;
                        }
                        this.select = [];
                        this.loading = false;
                        alert('选座成功');
                    } else {
                        alert('选座失败');
                    }
                }.bind(this))
            }
        }
    }
</script>