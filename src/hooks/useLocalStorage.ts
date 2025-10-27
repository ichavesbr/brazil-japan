import { useState, useEffect, useCallback } from 'react'
import { storage } from '@/lib/storage'

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = storage.get<T>(key)
      return item !== null ? item : initialValue
    } catch (error) {
      console.error(`Error initializing localStorage hook (key: ${key}):`, error)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      storage.set(key, storedValue)
    } catch (error) {
      console.error(`Error syncing to localStorage (key: ${key}):`, error)
    }
  }, [key, storedValue])

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      try {
        setStoredValue(prev => {
          const newValue = value instanceof Function ? value(prev) : value
          return newValue
        })
      } catch (error) {
        console.error(`Error updating localStorage value (key: ${key}):`, error)
      }
    },
    [key]
  )

  return [storedValue, setValue]
}
