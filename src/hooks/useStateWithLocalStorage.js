import { useState } from 'react'

export function useStateWithLocalStorage (key, initialValue) {
  const [item, setItem] = useState(() => {
    const localStorageItem = window.localStorage.getItem(`${key}`)

    return localStorageItem
      ? JSON.parse(localStorageItem)
      : initialValue
  })

  const setItemWithLocalStorage = (value) => {
    window.localStorage.setItem(`${key}`, JSON.stringify(value))
    setItem(value)
  }

  return [item, setItemWithLocalStorage]
}
