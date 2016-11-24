<template>
    <div v-show='select.length > 0'>
        <div class="hd">
            <h1 class="page_title">已选择</h1>
        </div>
        <div class="selected">
            <div class="box" v-for="(el, index) in select">
                <div class="number">{{ el.id }}</div>
                <div class="close" v-on:click="close(index, el.siteIndex)">X</div>
            </div>
        </div>
        <button v-on:click='submit' class="weui_btn weui_btn_disabled weui_btn_primary custom_button">提交</button>
        <br/><br/>
    </div>
</template>

<script>
    export default {
        name: 'Selected',
        props: ['select'],
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
