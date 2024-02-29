"use client"

import { useCoinGeckoService } from "@/services/coin-gecko-service"
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

const GeneralContext = createContext<IGeneralContext | null>(null)

export const useGeneralContext = () => {
  return useContext(GeneralContext)
}

interface IGeneralContext {
  globalData: any
  coinsMarket: any[]
  trending: any
  setGlobalData: Dispatch<SetStateAction<any[]>>
  setCoinsMarket: Dispatch<SetStateAction<any[]>>
}

export const GeneralContextProvider = ({ children }) => {
  const { getCoinsPaged, getGlobalData, getTrending, checkApiStatus } =
    useCoinGeckoService()
  const [globalData, setGlobalData] = useState<any>(null)
  const [coinsMarket, setCoinsMarket] = useState<any[]>([])
  const [trending, setTrending] = useState<any>(null)

  async function tryGetCoinsMarket() {
    try {
      const response = await getCoinsPaged({
        per_page: 50,
        page: 1,
        order: "market_cap_desc",
        price_change_percentage: "1h,24h,7d",
        sparkline: true,
      })
      return response
    } catch (err) {
      alert("Ocorreu um erro: " + err.message)
      console.error(err)
    }
  }

  async function tryGetGlobalData() {
    try {
      const response = await getGlobalData()
      return response
    } catch (err) {
      console.error(err)
    }
  }

  async function tryGetTrending() {
    try {
      const response = await getTrending()
      return response
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    Promise.all([tryGetCoinsMarket(), tryGetGlobalData(), tryGetTrending()])
      .then(
        ([coinsMarketResponse, globalDataResponse, trendingResponse]: any) => {
          setCoinsMarket(coinsMarketResponse ?? [])
          setGlobalData(globalDataResponse.data ?? {})
          setTrending(trendingResponse ?? {})
        }
      )
      .catch((err) => {
        console.error(err)
      })
  }, []) // eslint-disable-line

  return (
    <GeneralContext.Provider
      value={{
        globalData,
        coinsMarket,
        trending,
        setGlobalData,
        setCoinsMarket,
      }}
    >
      {children}
    </GeneralContext.Provider>
  )
}
