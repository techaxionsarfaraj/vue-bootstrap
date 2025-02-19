<template>
<Teleport to="#teleport_header">
    <Header />
</Teleport>
<RouterView />
<Teleport to="#teleport_footer">
    <Footer />
</Teleport>
</template>

<script>
import Header from './components/header/Header.vue'
// import { RouterView } from 'vue-router';
import Footer from './components/footer/footer.vue';
export default {
    name: 'App',
    components: {
        Header,
        Footer,
    },
};
</script>
