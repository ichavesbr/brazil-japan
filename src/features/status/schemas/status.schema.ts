export interface Status {
  id: number
  description: string
  created_at: Date
  updated_at?: Date
}
export interface StatusUpdate {
  description?: string
  updated_at: Date
}
export interface StatusSearch {
  id?: number
  description?: string
  created_at?: Date
}
