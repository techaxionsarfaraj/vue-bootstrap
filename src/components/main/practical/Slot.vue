<template>
    <div class="display-6 text-primary">Slot</div>
    <Child data="data pass using props in child component" />
    <Child>
        <div class="display-6 text-secondary">This is called using <strong class="text-primary"><u> slot</u></strong> components</div>
        <a href="http://"> other tag used in slot</a>
    </Child> 
    <Child>
        <template v-slot:header>
            <h2>card title</h2>
        </template>
        <template v-slot:main>
        <div>card body</div>
        </template>
        <template v-slot:footer>
            <button>button</button>
        </template>
    </Child>
</template>

<script>
import Child from './Child.vue';
export default {
    name: 'Slot',
    components: {
        Child
    }
}
</script>