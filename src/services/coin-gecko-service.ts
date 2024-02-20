import axios from "axios"

interface IGetCoinsPaged {
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
  price_change_percentage?: "1h" | "24h" | "7d" | "14d" | "30d" | "200d" | "1y"
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

const API = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  headers: {
    "x-cg-api-key": "CG-z9K3NYjxzfiFWMzAb9Lvz1y9",
  },
})

export const useCoinGeckoService = () => {
  const checkApiStatus = async () => {
    return await API.get(`/ping`)
  }

  const getCoinsPaged = async (data: IGetCoinsPaged) => {
    return await API.get("/coins/markets", {
      params: {
        vs_currency: "usd",
        locale: "en",
        ...data,
      },
    })
  }

  return { checkApiStatus, getCoinsPaged }
}
