<template>
    <div v-bind:class="weui.bd">
        <div v-bind:class="css.site">
            <div v-for="(el, index) in site" track-by="$index" v-bind:class="css.site_icon + ' ' + (el.selected ? css.site_icon_selected : '')" v-on:click="selectSite(el, index)">{{ el.id }}</div>
        </div>
    </div>
</template>

<script>
    import weui from '../../assets/weui/weui.css';
    import css from '../../assets/weui/custom.css';

    export default {
        name: 'Site',
        props: ['site'],
        data () {
            return {
                css: css,
                weui: weui,
            }
        },
        methods: {
            selectSite (el, index) {
                this.$emit('select', el, index);
            }
        }
    }
</script>
