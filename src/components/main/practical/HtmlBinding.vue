<template>

    <div class="display-6 text-primary">Html Binding</div>

    <div v-html="binding"></div>

</template>

<script>

export default {
    name: 'HtmlBinding',
    data() {
        return {
            binding: '<div class="display-4">Html Binding content goes here</div>',
        }
    }
}
</script>