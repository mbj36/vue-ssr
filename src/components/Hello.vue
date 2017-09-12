<template>
    <div>
        Hi from Hello Component
        <about></about>
    </div>
</template>

<script>
import About from './About.vue'
export default {
    name: 'hello',
    components: {
        About
    }

}
</script>

<style scoped>

</style>
