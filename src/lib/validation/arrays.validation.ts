const isArray = (value: unknown): value is unknown[] => {
  return Array.isArray(value)
}

const isNonEmptyArray = (value: unknown): value is unknown[] => {
  if (!isArray(value)) {
    return false
  }

  return isArray(value) && value.length > 0
}

const arrayOf = <T>(
  value: unknown,
  guard: (item: unknown) => item is T
): value is T[] => {
  if (!isArray(value)) {
    return false
  }

  return isArray(value) && value.every(guard)
}

export { isArray, isNonEmptyArray, arrayOf }
