import React, { useEffect, useReducer, useRef, useState } from "react"
import { SearchMenuOption } from "../SearchMenuOption"
import Link from "next/link"
import { useGeneralContext } from "@/contexts/generalContext/GeneralContext"

interface TrendingSectionProps {
  trendSelected?: number
  list: any
}

export const TrendingSection = ({
  trendSelected,
  list,
}: TrendingSectionProps) => {
  const trend = useRef(null)
  const nft = useRef(null)
  const categories = useRef(null)

  const { trending } = useGeneralContext()

  const [initialState, setInitialState] = useState<boolean>(true)

  useEffect(() => {
    if (list.data) {
      setInitialState(false)
    } else if (list.length === 0) {
      setInitialState(true)
    }
  }, [list])

  return (
    <div className="min-h-[calc(100vh-120px)] max-h-[calc(100vh-120px)] overflow-y-auto pb-[128px]">
      {initialState ? (
        <section>
          <div className="flex flex-col">
            <div
              ref={trend}
              className="w-full flex whitespace-nowrap gap-1 items-center mt-2 my-1"
            >
              <span className="w-fit text-xs text-[#64748b]">
                Pesquisa de Trending 🔥
              </span>
              <div className="w-full border-b border-gray-200" />
            </div>
            {trending?.data?.coins.map((e) => {
              return (
                <Link href={`/coin/${e.item.id}`} key={e.item.id}>
                  <SearchMenuOption
                    title={e.item.name}
                    thumb={e.item.thumb}
                    prefix={e.item.symbol}
                    variation={e.item.data.price_change_percentage_24h.usd.toFixed(
                      2
                    )}
                  />
                </Link>
              )
            })}
          </div>
          <div className="flex flex-col">
            <div className="w-full flex whitespace-nowrap gap-1 items-center mt-2 my-1">
              <span className="w-fit text-xs text-[#64748b]">
                Trending NFT 💎
              </span>
              <div className="w-full border-b border-gray-200" />
            </div>
            {trending?.data?.nfts.map((e) => {
              return (
                <SearchMenuOption
                  key={e.id}
                  title={e.name}
                  thumb={e.thumb}
                  prefix={e.symbol}
                  variation={e.floor_price_24h_percentage_change.toFixed(2)}
                />
              )
            })}
          </div>
          <div className="flex flex-col">
            <div
              ref={categories}
              className="w-full flex whitespace-nowrap gap-1 items-center mt-2 my-1"
            >
              <span className="w-fit text-xs text-[#64748b]">
                Categorias de Treding ✨
              </span>
              <div className="w-full border-b border-gray-200" />
            </div>
            {trending?.data?.categories.map((e) => {
              return (
                <SearchMenuOption
                  key={e.id}
                  title={e.name}
                  thumb={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR50amq_WUnbAoLzkpTgkwOxBUYLpbj-pzjCsNfImuboA&s"
                  }
                  prefix={e.symbol}
                  variation={e.data.market_cap_change_percentage_24h.usd.toFixed(
                    2
                  )}
                />
              )
            })}
          </div>
        </section>
      ) : (
        <section className="min-h-[calc(100vh-100px)] overflow-y-auto">
          {trendSelected === 1 && (
            <section className="flex flex-col">
              {list?.data?.coins && (
                <>
                  <div className="w-full flex whitespace-nowrap gap-1 items-center mt-2 my-1">
                    <span className="w-fit text-xs text-[#64748b]">
                      Criptomoedas
                    </span>
                    <div className="w-full border-b border-gray-200" />
                  </div>
                  {list?.data?.coins.slice(0, 10).map((item) => {
                    return (
                      <Link href={`/coin/${item.id}`} key={item.id}>
                        <SearchMenuOption
                          title={item.name}
                          thumb={item.thumb}
                          prefix={item.symbol}
                        />
                      </Link>
                    )
                  })}
                </>
              )}
              {list?.data?.nfts && (
                <>
                  <div className="w-full flex whitespace-nowrap gap-1 items-center mt-2 my-1">
                    <span className="w-fit text-xs text-[#64748b]">NFT</span>
                    <div className="w-full border-b border-gray-200" />
                  </div>
                  {list?.data?.nfts.slice(0, 10).map((item) => {
                    return (
                      <SearchMenuOption
                        key={item.id}
                        title={item.name}
                        thumb={item.thumb}
                        prefix={item.symbol}
                      />
                    )
                  })}
                </>
              )}
              {list?.data?.exchanges && (
                <>
                  <div className="w-full flex whitespace-nowrap gap-1 items-center mt-2 my-1">
                    <span className="w-fit text-xs text-[#64748b]">
                      Corretoras
                    </span>
                    <div className="w-full border-b border-gray-200" />
                  </div>
                  {list?.data?.exchanges.slice(0, 10).map((item) => {
                    return (
                      <SearchMenuOption
                        key={item.id}
                        title={item.name}
                        thumb={item.thumb}
                        prefix={item.market_type}
                      />
                    )
                  })}
                </>
              )}
              {list?.data?.categories && (
                <>
                  <div className="w-full flex whitespace-nowrap gap-1 items-center mt-2 my-1">
                    <span className="w-fit text-xs text-[#64748b]">
                      Categorias
                    </span>
                    <div className="w-full border-b border-gray-200" />
                  </div>
                  {list?.data?.categories.slice(0, 10).map((item) => {
                    return (
                      <SearchMenuOption
                        key={item.id}
                        title={item.name}
                        thumb={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR50amq_WUnbAoLzkpTgkwOxBUYLpbj-pzjCsNfImuboA&s"
                        }
                      />
                    )
                  })}
                </>
              )}
            </section>
          )}
        </section>
      )}
    </div>
  )
}
