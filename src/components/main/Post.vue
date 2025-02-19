<template>
<div class="container">
    <div class="display-6 mb-4">
        Post Page
    </div>
    <div class="mb-4">
        <button class="btn btn-primary" v-on:click="goBack">Go Back</button>
        <button class="ms-2 btn btn-secondary" v-on:click="goForward">Go Forward</button>
    </div>
    <ul class="list-group">    
      <li v-for="post in posts" :key="post.id" class="list-group-item">
          <RouterLink :to="{name: 'Post Detail', params: {id: post.id}}" class="text-decoration-none">
              <h5 class="mb-0 text-secondary d-inline"> {{ post.title }}</h5>
          </RouterLink>
          <p class="mb-0 text-muted">{{ post.content }}</p>
      </li>
    </ul>
</div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'Post',
  setup() {
    const router = useRouter();
    const goBack = () => router.go(-1);
    const goForward = () => router.go(1);

    // Convert posts to reactive state
    const posts = [
      { id: 1, title: 'Post 1', content: 'This is the content of Post 1' },
      { id: 2, title: 'Post 2', content: 'This is the content of Post 2' },
      { id: 3, title: 'Post 3', content: 'This is the content of Post 3' },
      { id: 4, title: 'Post 4', content: 'This is the content of Post 4' },
      { id: 5, title: 'Post 5', content: 'This is the content of Post 5' },
      { id: 6, title: 'Post 6', content: 'This is the content of Post 6' }
    ];

    return { goBack, goForward, posts };
  }
};
</script>
