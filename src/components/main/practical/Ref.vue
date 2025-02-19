<template>
    <div class="display-6 text-primary">Ref</div>
    <input type="text" ref="input">
    <button v-on:click="focus">Click me</button>
</template>

<script>
export default {
    name: "Ref",
    methods: {
        focus() {
            alert("e bhai please check console");
            console.info("______________");
            console.info(this.$refs.input.value);            
            this.$refs.input.focus();
        }
    }
}
</script>