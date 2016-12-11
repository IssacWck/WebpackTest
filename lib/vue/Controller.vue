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
    import Q from 'q';

    export default {
        name: 'controller',
        data () {
            return {
                loading: true,
                site: [],
                select: []
            }
        },
        components: {
            Titles,
            Loading,
            Site,
            Selected
        },
        created () {
            this.getData('getSite').then(response => {
                this.site = response;
                this.checkSelected(() => this.loading = false);
            });
        },
        mounted () {
            setInterval(() => this.checkSelected(), 5000);
            console.log('vue');
        },
        methods: {
            getData (url, data) {
                let deferred = Q.defer();
                jQuery.ajax({
                    type: data ? 'POST' : 'GET',
                    url: 'http://mini.com/' + url,
                    data: data || {},
                    dataType: 'json',
                    success: deferred.resolve,
                    error: deferred.reject
                });
                return deferred.promise;
            },
            checkSelected (callback) {
                this.getData('checkSelected').then(response => {
                    for (let i = 0; i < response.length; i++) {
                        this.site[response[i].id - 1].selected = 1;
                    }
                    callback && callback();
                });
            },
            selectSite (el, index) {
                if (el.selected === 1) {
                    return false;
                }
                this.select.push({
                    id: el.id,
                    siteIndex: index
                });
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
                let i, data = '';
                for (i in this.select) {
                    data += this.select[i].id + ',';
                }
                this.getData('insertSite', {id: data}).then(response => {
                    if (response === 1) {
                        for (i in this.select) {
                            this.site[this.select[i].siteIndex].selected = 1;
                        }
                        this.select = [];
                        this.loading = false;
                    } else {
                        window.alert('选座失败');
                        return;
                    }
                });
            }
        }
    }
</script>