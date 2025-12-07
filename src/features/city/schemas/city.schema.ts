export interface City {
  id: number
  state_id: number
  description: string
  created_at: Date
  updated_at?: Date
}
export interface CityInput {
  state_id: number
  description: string
}
export interface CitySearch {
  id?: number
  state_id?: number
  description?: string
}
