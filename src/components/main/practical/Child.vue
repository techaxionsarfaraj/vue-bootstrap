<template>
    <div class="h4 text-primary"> {{ data }} </div>
    <slot></slot>
    <!-- <div v-if="data">
        <div v-for="(item, index) in data" :key="index">
            <p>{{ item }}</p>
        </div>
    </div> -->

    <div class="card w-25 p-4">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot name="main"></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>


</template>

<script>
export default {
    name: 'Child',
    props: {
        data: String,
        // data: function
    },    
};
</script>