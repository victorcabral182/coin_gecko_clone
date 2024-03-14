"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

import { SearchInputBox } from "@/components/SearchInputBox"
import { CapitalizationRow } from "@/components/CapitalizationRow"
import { useGeneralContext } from "@/contexts/generalContext/GeneralContext"
import { checkCondition, handleMarketCap } from "@/utils/utils"
import { FaCaretDown, FaCaretUp, FaMinus } from "react-icons/fa"
import { useCoinGeckoService } from "@/services/coin-gecko-service"
import LinearProgress from "@mui/material/LinearProgress"

export default function CoinPage({ params }: { params: { id: string } }) {
  const { globalData } = useGeneralContext()
  const { getCoinDataById } = useCoinGeckoService()
  const [data, setData] = useState<any>()

  async function tryGetCoinDataById() {
    try {
      const response = await getCoinDataById(params.id)
      setData(response)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    tryGetCoinDataById()
  }, []) // eslint-disable-line

  const loadCoinImage = () => {
    return data?.image?.thumb
  }

  const coinPrice = data?.market_data?.current_price?.usd?.toLocaleString(
    "en-US",
    {
      style: "currency",
      currency: "USD",
    }
  )

  const coinVariation24h =
    data?.market_data?.price_change_percentage_24h.toFixed(1)
  console.log(coinVariation24h)

  return (
    <main className="flex flex-col">
      <div className="flex xl:hidden">
        <SearchInputBox />
      </div>
      <div className="flex xl:hidden mb-4">
        <CapitalizationRow data={globalData} />
      </div>
      <section className="flex flex-col gap-3">
        <div className="flex gap-2 items-center">
          <Image
            alt=""
            src="me.png"
            width={24}
            height={24}
            loader={() => loadCoinImage()}
          />
          <span className="font-bold">{data?.name}</span>
          <span className="text-[#64748B] text-sm">
            {data?.symbol.toUpperCase()} Price
          </span>
          <span className="bg-[#f1f5f9] p-1 rounded-lg text-[12px]">
            #{data?.market_cap_rank}
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-3xl font-bold">{coinPrice}</span>
          <span
            className={`${checkCondition(coinVariation24h)} font-bold mt-1`}
          >
            {coinVariation24h > 0 ? (
              <FaCaretUp className="inline mb-1 " size={20} />
            ) : coinVariation24h < 0 ? (
              <FaCaretDown className="inline mb-1 " size={20} />
            ) : (
              <FaMinus className="inline mb-1 " size={20} />
            )}
            {coinVariation24h}%
          </span>
        </div>
        <div>
          <LinearProgress
            variant="determinate"
            value={75}
            className="rounded-lg h-[6px]"
          />
        </div>
      </section>
    </main>
  )
}
