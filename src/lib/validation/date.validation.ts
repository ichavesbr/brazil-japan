import { isFiniteNumber } from "./numbers.validation"
import { isString } from "./strings.validation"

const isDate = (value: unknown): value is Date => {
  if (!(value instanceof Date)) {
    return false
  }

  return isFiniteNumber(value.getTime())
}

const isISODateString = (value: unknown): value is string => {
  if (!isString(value)) {
    return false
  }

  const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/

  if (!isoDateRegex.test(value)) {
    return false
  }

  const [year = 0, month = 0, day = 0] = value.split("-").map(Number)

  const timestamp = Date.UTC(year, month - 1, day)

  if (!isFiniteNumber(timestamp)) {
    return false
  }

  const date = new Date(timestamp)

  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  )
}

export { isDate, isISODateString }
