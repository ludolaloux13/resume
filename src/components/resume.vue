<template>
    <div class="resume-wrapper">
        <leftside></leftside>
        <rightside></rightside>
    </div>
</template>

<script>
    import leftside from './leftside.vue';
    import rightside from './rightside.vue';

    export default {
        name: "resume",
        components: {leftside, rightside}
    };
</script>

<style scoped lang="scss">
    .resume-wrapper {
        height: 1170px;
        width: 827px;
        display: flex;
        border: 1px solid black;
        .left-side {
            width: 30%;
            height: 100%;
        }
        .right-side {
            width: 70%;
            height: 100%;
        }
    }
</style>
