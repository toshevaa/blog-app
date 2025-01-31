import { ref } from 'vue'
import { createClient } from 'contentful'
import { useListActions } from './useListActions'

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
})

export function useBlogs() {
  const blogs = ref([])
  const loading = ref(true)
  const error = ref(null)
  const { addItem, deleteItem } = useListActions(blogs)

  const fetchBlogs = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'blogPost'
      })
      blogs.value = response.items.map(item => ({
        id: item.sys.id,
        title: item.fields.title,
        description: item.fields.description,
        heroImage: item.fields.heroImage?.fields?.file?.url,
        publishDate: item.fields.publishDate
      }))
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  fetchBlogs()

  return { blogs, loading, error, addItem, deleteItem }
}