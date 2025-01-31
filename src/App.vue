<script setup>
import BlogView from './components/BlogView.vue'
</script>

<template>
  <div class="app">
    <header>
      <h1>Blog Management</h1>
    </header>
    <main>
      <BlogView />
    </main>
  </div>
</template>

<style>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  margin-bottom: 30px;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

h1 {
  color: #333;
  font-size: 2em;
}

main {
  padding: 20px 0;
}
</style>