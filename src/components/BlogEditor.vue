<template>
    <div class="blog-editor">
      <input v-model="blog.title" placeholder="Title" />
      <input v-model="blog.author" placeholder="Author" />
      <input v-model="blog.id" placeholder="ID (slug)" />
      <textarea v-model="blog.description" placeholder="Content"></textarea>
      <button @click="saveBlog">Save Blog</button>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  
  const emit = defineEmits(['addNewItem'])
  
  const blog = reactive({
    title: '',
    author: '',
    id: '',
    description: ''
  })
  
  const saveBlog = () => {
    emit('addNewItem', { ...blog })
    Object.keys(blog).forEach(key => blog[key] = '')
  }
  </script>