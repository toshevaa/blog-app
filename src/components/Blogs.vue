<template>
    <div class="blogs">
        <div v-if="isLoading">Loading...</div>
        <div v-else-if="error">Error: {{ error.message }}</div>
        <template v-else>
            <div class="controls">
                <div class="search-container">
                    <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>

                    <input v-model="searchTerm" class="search-input" type="text" placeholder="Search blogs...">
        
                </div>
                <div class="filter-class">
                    <legend>Filter by:</legend>
                    <label>
                        <input type="checkbox" value="title" v-model="filters">
                        Title
                    </label>
                    <label>
                        <input type="checkbox" value="description" v-model="filters">
                        Content
                    </label>
                </div>
            </div>
            <div class="blog-list">
                <div v-for="blog in filteredItems" :key="blog.id" class="blog-item">
                    <h3>{{ blog.title }}</h3>
                    <img v-if="blog.heroImage" :src="blog.heroImage" alt="Hero image">
                    <p>{{ blog.description }}</p>
                    <small>Published: {{ blog.publishDate }}</small><br><br>
                    <button class="rmv-btn" @click="$emit('deleteBlog', blog.id)">Remove</button>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, toRef } from 'vue'
import { useSearch } from '../composables/useSearch'

const props = defineProps(['blogs', 'isLoading', 'error'])
const emit = defineEmits(['deleteBlog'])

const { searchTerm, filters, filteredItems } = useSearch(toRef(props, 'blogs'))
</script>

<style scoped>
/* Blog list specific styles */
.blog-list {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.blog-item {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    transition: transform 0.2s ease;
}

.rmv-btn {
    background-color: rgb(176, 17, 17);
    color: white;
}

.rmv-btn:hover {
    background-color: rgb(147, 22, 22);
}

.search-container {
    position: relative;
    max-width: 600px;
    margin: 1rem 
}

.search-input {
    width: 100%;
    padding: 1rem 1rem 1rem 3rem;
    border: none;
    border-radius: 30px;
    margin: 0 auto;
    background: #ffffff;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    font-size: 1rem;
    color: #2c3e50;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.search-input:focus {
    outline: none;
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.12);
    background: #fff;
}

.search-input::placeholder {
    color: #95a5a6;
    font-weight: 300;
}

.search-icon {
    position: absolute;
    left: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
    color: #bdc3c7;
    pointer-events: none;
    transition: color 0.3s ease;
}

.search-input:focus+.search-icon {
    color: #3498db;
}

/* Optional: Floating label animation */
.search-label {
    position: absolute;
    left: 3rem;
    top: 50%;
    
    color: #95a5a6;
    pointer-events: none;
    transition: all 0.3s ease;
    background: white;
    padding: 0 0.5rem;
}

</style>