"use client"

import React from "react"
import { useReducer } from "react"

export const MainNews = () => {
  const [mainNews, showOrHide] = useReducer((mainNews) => !mainNews, false)

  return (
    <div className="mt-2 mb-4">
      <p className="text-gray-900 font-semibold text-sm">
        Preços da criptomoeda por capitalização de mercado
      </p>
      <span className="text-xs text-gray-500 text-justify">
        A capitalização global de mercado para criptomoedas no dia de hoje é de
        $2 biliões, uma diferença de{" "}
      </span>
      <span>[var]</span>
      <span className="text-xs text-gray-500 text-justify">
        {" "}
        nas últimas 24 horas.{" "}
      </span>
      <span
        onClick={showOrHide}
        className="text-xs underline text-slate-700 font-semibold"
      >
        {mainNews ? "Ocultar" : "Ler mais"}
      </span>
      {mainNews && (
        <>
          <p className="text-xs text-gray-500 mt-4 ">
            Volume de negócios total da criptomoeda no último dia foi de $50 mil
            milhões. O domínio da Bitcoin é de 50% e o domínio da Ethereum é de
            20%. A CoinGecko rastreia ainda 12.582 criptomoedas. Os maiores
            ganhadores da indústria neste momento são as criptomoedas{" "}
            <span className="text-xs text-[#334155] font-semibold mt-4">
              Ecossitema Polkadot
            </span>
            <span className="text-xs text-gray-500"> e </span>
            <span className="text-xs text-[#334155] font-semibold mt-4">
              Ecossitema Algorand
            </span>
          </p>
        </>
      )}
    </div>
  )
}
