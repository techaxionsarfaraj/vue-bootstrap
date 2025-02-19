<template>
    <div class="display-6 text-primary">If Else Code</div>
    <div class="h4" v-if="show">if condition</div>
    <div class="h4" v-else>else condition</div>
    <br />
    <button class="btn btn-primary" v-on:click="show = !show">
        Toggle Button
    </button>
</template>
<script>
export default {
    name: 'IfElse',
    data() {
        return {
            show: true
        }
    }
}
</script>