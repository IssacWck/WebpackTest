<template>
    <div class="bd spacing">
        <div class="site">
            <div class="site_icon" v-for="(el, index) in site" v-bind:class="{site_icon_selected: el.selected}" v-on:click="selectSite(el, index)">{{ el.id }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Site',
        props: ['site'],
        methods: {
            selectSite (el, index) {
                this.$emit('select', el, index);
            }
        }
    }
</script>
