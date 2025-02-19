<template>
    <h2>beforeMounted and Unmount life cycle methods </h2>
    <button @click="show = !show">Toggle</button>
    <CheckBox v-if="show" />
</template>

<script>
import CheckBox from './CheckBox.vue';
export default {
    name: "MountUnmount",
    data() {
        return {
            show: false
        }
    },
    components: {
        CheckBox
    },
    
}
</script>