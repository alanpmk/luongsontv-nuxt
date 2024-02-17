<script setup>
const router = useRoute()
</script>
<template>
  <div class="w-full mx-auto">
    This is the highlight page detail with id: <p> {{ router.params.id }}</p>
    <HightLightDetail/>


  </div>
</template>
