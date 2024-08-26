export interface IGetCoinsPagedParams {
  ids?: string[]
  category?: string
  order?:
    | "market_cap_asc"
    | "market_cap_desc"
    | "volume_asc"
    | "volume_desc"
    | "id_asc"
    | "id_desc"
  per_page?: number
  page?: number
  sparkline?: boolean
  price_change_percentage?:
    | string
    | "1h"
    | "24h"
    | "7d"
    | "14d"
    | "30d"
    | "200d"
    | "1y"
  locale?: "en"
}

export interface ICoinsMarkets {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  market_cap_rank: number
  fully_diluted_valuation: number
  total_volume: number
  high_24h: number
  low_24h: number
  price_change_24h: number
  price_change_percentage_24h: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  circulating_supply: number
  total_supply: number
  max_supply: number
  ath: number
  ath_change_percentage: number
  ath_date: string
  atl: number
  atl_change_percentage: number
  atl_date: string
  roi: null | number
  last_updated: string
}

export interface IMarketData {
  data: {
    active_cryptocurrencies: number
    upcoming_icos: number
    ongoing_icos: number
    ended_icos: number
    markets: number
    total_market_cap: {}
    total_volume: {}
    market_cap_percentage: {}
    market_cap_change_percentage_24h_usd: number
    updated_at: number
  }
}
