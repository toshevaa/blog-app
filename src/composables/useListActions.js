export function useListActions(items) {
    const addItem = (newItem) => {
      items.value.push(newItem)
    }
  
    const deleteItem = (id) => {
      const index = items.value.findIndex(item => item.id === id)
      if (index !== -1) {
        items.value.splice(index, 1)
      }
    }
  
    return { addItem, deleteItem }
  }