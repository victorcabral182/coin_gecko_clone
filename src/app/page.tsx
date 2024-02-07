"use client"

import { AiFillCaretUp } from "react-icons/ai"
import { CapitalizationRow } from "@/components/CapitalizationRow"
import { MainNews } from "@/components/MainNews"
import { SearchInputBox } from "@/components/SearchInputBox"
import { Switch } from "@/components/Switch"
import { useReducer } from "react"

export default function Home() {
  const [isActive, switcher] = useReducer((isActive) => !isActive, false)

  return (
    <main className="flex flex-col">
      <SearchInputBox />
      <CapitalizationRow />
      <MainNews />
      <Switch textLeft="Destaques" isActive={isActive} switcher={switcher} />
      <div className="flex flex-col">
        <div className="grid grid-cols-5 p-4 border border-gray-200 rounded-xl min-h-[5.875rem] max-h-[5.875rem]">
          <div className="flex flex-col col-span-3 justify-between">
            <span className="text-[1.125rem] text-[#0f172a] font-semibold">
              US$ [valor]
            </span>
            <span className="text-[#64748b] text-[0.875rem] pt-1">
              Capitalização de mercado
            </span>
            <span className="flex items-center  text-sm text-[#00a83e] font-semibold">
              <AiFillCaretUp size={14} />
              [var]%
            </span>
          </div>
          <div className="flex items-center justify-center col-span-2">
            [gráfico]
          </div>
        </div>
      </div>
    </main>
  )
}
