import { useState, useEffect, useCallback } from 'react'
import { storage } from '@/lib/storage'

/**
 * React hook for managing state synchronized with localStorage
 * Provides reactive updates when the value changes
 *
 * @param key - The localStorage key to use
 * @param initialValue - The initial value if key doesn't exist
 * @returns A stateful value and a setter function (like useState)
 *
 * @example
 * const [user, setUser] = useLocalStorage<User>('user', null)
 * setUser({ id: 1, name: 'John' })
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  // Initialize state from localStorage or use initialValue
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = storage.get<T>(key)
      return item !== null ? item : initialValue
    } catch (error) {
      console.error(`Error initializing localStorage hook (key: ${key}):`, error)
      return initialValue
    }
  })

  // Update localStorage when state changes
  useEffect(() => {
    try {
      storage.set(key, storedValue)
    } catch (error) {
      console.error(`Error syncing to localStorage (key: ${key}):`, error)
    }
  }, [key, storedValue])

  // Wrap setter to support functional updates
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
