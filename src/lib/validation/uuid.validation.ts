import { isString } from "./strings.validation"

const isUUIDv4 = (value: unknown): value is string => {
  if (!isString(value)) {
    return false
  }

  const uuidv4Regex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

  return uuidv4Regex.test(value)
}

export { isUUIDv4 }
