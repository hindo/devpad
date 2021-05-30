export const findItemIndexById = (items, id) => {
  return items.findIndex(item => item.id === id)
}

export const overideItemAtIndex = (arr, newItem, targetIndex) => {
  return arr.map((item, index) => {
    if (index !== targetIndex) {
      return item
    }
    return newItem
  })
}
