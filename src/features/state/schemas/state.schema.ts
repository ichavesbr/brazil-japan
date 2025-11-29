export interface State {
  id: number
  description: string
  created_at: Date
  updated_at?: Date
}
export interface StateUpdate {
  description?: string
  updated_at: Date
}
export interface StateSearch {
  id?: number
  description?: string
  created_at?: Date
}
