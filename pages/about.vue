<script setup>
import { ref, onMounted } from 'vue';

const route = useRoute();
const message = ref('Hello, World!');
</script>

<template>
  <div>
    <h1>About Page</h1>
    <p>Current route: {{ route.path }}</p>
    {{ message }}
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>
</template>
