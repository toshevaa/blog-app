<template>
  <BlogView />
</template>

<script setup>
import BlogView from './components/BlogView.vue'
</script>

<style scoped>
body {
  background: #f8f9fa;
  font-family: 'Segoe UI', system-ui, sans-serif;
  line-height: 1.6;
  margin: 0 auto;
  padding: 1rem;
}

.loading {
  text-align: center;
  padding: 2rem;
  color: #3498db;
  font-size: 1.2rem;
}

.error {
  background: #e74c3c;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin: 2rem auto;
  max-width: 800px;
  text-align: center;
}
</style>