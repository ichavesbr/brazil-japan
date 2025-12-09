import { type Sex } from "../schemas/sex.schemas"

const CREATED_AT = new Date("2025-12-08")

export const STATUS: Sex[] = [
  { id: 1, description: "Feminino", created_at: CREATED_AT },
  { id: 2, description: "Masculino", created_at: CREATED_AT },
]
