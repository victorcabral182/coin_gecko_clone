"use client"

import { CapitalizationRow } from "@/components/CapitalizationRow"
import { MainNews } from "@/components/MainNews"
import { SearchInputBox } from "@/components/SearchInputBox"
import { Switch } from "@/components/Switch"
import { useReducer } from "react"
import { HighlightsBox } from "@/components/HighlightsBox"
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid"
import Image from "next/image"
import a from "./favicon.ico"

export default function Home() {
  const [isActive, switcher] = useReducer((isActive) => !isActive, false)

  const rows: GridRowsProp = [
    { id: 1, rank: "1", price: 14123.12 },
    { id: 2, rank: "2", price: 1562.63 },
    { id: 3, rank: "3", price: 325.21 },
  ]

  const columns: GridColDef[] = [
    { field: "rank", headerName: "#" },
    {
      field: "coin",
      headerName: "Moeda",
      renderCell: (e) => (
        <div className="flex items-center gap-2">
          <Image width={24} height={24} src={a} alt="coin icon" />
          <div className="flex flex-col">
            <span className="text-[#334155] font-semibold text-sm mb-[-2px]">
              Next.JS
            </span>
            <span className="text-[#64748b] font-regular text-xs mt-[-2px]">
              NXT
            </span>
          </div>
        </div>
      ),
    },
    {
      field: "price",
      headerName: "Preço",
      headerAlign: "right",
      align: "right",
      renderCell: (e: any) => (
        <span>
          US${" "}
          {e.row.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
      ),
    },
  ]

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
      <section>
        <DataGrid
          rowSelection={false}
          disableColumnMenu
          disableRowSelectionOnClick
          disableColumnFilter
          disableColumnSelector
          rows={rows}
          columns={columns}
        />
      </section>
    </main>
  )
}
