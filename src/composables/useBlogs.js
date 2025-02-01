import { ref } from 'vue'
import { createClient } from 'contentful'
import { useListActions } from './useListActions'

const client = createClient({
  space: 'gtumihl4q7si',
  accessToken: 'VxuR21ciWacDiADRy-gKS7nLczA5bJUeGNgry4FJ898',
  environment: 'master'
})

export function useBlogs() {
  const blogs = ref([])
  const isLoading = ref(true)
  const error = ref(null)

  const fetchBlogs = async () => {
    try {
      const res = await client.getEntries({ content_type: 'blog' })
      blogs.value = res.items.map(item => ({
        id: item.fields.slug,
        title: item.fields.title,
        description: item.fields.description,
        heroImage: item.fields.heroImage?.fields?.file?.url || '',
        publishDate: new Date(item.fields.publishDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }))
    } catch (err) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  fetchBlogs()

  const { addItem, deleteItem } = useListActions(blogs)

  return {
    blogs,
    isLoading,
    error,
    addItem,
    deleteItem
  }
}