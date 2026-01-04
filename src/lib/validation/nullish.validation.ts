const isNull = (value: unknown): value is null => value === null

const isUndefined = (value: unknown): value is undefined => value === undefined

const isNullish = (value: unknown): value is null | undefined =>
  isNull(value) || isUndefined(value)

export { isNull, isUndefined, isNullish }
