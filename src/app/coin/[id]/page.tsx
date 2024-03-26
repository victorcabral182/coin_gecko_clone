"use client"

import { AiOutlineStar } from "react-icons/ai"
import Image from "next/image"
import { useEffect, useState } from "react"
import { SearchInputBox } from "@/components/SearchInputBox"
import { CapitalizationRow } from "@/components/CapitalizationRow"
import { useGeneralContext } from "@/contexts/generalContext/GeneralContext"
import { checkCondition, handleMarketCap } from "@/utils/utils"
import { FaCaretDown, FaCaretUp, FaMinus } from "react-icons/fa"
import { useCoinGeckoService } from "@/services/coin-gecko-service"
import LinearProgress from "@mui/material/LinearProgress"
import { Button3D } from "@/components/Button3D"
import { Line, ResponsiveLine } from "@nivo/line"
import { MarketInfoCoin } from "@/components/MarketInfoCoin"
import { SimpleTableVariation } from "@/components/SimpleTableVariation"
import { CommunityOpinion } from "@/components/CommunityOpinion"

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
  const coinVariation24h = data?.market_data?.price_change_percentage_24h
  const minValueDay = data?.market_data?.low_24h?.usd?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })
  const maxValueDay = data?.market_data?.high_24h?.usd?.toLocaleString(
    "en-US",
    {
      style: "currency",
      currency: "USD",
    }
  )

  const sparkline = data?.market_data?.sparkline_7d?.price?.map(
    (item, index) => {
      return { x: index, y: item }
    }
  )

  const handleLinearProgressValue = () => {
    let min = data?.market_data?.low_24h?.usd
    let max = data?.market_data?.high_24h?.usd
    let value = data?.market_data?.current_price?.usd
    if (min !== undefined && max !== undefined && value !== undefined) {
      let percentage = ((value - min) / (max - min)) * 100
      return percentage
    } else {
      return null
    }
  }

  return (
    <main className="flex flex-col">
      <div className="flex xl:hidden">
        <SearchInputBox />
      </div>
      <div className="flex xl:hidden mb-4">
        <CapitalizationRow data={globalData} />
      </div>
      <section className="flex flex-col gap-3 xl:grid xl:grid-cols-3">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center col-span-1">
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
          <div className="flex items-center col-span-1">
            <span className="text-3xl font-bold">{coinPrice}</span>
            <span
              className={`font-bold mt-1`}
              style={{
                color: checkCondition(coinVariation24h)
                  .replace("text-[", "")
                  .replace("]", ""),
              }}
            >
              {coinVariation24h > 0 ? (
                <FaCaretUp className="inline mb-1" size={20} />
              ) : coinVariation24h < 0 ? (
                <FaCaretDown className="inline mb-1" size={20} />
              ) : (
                <FaMinus className="inline mb-1" size={20} />
              )}
              {coinVariation24h?.toFixed(1)}%
            </span>
          </div>
          <LinearProgress
            sx={{
              ".MuiLinearProgress-barColorPrimary": {
                background: "linear-gradient(to right, yellow, #61b133)",
                borderRadius: "8px",
              },
            }}
            variant="determinate"
            value={handleLinearProgressValue()}
            className="rounded-lg h-[6px] bg-[#eff2f5]"
          />
          <div className="flex justify-between">
            <span className="text-[#0f172a] text-xs font-semibold">
              {minValueDay}
            </span>
            <span className="text-[#0f172a] text-xs font-semibold">
              Intervalo de 24h
            </span>
            <span className="text-[#0f172a] text-xs font-semibold">
              {maxValueDay}
            </span>
          </div>
          <Button3D
            variant="outline"
            className="flex items-center gap-2 w-full mt-2"
          >
            <AiOutlineStar size={16} />
            Adicionar à carteira •
            <span className="font-normal text-[11px] text-[#64748B]">
              {data?.watchlist_portfolio_users?.toLocaleString()} adicionado
            </span>
          </Button3D>
          <div className="hidden xl:block">
            <MarketInfoCoin data={data} />
          </div>
        </div>
        <div className="flex flex-col gap-2 col-span-2">
          <div style={{ height: "400px" }} className="mb-4">
            <ResponsiveLine
              data={[{ id: data?.name, data: sparkline ?? [] }]}
              enableSlices="x"
              yFormat=" >-$,.2f"
              useMesh={true}
              enableArea={true}
              enableGridX={false}
              isInteractive={true}
              enablePoints={false}
              enableTouchCrosshair={true}
              axisLeft={null}
              axisBottom={null}
              margin={{ top: 0, right: 50, bottom: 0, left: 0 }}
              axisRight={{
                tickPadding: 10,
              }}
              crosshairType="cross"
              xScale={{ type: "linear" }}
              yScale={{
                type: "linear",
                stacked: true,
                min:
                  data &&
                  Math.min(...data?.market_data?.sparkline_7d?.price) * 0.99,
                max:
                  data &&
                  Math.max(...data?.market_data?.sparkline_7d?.price) * 1.01,
              }}
            />
          </div>
          <SimpleTableVariation data={data} />
          <div className="xl:hidden">
            <MarketInfoCoin data={data} />
          </div>
          <CommunityOpinion data={data} />
          <section className="flex flex-col gap-3 mt-4">
            <span className="text-[#334155] font-bold">
              O que é {data?.name}? ({data?.symbol.toUpperCase()})
            </span>
            <div
              className="text-[12px] leading-5 text-[#64748b] text-justify"
              dangerouslySetInnerHTML={{ __html: data?.description?.en }}
            />
          </section>
        </div>
      </section>
    </main>
  )
}
