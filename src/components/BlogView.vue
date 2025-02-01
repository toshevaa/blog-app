<template>
    <div class="blog-view">
    
      <Blogs
        :blogs="blogs"
        :is-loading="isLoading"
        :error="error"
        @delete-blog="deleteItem"
      />
      <button class="add-blog" v-if="!showEditor" @click="showEditor = true">Add New Blog</button>
      <BlogEditor v-else @add-new-item="handleAddItem" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useBlogs } from '../composables/useBlogs'
  import BlogEditor from './BlogEditor.vue'
  import Blogs from './Blogs.vue'
  
  const showEditor = ref(false)
  const { blogs, isLoading, error, addItem, deleteItem } = useBlogs()
  
  const handleAddItem = (newBlog) => {
    addItem(newBlog)
    showEditor.value = false
  }
  </script>
  
  <style scoped>
  .blog-view {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }
  button {
    background: #2196F3;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    margin-left: 12px;
    margin-bottom: 1rem;
    cursor: pointer;
  }

  .add-blog:hover{
    background-color: #0469bb;

  }
  </style>