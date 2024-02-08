"use client"

import { AiFillCaretUp } from "react-icons/ai"
import { CapitalizationRow } from "@/components/CapitalizationRow"
import { MainNews } from "@/components/MainNews"
import { SearchInputBox } from "@/components/SearchInputBox"
import { Switch } from "@/components/Switch"
import { useReducer } from "react"
import { HighlightsBox } from "@/components/HighlightsBox"

export default function Home() {
  const [isActive, switcher] = useReducer((isActive) => !isActive, false)

  return (
    <main className="flex flex-col">
      <SearchInputBox />
      <CapitalizationRow />
      <MainNews />
      <Switch textLeft="Destaques" isActive={isActive} switcher={switcher} />
      {isActive && (
        <div className="flex flex-col gap-1">
          <HighlightsBox
            type="graphic"
            amount={1234531}
            description="Capitalização do mercado"
            variation={3.1}
          />
          <HighlightsBox
            type="graphic"
            amount={1234531}
            description="Volume em 24 h"
          />
          <HighlightsBox
            type="coin"
            amount={1234531}
            description="Volume em 24 h"
            variation={3}
          />
        </div>
      )}
    </main>
  )
}
