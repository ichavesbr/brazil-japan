import { type Status } from "../schemas/status.schema"

const CREATED_AT = new Date("2025-12-08")

export const STATUS: Status[] = [
  { id: 1, description: "Ativo", created_at: CREATED_AT },
  { id: 2, description: "Inativo", created_at: CREATED_AT },
  { id: 3, description: "Pendente", created_at: CREATED_AT },
]
