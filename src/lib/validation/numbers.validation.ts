const isNumber = (value: unknown): value is number => typeof value === "number"

const isFiniteNumber = (value: unknown): boolean => {
  if (!isNumber(value)) {
    return false
  }

  return Number.isFinite(value)
}

const isInteger = (value: unknown): boolean => {
  if (!isNumber(value)) {
    return false
  }

  return Number.isFinite(value) && Number.isInteger(value)
}

const isDecimal = (value: unknown): boolean => {
  if (!isNumber(value)) {
    return false
  }

  return Number.isFinite(value) && !Number.isInteger(value)
}

export { isNumber, isFiniteNumber, isInteger, isDecimal }
