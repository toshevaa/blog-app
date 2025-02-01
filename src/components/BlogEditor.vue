<template>
    <div class="editor">
        <input v-model="newBlog.title" placeholder="Title">
        <input v-model="newBlog.id" placeholder="Slug ID">
        <textarea v-model="newBlog.description" placeholder="Content"></textarea>
        <button class="save-btn" @click="saveBlog">Save</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['addNewItem'])

const newBlog = ref({
    title: '',
    id: '',
    description: '',
    heroImage: 'https://placehold.co/600x400',
    publishDate: new Date().toISOString()
})

const saveBlog = () => {
    emit('addNewItem', { ...newBlog.value })
    newBlog.value = {
        title: '',
        id: '',
        description: '',
        heroImage: 'https://placehold.co/600x400',
        publishDate: new Date().toISOString()
    }
}
</script>

<style scoped>
.editor {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    margin: 2rem auto;
    max-width: 600px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

.save-btn {
    background: #2196F3;
    color: white;

}

.save-btn:hover {
    background-color: #0469bb;

}


.editor input,
.editor textarea {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 2px solid #bdc3c7;
    border-radius: 8px;
    font-size: 1rem;
}
</style>