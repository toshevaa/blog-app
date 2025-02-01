import { ref, computed } from 'vue'

export function useSearch(itemsRef) {
  const searchTerm = ref('')
  const filters = ref(['title'])

  const filteredItems = computed(() => {
    if (!searchTerm.value) return itemsRef.value

    return itemsRef.value.filter(item => 
      filters.value.some(filter => 
        String(item[filter]).toLowerCase().includes(searchTerm.value.toLowerCase())
      )
    )
  })

  return { searchTerm, filters, filteredItems }
}