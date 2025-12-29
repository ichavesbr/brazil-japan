const isString = (value: unknown): value is string => typeof value === "string"

const hasText = (value: unknown): value is string => {
  if (!isString(value)) {
    return false
  }

  return value.trim().length > 0
}

export { isString, hasText }
