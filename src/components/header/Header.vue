<template>
  <div class="sticky-md-top">
    <HeadBar />
    <nav class="shadow navbar navbar-expand-lg navbar-primary bg-white">
      <div class="container">
        <a class="navbar-brand fw-bold" href="/">America</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <span></span>
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :to="{ name: 'Home' }" class="nav-link" aria-current="page"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'About' }" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Contact' }" class="nav-link"
                >Contact</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Post' }" class="nav-link">Post</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Style Guide' }" class="nav-link">
                Style Guide
              </router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success"  v-on:click="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <!-- <RouterView />
    <RouterView name="sidebar" /> -->
  </div>
</template>

<script>
import HeadBar from "./HeadBar.vue";
// import { RouterView } from "vue-router";
export default {
  name: "Header",
  components: {
    HeadBar,
  },
  methods: {
    submit(e) {
      e.preventDefault();
      alert('text input');
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.navbar-brand {
  font-family: $font-family-base;
  font-size: 26px;
}
nav {
  a.router-link-active {
    color: $primary !important;
  }
  li .nav-link:hover {
    color: $primary !important;
  }
}
</style>
