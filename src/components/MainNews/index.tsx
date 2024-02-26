"use client"

import { checkCondition } from "@/utils/utils"
import React from "react"
import { useReducer } from "react"
import { FaCaretDown, FaCaretUp, FaMinus } from "react-icons/fa"

interface IMainNews {
  data?: any
}

export const MainNews = ({ data }: IMainNews) => {
  const [mainNews, showOrHide] = useReducer((mainNews) => !mainNews, false)
  const marketCapVariation24h = data?.market_cap_change_percentage_24h_usd

  return (
    <div className="mt-2 md:mt-0 mb-4">
      <p className="text-gray-900 font-semibold text-sm md:text-2xl">
        Preços da criptomoeda por capitalização de mercado
      </p>
      <span className="text-xs md:text-sm text-gray-500 text-justify">
        A capitalização global de mercado para criptomoedas no dia de hoje é de
        $2 biliões, uma diferença de{" "}
      </span>
      <span
        className={`text-xs md:text-sm items-center ${checkCondition(
          marketCapVariation24h
        )} `}
      >
        {marketCapVariation24h > 0 ? (
          <FaCaretUp className="inline mb-1 " size={14} />
        ) : marketCapVariation24h < 0 ? (
          <FaCaretDown className="inline mb-1 " size={14} />
        ) : (
          <FaMinus className="inline mb-1 " size={12} />
        )}
        {data?.market_cap_change_percentage_24h_usd?.toFixed(2)}%
      </span>
      <span className="text-xs md:text-sm text-gray-500 text-justify">
        {" "}
        nas últimas 24 horas.{" "}
      </span>
      <span
        onClick={showOrHide}
        className="text-xs md:text-sm underline text-slate-700 font-semibold"
      >
        {mainNews ? "Ocultar" : "Ler mais"}
      </span>
      {mainNews && (
        <>
          <p className="text-xs md:text-sm text-gray-500 mt-4 ">
            Volume de negócios total da criptomoeda no último dia foi de $50 mil
            milhões. O domínio do Bitcoin é de{" "}
            {data?.market_cap_percentage?.btc?.toFixed(1) ?? 0}% e o domínio da
            Ethereum é de {data?.market_cap_percentage?.eth?.toFixed(1) ?? 0}%.
            A CoinGecko rastreia ainda{" "}
            {data?.active_cryptocurrencies?.toLocaleString()} criptomoedas.
          </p>
        </>
      )}
    </div>
  )
}
