"use client"

import { AiFillStar } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"
import { CapitalizationRow } from "@/components/CapitalizationRow"
import { MainNews } from "@/components/MainNews"
import { SearchInputBox } from "@/components/SearchInputBox"
import { Switch } from "@/components/Switch"
import { useReducer, useState } from "react"
import { HighlightsBox } from "@/components/HighlightsBox"
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid"
import Image from "next/image"
import a from "./favicon.ico"
interface Item {
  id: number
  rank: number
  price: number
  isFavorite: boolean
}

export default function Home() {
  const rows: Item[] = [
    { id: 1, rank: 1, price: 14123.12, isFavorite: false },
    { id: 2, rank: 2, price: 1562.63, isFavorite: false },
    { id: 3, rank: 3, price: 325.21, isFavorite: false },
    { id: 4, rank: 4, price: 478.91, isFavorite: true },
    { id: 5, rank: 5, price: 789.45, isFavorite: false },
    { id: 6, rank: 6, price: 2345.67, isFavorite: true },
    { id: 7, rank: 7, price: 987.65, isFavorite: true },
    { id: 8, rank: 8, price: 5432.1, isFavorite: false },
    { id: 9, rank: 9, price: 876.54, isFavorite: true },
    { id: 10, rank: 10, price: 321.98, isFavorite: false },
    { id: 11, rank: 11, price: 6543.21, isFavorite: true },
    { id: 12, rank: 12, price: 1098.76, isFavorite: false },
    { id: 13, rank: 13, price: 2468.42, isFavorite: false },
    { id: 14, rank: 14, price: 753.09, isFavorite: true },
    { id: 15, rank: 15, price: 159.26, isFavorite: false },
    { id: 16, rank: 16, price: 4321.98, isFavorite: true },
    { id: 17, rank: 17, price: 8765.43, isFavorite: false },
    { id: 18, rank: 18, price: 210.98, isFavorite: true },
    { id: 19, rank: 19, price: 5678.9, isFavorite: false },
    { id: 20, rank: 20, price: 321.45, isFavorite: false },
    { id: 21, rank: 21, price: 654.32, isFavorite: true },
    { id: 22, rank: 22, price: 987.65, isFavorite: false },
    { id: 23, rank: 23, price: 2345.67, isFavorite: true },
    { id: 24, rank: 24, price: 7890.12, isFavorite: false },
    { id: 25, rank: 25, price: 543.21, isFavorite: true },
    { id: 26, rank: 26, price: 876.54, isFavorite: true },
    { id: 27, rank: 27, price: 1098.76, isFavorite: false },
    { id: 28, rank: 28, price: 6543.21, isFavorite: true },
    { id: 29, rank: 29, price: 159.26, isFavorite: false },
    { id: 30, rank: 30, price: 4321.98, isFavorite: false },
    { id: 31, rank: 31, price: 8765.43, isFavorite: true },
    { id: 32, rank: 32, price: 210.98, isFavorite: false },
    { id: 33, rank: 33, price: 5678.9, isFavorite: true },
    { id: 34, rank: 34, price: 321.45, isFavorite: false },
    { id: 35, rank: 35, price: 654.32, isFavorite: true },
    { id: 36, rank: 36, price: 987.65, isFavorite: false },
    { id: 37, rank: 37, price: 2345.67, isFavorite: true },
    { id: 38, rank: 38, price: 7890.12, isFavorite: false },
    { id: 39, rank: 39, price: 543.21, isFavorite: false },
    { id: 40, rank: 40, price: 876.54, isFavorite: true },
    { id: 41, rank: 41, price: 1098.76, isFavorite: false },
    { id: 42, rank: 42, price: 6543.21, isFavorite: true },
    { id: 43, rank: 43, price: 159.26, isFavorite: false },
    { id: 44, rank: 44, price: 4321.98, isFavorite: true },
    { id: 45, rank: 45, price: 8765.43, isFavorite: false },
    { id: 46, rank: 46, price: 210.98, isFavorite: true },
    { id: 47, rank: 47, price: 5678.9, isFavorite: false },
    { id: 48, rank: 48, price: 321.45, isFavorite: false },
    { id: 49, rank: 49, price: 654.32, isFavorite: true },
    { id: 50, rank: 50, price: 987.65, isFavorite: false },
  ]

  const [data, setData] = useState<Item[]>(rows)
  const [isActive, switcher] = useReducer((isActive) => !isActive, false)

  const columns: GridColDef[] = [
    {
      field: "rank",
      headerName: "#",
      headerAlign: "right",
      width: 60,
      renderCell: (e) => {
        const handleFavorite = (id: number) => {
          setData((prevRows) => {
            const updatedRows = prevRows.map((row) =>
              row.id === id ? { ...row, isFavorite: !row.isFavorite } : row
            )
            return updatedRows
          })
        }
        return (
          <div className="w-full flex justify-center items-center text-center">
            <div className="w-full" onClick={() => handleFavorite(e.row.id)}>
              {e.row.isFavorite ? (
                <AiFillStar size={18} color="#ffd11a" width="100%" />
              ) : (
                <AiOutlineStar size={18} width="100%" />
              )}
            </div>
            <span className="w-full">{e.row.rank}</span>
          </div>
        )
      },
    },
    {
      field: "coin",
      headerName: "Moeda",
      width: 150,
      renderCell: (e) => {
        return (
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
        )
      },
    },
    {
      field: "price",
      headerName: "Preço",
      headerAlign: "right",
      width: 140,
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
          sx={{
            "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus":
              {
                outline: "none",
              },
          }}
          hideFooter
          rows={data}
          columns={columns}
          rowSelection={false}
          disableColumnMenu
          disableRowSelectionOnClick
          disableColumnFilter
          disableColumnSelector
        />
      </section>
    </main>
  )
}
