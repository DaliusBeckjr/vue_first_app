<template>
    <div>
        <h1>Jobs Details Page</h1>
        <!-- <p>the job id is {{ $route.params.id }}</p> -->
        <p>the job id is {{ id }}</p>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        // data() {
        //     return{
        //         id: this.$route.params.id,
        //     }
        // }
    }
</script>

<style lang="scss" scoped>

</style>