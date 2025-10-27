/**
 * LocalStorage wrapper with namespace to avoid conflicts
 * SSR-safe (checks for window before accessing localStorage)
 */

const NAMESPACE = 'brazil-japan'

/**
 * Generates a namespaced key
 */
const getKey = (key: string): string => `${NAMESPACE}:${key}`

/**
 * Storage utility for managing localStorage with namespace and type safety
 */
export const storage = {
  /**
   * Get an item from localStorage
   * @param key - The key to retrieve
   * @returns The parsed value or null if not found/error
   */
  get<T>(key: string): T | null {
    if (typeof window === 'undefined') return null

    try {
      const item = localStorage.getItem(getKey(key))
      return item ? JSON.parse(item) as T : null
    } catch (error) {
      console.error(`Error reading from localStorage (key: ${key}):`, error)
      return null
    }
  },

  /**
   * Set an item in localStorage
   * @param key - The key to set
   * @param value - The value to store (will be JSON stringified)
   */
  set<T>(key: string, value: T): void {
    if (typeof window === 'undefined') return

    try {
      localStorage.setItem(getKey(key), JSON.stringify(value))
    } catch (error) {
      console.error(`Error writing to localStorage (key: ${key}):`, error)
    }
  },

  /**
   * Remove an item from localStorage
   * @param key - The key to remove
   */
  remove(key: string): void {
    if (typeof window === 'undefined') return

    try {
      localStorage.removeItem(getKey(key))
    } catch (error) {
      console.error(`Error removing from localStorage (key: ${key}):`, error)
    }
  },

  /**
   * Clear all items from localStorage (namespace-aware)
   */
  clear(): void {
    if (typeof window === 'undefined') return

    try {
      // Only clear items with our namespace
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith(`${NAMESPACE}:`)) {
          localStorage.removeItem(key)
        }
      })
    } catch (error) {
      console.error('Error clearing localStorage:', error)
    }
  },

  /**
   * Check if a key exists in localStorage
   * @param key - The key to check
   */
  has(key: string): boolean {
    if (typeof window === 'undefined') return false
    return localStorage.getItem(getKey(key)) !== null
  },
}
