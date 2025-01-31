<template>
    <div class="blogs">
      <div v-if="isLoading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <template v-else>
        <div class="search-section">
          <input v-model="searchTerm" placeholder="Search blogs..." />
          <fieldset>
            <label>
              <input type="checkbox" value="title" v-model="filters" />
              By title
            </label>
            <label>
              <input type="checkbox" value="description" v-model="filters" />
              By content
            </label>
          </fieldset>
        </div>
        
        <div class="blog-list">
          <div v-for="blog in filteredItems" :key="blog.id" class="blog-item">
            <h3>{{ blog.title }}</h3>
            <p>{{ blog.description }}</p>
            <img v-if="blog.heroImage" :src="blog.heroImage" :alt="blog.title" />
            <p>Published: {{ new Date(blog.publishDate).toLocaleDateString() }}</p>
            <button @click="$emit('deleteBlog', blog.id)">Remove</button>
          </div>
        </div>
      </template>
    </div>
  </template>
  
  <script setup>
  import { useSearch } from '../composables/useSearch'
  
  const props = defineProps({
    blogs: { type: Array, required: true },
    isLoading: { type: Boolean, default: false },
    error: { type: String, default: '' }
  })
  
  const emit = defineEmits(['deleteBlog'])
  
  const { searchTerm, filters, filteredItems } = useSearch(props.blogs)
  </script>
  