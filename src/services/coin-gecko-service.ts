import axios from "axios"
import { IGetCoinsPagedParams, IMarketData } from "./types"

const API = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
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
        x_cg_demo_api_key: process.env.NEXT_PUBLIC_API_KEY,
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
    const response = await API.get<any[]>(
      `/coins/${id}?sparkline=true&x_cg_demo_api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
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
    const response = await API.get<IMarketData>(
      `/global?x_cg_demo_api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
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
    const response = await API.get<any>(
      `/search/trending?x_cg_demo_api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
    localStorage.setItem("trending", JSON.stringify(response))
    localStorage.setItem("trendingLastUpdated", new Date().getTime().toString())
    return response
  }

  const getSearch = async (coinName: string) => {
    let cache = localStorage.getItem(`search${coinName}`)
    let lastUpdatedTime = localStorage.getItem(`search${coinName}LastUpdated`)
    if (cache && lastUpdatedTime) {
      const currentTime = new Date().getTime()
      const timeDifference = currentTime - parseInt(lastUpdatedTime)
      if (timeDifference <= 300000) {
        return JSON.parse(cache)
      } else {
        localStorage.removeItem(`search${coinName}`)
        localStorage.removeItem(`search${coinName}LastUpdated`)
      }
    }
    const response = await API.get<any>(
      `/search?query=${coinName}&vs_currency=usd&x_cg_demo_api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
    localStorage.setItem(`search${coinName}`, JSON.stringify(response))
    localStorage.setItem(
      `search${coinName}LastUpdated`,
      new Date().getTime().toString()
    )
    return response
  }

  return {
    checkApiStatus,
    getSearch,
    getCoinsPaged,
    getGlobalData,
    getTrending,
    getCoinDataById,
  }
}
