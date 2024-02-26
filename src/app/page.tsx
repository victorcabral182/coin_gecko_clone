"use client"

import Image from "next/image"
import { useReducer } from "react"
import { AiFillStar } from "react-icons/ai"
import { Switch } from "@/components/Switch"
import { AiOutlineStar } from "react-icons/ai"
import { MainNews } from "@/components/MainNews"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { HighlightsBox } from "@/components/HighlightsBox"
import { SearchInputBox } from "@/components/SearchInputBox"
import { CapitalizationRow } from "@/components/CapitalizationRow"
import { useGeneralContext } from "@/contexts/generalContext/GeneralContext"
import { handleMarketCap } from "@/utils/utils"

export default function Home() {
  const { coinsMarket, globalData, setCoinsMarket, trending } =
    useGeneralContext()

  const topThreeTrending = [
    trending?.data?.coins[0],
    trending?.data?.coins[1],
    trending?.data?.coins[2],
  ]

  const [isActive, switcher] = useReducer((isActive) => !isActive, false)

  const columns: GridColDef[] = [
    {
      field: "market_cap_rank",
      headerName: "#",
      headerAlign: "right",
      width: 60,
      renderCell: (e) => {
        const handleFavorite = (id: number) => {
          setCoinsMarket((prevData) => {
            const updatedRows = prevData.map((row) =>
              row.market_cap_rank === id
                ? { ...row, isFavorite: !row.isFavorite }
                : row
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
                <AiFillStar size={19} color="#ffd11a" width="100%" />
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
        const imageLoader = () => {
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
          US
          {e?.row?.current_price?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
      ),
    },
  ]

  const totalMarketCap = globalData?.total_market_cap
  const totalVolume = globalData?.total_volume
  const marketCapVariation24h = globalData?.market_cap_change_percentage_24h_usd

  return (
    <main className="flex flex-col">
      <div className="flex xl:hidden">
        <SearchInputBox />
      </div>
      <div className="flex xl:hidden">
        <CapitalizationRow data={globalData} />
      </div>
      <div className="flex flex-col md:flex-row md:gap-4 md:mt-4">
        <div className="md:w-[75%]">
          <MainNews data={globalData} />
        </div>
        <div className="relative md:w-[25%] md:flex md:flex-col">
          <div className="">
            <Switch
              textLeft="Destaques"
              isActive={isActive}
              switcher={switcher}
            />
          </div>
          <div className="text-xs absolute md:relative top-0 right-0">
            <span>Powered by </span>
            <a
              href="https://www.coingecko.com/en/api"
              className="font-semibold text-[#35b000]"
            >
              CoinGecko API
            </a>
          </div>
        </div>
      </div>
      {isActive && (
        <div className="flex flex-col gap-1">
          <HighlightsBox
            type="graphic"
            description="Capitalização do mercado"
            variation={marketCapVariation24h.toFixed(2) ?? "error"}
            amount={handleMarketCap(totalMarketCap)?.toLocaleString()}
            graphic={"https://www.coingecko.com/total_market_cap.svg"}
          />
          <HighlightsBox
            type="graphic"
            description="Volume em 24 h"
            amount={handleMarketCap(totalVolume)}
            graphic={"https://www.coingecko.com/total_volume.svg"}
          />
          <HighlightsBox
            type="coin"
            trending="trending"
            data={topThreeTrending}
            description="Volume em 24 h"
          />
        </div>
      )}
      <section>
        <DataGrid
          sx={{
            border: 0,
            "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus":
              {
                outline: "none",
              },
            ".MuiDataGrid-columnSeparator": {
              display: "none",
            },
          }}
          columnHeaderHeight={41.5}
          rowHeight={68.5}
          showColumnVerticalBorder={false}
          hideFooter
          rows={coinsMarket}
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
