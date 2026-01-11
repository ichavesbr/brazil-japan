const isObject = (value: unknown): value is object => {
  return typeof value === "object" && value !== null
}

const isRecord = (value: unknown): value is Record<string, unknown> => {
  if (
    !isObject(value) ||
    Array.isArray(value) ||
    value instanceof Date ||
    value instanceof Map
  ) {
    return false
  }

  const proto = Object.getPrototypeOf(value)
  return proto === Object.prototype || proto === null
}

const hadOwn = (obj: object, key: string): boolean => {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

export { isObject, isRecord, hadOwn }
