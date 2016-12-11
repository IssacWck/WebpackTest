<template>
    <div v-bind:class="css.hd">
        <h1 v-bind:class="css.page_title">MiniSite</h1>
    </div>
</template>

<script>
    import weui from '../../assets/weui/weui.css';

    export default {
        name: 'head',
        data () {
            return {
                css: weui
            }
        }
    }
</script>