const NAMESPACE = 'brazil-japan'

const getKey = (key: string): string => `${NAMESPACE}:${key}`

export const storage = {
  get<T>(key: string): T | null {
    if (typeof window === 'undefined') return null

    try {
      const item = localStorage.getItem(getKey(key))
      return item ? (JSON.parse(item) as T) : null
    } catch (error) {
      console.error(`Error reading from localStorage (key: ${key}):`, error)
      return null
    }
  },

  set<T>(key: string, value: T): void {
    if (typeof window === 'undefined') return

    try {
      localStorage.setItem(getKey(key), JSON.stringify(value))
    } catch (error) {
      console.error(`Error writing to localStorage (key: ${key}):`, error)
    }
  },

  remove(key: string): void {
    if (typeof window === 'undefined') return

    try {
      localStorage.removeItem(getKey(key))
    } catch (error) {
      console.error(`Error removing from localStorage (key: ${key}):`, error)
    }
  },

  clear(): void {
    if (typeof window === 'undefined') return

    try {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith(`${NAMESPACE}:`)) {
          localStorage.removeItem(key)
        }
      })
    } catch (error) {
      console.error('Error clearing localStorage:', error)
    }
  },

  has(key: string): boolean {
    if (typeof window === 'undefined') return false
    return localStorage.getItem(getKey(key)) !== null
  },
}
