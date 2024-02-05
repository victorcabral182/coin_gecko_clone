"use client"

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
    </main>
  )
}
