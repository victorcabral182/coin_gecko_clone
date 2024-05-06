export interface ICapitalizationRowData {
  active_cryptocurrencies: number
  upcoming_icos: number
  ongoing_icos: number
  ended_icos: number
  markets: number
  total_market_cap: {
    [currency: string]: number
  }
  total_volume: {
    [currency: string]: number
  }
  market_cap_percentage: {
    [currency: string]: number
  }
  market_cap_change_percentage_24h_usd: number
  updated_at: number
}
