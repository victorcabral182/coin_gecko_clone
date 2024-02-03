import React from "react"
import { SearchMenuOption } from "../SearchMenuOption"

export const TrendingSection = () => {
  const simulate = () => {
    // ! EXCLUIR APÓS INTEGRAÇÃO
    const componentsArray = []
    for (var i = 0; i < 5; i++) {
      componentsArray.push(
        <SearchMenuOption
          key={i}
          title="Next.js"
          thumb=""
          prefix="nxt"
          variation={5.51}
        />
      )
    }
    return componentsArray
  }
  return (
    <section className="max-h-[calc(100vh-180px)] overflow-y-auto">
      <section className="flex flex-col">
        <div className="w-full flex whitespace-nowrap gap-1 items-center mt-2 my-1">
          <span className="w-fit text-xs text-[#64748b]">
            Pesquisa de Trending 🔥
          </span>
          <div className="w-full border-b border-gray-200" />
        </div>
        {simulate()}
      </section>
      <section className="flex flex-col">
        <div className="w-full flex whitespace-nowrap gap-1 items-center mt-2 my-1">
          <span className="w-fit text-xs text-[#64748b]">Trending NFT 💎</span>
          <div className="w-full border-b border-gray-200" />
        </div>
        {simulate()}
      </section>
      <section className="flex flex-col">
        <div className="w-full flex whitespace-nowrap gap-1 items-center mt-2 my-1">
          <span className="w-fit text-xs text-[#64748b]">
            Categorias de Treding ✨
          </span>
          <div className="w-full border-b border-gray-200" />
        </div>
        {simulate()}
      </section>
    </section>
  )
}
