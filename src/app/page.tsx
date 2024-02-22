"use client"

import { AiFillStar } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"
import { CapitalizationRow } from "@/components/CapitalizationRow"
import { MainNews } from "@/components/MainNews"
import { SearchInputBox } from "@/components/SearchInputBox"
import { Switch } from "@/components/Switch"
import { useEffect, useReducer, useState } from "react"
import { HighlightsBox } from "@/components/HighlightsBox"
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid"
import Image from "next/image"
import a from "./favicon.ico"
import {
  ICoinsMarkets,
  useCoinGeckoService,
} from "@/services/coin-gecko-service"

export default function Home() {
  const { getCoinsPaged, getGlobalData } = useCoinGeckoService()
  const [globalData, setGlobalData] = useState<any>(null)
  const [data, setData] = useState<any[]>([])
  const [isActive, switcher] = useReducer((isActive) => !isActive, false)

  async function tryGetCoinsMarket() {
    try {
      const response: any = await getCoinsPaged({
        per_page: 50,
        page: 1,
        order: "market_cap_desc",
      })
      setData(response)
    } catch (err) {
      console.error(err)
    }
  }

  async function tryGetGlobalData() {
    try {
      const response = await getGlobalData()
      setGlobalData(response.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    tryGetCoinsMarket()
    tryGetGlobalData()
  }, []) // eslint-disable-line

  const columns: GridColDef[] = [
    {
      field: "market_cap_rank",
      headerName: "#",
      headerAlign: "right",
      width: 60,
      renderCell: (e) => {
        const handleFavorite = (id: number) => {
          setData((prevData) => {
            const updatedRows = prevData.map((row) =>
              row.id === id ? { ...row, isFavorite: !row.isFavorite } : row
            )
            return updatedRows
          })
        }
        return (
          <div className="w-full flex justify-center items-center text-center">
            <div
              className="w-full"
              onClick={() => handleFavorite(e.row.market_cap_rank)}
            >
              {e.row.isFavorite ? (
                <AiFillStar size={18} color="#ffd11a" width="100%" />
              ) : (
                <AiOutlineStar size={18} width="100%" />
              )}
            </div>
            <span className="w-full">{e.row.market_cap_rank}</span>
          </div>
        )
      },
    },
    {
      field: "name",
      headerName: "Moeda",
      width: 150,
      renderCell: (e) => {
        const imageLoader = ({ src, width, quality }) => {
          return e.row.image
        }
        return (
          <div className="flex items-center gap-2">
            <Image
              width={24}
              height={24}
              src="me.png"
              alt="coin icon"
              loader={imageLoader}
            />
            <div className="flex flex-col">
              <span className="text-[#334155] font-semibold text-sm mb-[-2px]">
                {e?.row?.name}
              </span>
              <span className="text-[#64748b] font-regular text-xs mt-[-2px] uppercase  ">
                {e?.row?.symbol}
              </span>
            </div>
          </div>
        )
      },
    },
    {
      field: "current_price",
      headerName: "Preço",
      headerAlign: "right",
      width: 140,
      align: "right",
      renderCell: (e: any) => (
        <span>
          {e?.row?.current_price?.toLocaleString("en-US", {
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
      <CapitalizationRow data={globalData} />
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
