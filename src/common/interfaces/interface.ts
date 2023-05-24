export interface UserInterface {
  mail: string
  nickname: string
  password: string
  photo: string
}

export interface PfxInterface {
  userId: string
  money_acount: number
  money_saved: ForeignCurrency[]
  money_per_day: number
  start_selected_day: Date
  end_selected_day: Date
  days: DescriptionDay[]
}

export interface ForeignCurrency {
  name: string
  amount: number
}

export interface DescriptionDay {  
  day: Date
  movement_day: Movement[]
  total_amount_day: number
  money_per_day?: number
}

export interface Movement {  
  description: string
  amount: number
}