import { ref } from 'vue'

export function useListActions(listRef) {
  const addItem = (item) => {
    listRef.value.push(item)
  }

  const deleteItem = (id) => {
    listRef.value = listRef.value.filter(item => item.id !== id)
  }

  return { addItem, deleteItem }
}