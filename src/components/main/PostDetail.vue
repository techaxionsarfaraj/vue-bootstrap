<template>
<div class="container">
    <div class="display-6 mb-4">
        Post Detail Page
    </div>
    <h2> Post id : {{ route.params.id }} </h2>
    <!-- <p>Title: {{ post.title }}</p>
    <p>Content: {{ post.content }}</p> -->
    <button class="btn btn-primary" v-on:click="goBack">Go Back</button>    
</div>
</template>

<script>
import {
    useRoute,
    useRouter
} from 'vue-router';

export default {
    name: 'PostDetail',
    setup() {                
        const router = useRouter(); //gives you the router instance to navigate programmatically.
        const goBack = () => router.go(-1);        
        const route = useRoute(); // gives you the current route’s information, like path, params, query, etc
        const {fullPath,hash,matched,meta,name,params,path,query,redirectedFrom} = useRoute();
        console.log("Full Path: ", fullPath);
        console.log("Hash: ", hash);
        console.log("Matched: ", matched);
        console.log("Meta: ", meta);
        console.log("Component Name: ", name);
        console.log("Params: ", params);
        console.log("Path: ", path);
        console.log("Query: ", query);
        console.log("Redirected From: ", redirectedFrom);
        return { route, goBack};
    }
};
</script>
