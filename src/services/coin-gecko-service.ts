import axios from "axios"

interface IGetCoinsPagedParams {
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

interface IMarketData {
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

  const getCoinsPaged = async (data: IGetCoinsPagedParams) => {
    let cachedData = localStorage.getItem("coinsPaged")
    let lastUpdatedTime = localStorage.getItem("coinsPagedLastUpdated")
    if (cachedData && lastUpdatedTime) {
      const currentTime = new Date().getTime()
      const timeDifference = currentTime - parseInt(lastUpdatedTime)
      if (timeDifference <= 300000) {
        return JSON.parse(cachedData)
      } else {
        localStorage.removeItem("coinsPaged")
        localStorage.removeItem("coinsPagedLastUpdated")
      }
    }
    const response = await API.get<any[]>("/coins/markets", {
      params: {
        vs_currency: "usd",
        locale: "en",
        ...data,
      },
    })
    localStorage.setItem("coinsPaged", JSON.stringify(response.data))
    localStorage.setItem(
      "coinsPagedLastUpdated",
      new Date().getTime().toString()
    )
    return response.data
  }

  const getCoinDataById = async (id: string) => {
    let cachedData = localStorage.getItem(id)
    let lastUpdatedTime = localStorage.getItem(`${id}LastUpdated`)
    if (cachedData && lastUpdatedTime) {
      const currentTime = new Date().getTime()
      const timeDifference = currentTime - parseInt(lastUpdatedTime)
      if (timeDifference <= 60000) {
        return JSON.parse(cachedData)
      } else {
        localStorage.removeItem(id)
        localStorage.removeItem(`${id}LastUpdated`)
      }
    }
    const response = await API.get<any[]>(`/coins/${id}?sparkline=true`)
    localStorage.setItem(id, JSON.stringify(response.data))
    localStorage.setItem(`${id}LastUpdated`, new Date().getTime().toString())
    return response.data
  }

  const getGlobalData = async (): Promise<IMarketData> => {
    let cache = localStorage.getItem("globalData")
    let lastUpdatedTime = localStorage.getItem("globalDataLastUpdated")
    if (cache && lastUpdatedTime) {
      const currentTime = new Date().getTime()
      const timeDifference = currentTime - parseInt(lastUpdatedTime)
      if (timeDifference <= 300000) {
        return JSON.parse(cache)
      } else {
        localStorage.removeItem("globalData")
        localStorage.removeItem("globalDataLastUpdated")
      }
    }
    const response = await API.get<IMarketData>("/global")
    localStorage.setItem("globalData", JSON.stringify(response.data))
    localStorage.setItem(
      "globalDataLastUpdated",
      new Date().getTime().toString()
    )
    return response.data
  }

  const getTrending = async () => {
    let cache = localStorage.getItem("trending")
    let lastUpdatedTime = localStorage.getItem("trendingLastUpdated")
    if (cache && lastUpdatedTime) {
      const currentTime = new Date().getTime()
      const timeDifference = currentTime - parseInt(lastUpdatedTime)
      if (timeDifference <= 300000) {
        return JSON.parse(cache)
      } else {
        localStorage.removeItem("trending")
        localStorage.removeItem("trendingLastUpdated")
      }
    }
    const response = await API.get<any>("/search/trending")
    localStorage.setItem("trending", JSON.stringify(response))
    localStorage.setItem("trendingLastUpdated", new Date().getTime().toString())
    return response
  }

  return {
    checkApiStatus,
    getCoinsPaged,
    getGlobalData,
    getTrending,
    getCoinDataById,
  }
}
