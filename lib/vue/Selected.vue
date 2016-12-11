<template>
    <div v-show='select.length > 0'>
        <div v-bind:class="weui.hd">
            <h1 v-bind:class="weui.page_title">已选择</h1>
        </div>
        <div v-bind:class="css.selected">
            <div v-bind:class="css.box" v-for="(el, index) in select" track-by="$index">
                <div v-bind:class="css.number">{{ el.id }}</div>
                <div v-bind:class="css.close" v-on:click="close(index, el.siteIndex)">X</div>
            </div>
        </div>
        <button v-on:click='submit' v-bind:class="weui.weui_btn + ' ' + weui.weui_btn_disabled + ' ' + weui.weui_btn_primary + ' ' + css.custom_button">提交</button>
        <br/><br/>
    </div>
</template>

<script>
    import weui from '../../assets/weui/weui.css';
    import css from '../../assets/weui/custom.css';

    export default {
        name: 'Selected',
        props: ['select'],
        data () {
            return {
                weui: weui,
                css: css
            }
        },
        methods: {
            submit () {
                this.$emit('submit');
            },
            close (index, siteIndex) {
                this.$emit('close', index, siteIndex);
            }
        }
    }
</script>
