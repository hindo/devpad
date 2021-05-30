export const findItemIndexById = (items, id) => {
  return items.findIndex(item => item.id === id)
}

export const overrideItemAtIndex = (arr, newItem, targetIndex) => {
  return arr.map((item, index) => {
    if (index !== targetIndex) {
      return item
    }
    return newItem
  })
}

export const insertItemAtIndex = (arr, item, index) => {
  arr.splice(index, 0, item)
  return arr
}

export const removeItemAtIndex = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

export const moveItem = (arr, from, to) => {
  const item = arr[from]
  return insertItemAtIndex(removeItemAtIndex(arr, from), item, to)
}
