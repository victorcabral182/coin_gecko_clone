import React, { useRef, useState } from "react"
import { SearchMenuOption } from "../SearchMenuOption"
import Link from "next/link"

interface TrendingSectionProps {
  trendSelected?: number
  list: any
}

export const TrendingSection = ({
  trendSelected,
  list,
}: TrendingSectionProps) => {
  const [initialState, setInitialState] = useState<boolean>(true)
  const trending = useRef(null)
  const nft = useRef(null)
  const categories = useRef(null)

  console.log(list?.data?.coins)

  return (
    <section className="max-h-[calc(100vh-180px)] overflow-y-auto">
      {trendSelected === 1 && (
        <section className="flex flex-col">
          <div
            ref={trending}
            className="w-full flex whitespace-nowrap gap-1 items-center mt-2 my-1"
          >
            <span className="w-fit text-xs text-[#64748b]">
              Pesquisa de Trending 🔥
            </span>
            <div className="w-full border-b border-gray-200" />
          </div>
          {list?.data?.coins.map((item) => {
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
        </section>
      )}
      {trendSelected === 2 && (
        <section className="flex flex-col">
          <div
            ref={nft}
            className="w-full flex whitespace-nowrap gap-1 items-center mt-2 my-1"
          >
            <span className="w-fit text-xs text-[#64748b]">
              Trending NFT 💎
            </span>
            <div className="w-full border-b border-gray-200" />
          </div>
          {/* {simulate()} */}
        </section>
      )}
      {trendSelected === 3 && (
        <section className="flex flex-col">
          <div
            ref={categories}
            className="w-full flex whitespace-nowrap gap-1 items-center mt-2 my-1"
          >
            <span className="w-fit text-xs text-[#64748b]">
              Categorias de Treding ✨
            </span>
            <div className="w-full border-b border-gray-200" />
          </div>
          {/* {simulate()} */}
        </section>
      )}
    </section>
  )
}
