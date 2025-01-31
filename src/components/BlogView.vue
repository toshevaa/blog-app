<template>
    <div class="blog-view">
      <button v-if="!showEditor" @click="showEditor = true">Add new blog</button>
      <BlogEditor v-else @addNewItem="addItem" />
      
      <Blogs 
        :blogs="blogs"
        :isLoading="isLoading"
        :error="error"
        @deleteBlog="deleteItem"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import BlogEditor from './BlogEditor.vue'
  import Blogs from './Blogs.vue'
  import { useBlogs } from '../composables/useBlogs'
  
  const showEditor = ref(false)
  const { blogs, loading: isLoading, error, addItem, deleteItem } = useBlogs()
  </script>
  
  <style>
  .blog-editor {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
  }
  
  .blog-editor input,
  .blog-editor textarea {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 8px;
  }
  
  .blog-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
  }
  
  .blog-item {
    border: 1px solid #eee;
    padding: 15px;
    border-radius: 8px;
  }
  
  .blog-item img {
    max-width: 100%;
    height: auto;
  }
  
  .search-section {
    padding: 20px;
  }
  
  .search-section input[type="text"] {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
  }
  
  fieldset {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px 0;
  }
  </style>