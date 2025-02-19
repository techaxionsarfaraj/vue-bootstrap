import {createWebHistory,createRouter} from 'vue-router';
import Home from './components/main/Home.vue';
import Sidebar from './components/main/Sidebar.vue';
import About from './components/main/About.vue';
import Contact from './components/main/Contact.vue';
import Post from './components/main/Post.vue';
import PostSideBar from './components/main/PostSideBar.vue';
import PostDetail from './components/main/PostDetail.vue';
import NotFound from './components/main/NotFound.vue';
import Practical from './components/main/practical/Practical.vue';
const routes = [
    { 
        name: 'Home',
        path: '/', 
        components: {
            default: Home,
            sidebar: Sidebar
        },
        alias: ['/home','/'] // multiple aliases 
    },
    { 
        name: 'About',
        path: '/about',  
        component: About  
    }, 
    { 
        name: 'Contact',
        path: '/contact',  
        component: Contact 
    }, 
    { 
        name: 'Post',
        path: '/post',  
        components: {
            default: Post,
            sidebar: PostSideBar
        }
    }, 
    { 
        name: 'Post Detail',
        path: '/post/:id(\\d+)', // id should be number only  
        component: PostDetail
    }, 
    
    { 
        name: 'Style Guide',
        path: '/style-guide',  
        component: Practical
    }, 
    {
        name: '404 Not Found',
        path: '/:catchAll(.*)',
        component: NotFound
    },
    // Redirect to /home to / 
    // {
    //     path: '/home',
    //     redirect: '/',
    // },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;