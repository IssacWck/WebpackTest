<template>
    <div v-bind:class="css.loading" v-show="loading">
        <div v-bind:class="css.spinner">
            <div v-bind:class="css['spinner-container'] + ' ' + css.container1">
                <div v-bind:class="css.circle1"></div>
                <div v-bind:class="css.circle2"></div>
                <div v-bind:class="css.circle3"></div>
                <div v-bind:class="css.circle4"></div>
            </div>
            <div v-bind:class="css['spinner-container'] + ' ' + css.container2">
                <div v-bind:class="css.circle1"></div>
                <div v-bind:class="css.circle2"></div>
                <div v-bind:class="css.circle3"></div>
                <div v-bind:class="css.circle4"></div>
            </div>
            <div v-bind:class="css['spinner-container'] + ' ' + css.container3">
                <div v-bind:class="css.circle1"></div>
                <div v-bind:class="css.circle2"></div>
                <div v-bind:class="css.circle3"></div>
                <div v-bind:class="css.circle4"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import css from '../../assets/weui/custom.css';

    export default {
        name: 'loading',
        props: ['loading'],
        data () {
            return {
                css: css
            }
        }
    }
</script>
