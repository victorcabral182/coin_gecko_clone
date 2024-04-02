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
import { FaCaretDown, FaCaretUp, FaMinus } from "react-icons/fa"
import Link from "next/link"
import { checkCondition } from "@/utils/checkCondition"
import { handleMarketCap } from "@/utils/marketCap"

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
          <div className="sticky w-full flex justify-center items-center text-center">
            <div
              className="w-full cursor-pointer"
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
      width: 260,
      renderCell: (e) => {
        const imageLoader = () => {
          return e.row.image
        }
        return (
          <Link
            href={`coin/${e.row.id}`}
            className="sticky w-full flex justify-between items-center cursor-pointer"
          >
            <div className="w-full flex items-center gap-2">
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
            <div className="">
              <button
                type="button"
                className="border border-[#35b000] text-[#35b000] px-2 rounded-md text-xs"
              >
                Comprar
              </button>
            </div>
          </Link>
        )
      },
    },
    {
      field: "current_price",
      headerName: "Preço",
      headerAlign: "right",
      width: 120,
      align: "right",
      renderCell: (e: any) => (
        <span className="font-extralight">
          US
          {e?.row?.current_price
            ?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })
            .replace("$", "$ ")}
        </span>
      ),
    },
    {
      field: "price_change_percentage_1h_in_currency",
      headerName: "1 h",
      headerAlign: "right",
      align: "right",
      width: 70,
      renderCell: (e: any) => {
        const oneHourVariation = e?.row?.price_change_percentage_1h_in_currency
        const color = checkCondition(oneHourVariation)
        return (
          <span
            style={{ color: color.substring(6, 13) }}
            className={`font-extralight`}
          >
            {oneHourVariation > 0 ? (
              <FaCaretUp className="inline mb-1" size={14} />
            ) : oneHourVariation < 0 ? (
              <FaCaretDown className="inline mb-1" size={14} />
            ) : (
              <FaMinus className="inline mb-1" size={14} />
            )}
            {oneHourVariation.toFixed(1)}%
          </span>
        )
      },
    },
    {
      field: "price_change_percentage_24h_in_currency",
      headerName: "24 h",
      headerAlign: "right",
      align: "right",
      width: 75,
      renderCell: (e: any) => {
        const twentyFourHourVariation =
          e?.row?.price_change_percentage_24h_in_currency
        const color = checkCondition(twentyFourHourVariation)
        return (
          <span
            style={{ color: color.substring(6, 13) }}
            className={`font-extralight`}
          >
            {twentyFourHourVariation > 0 ? (
              <FaCaretUp className="inline mb-1" size={14} />
            ) : twentyFourHourVariation < 0 ? (
              <FaCaretDown className="inline mb-1" size={14} />
            ) : (
              <FaMinus className="inline mb-1" size={14} />
            )}
            {twentyFourHourVariation.toFixed(1)}%
          </span>
        )
      },
    },
    {
      field: "price_change_percentage_7d_in_currency",
      headerName: "7 d",
      headerAlign: "right",
      align: "right",
      width: 70,
      renderCell: (e: any) => {
        const sevenDaysVariation =
          e?.row?.price_change_percentage_7d_in_currency
        const color = checkCondition(sevenDaysVariation)
        return (
          <span
            style={{ color: color.substring(6, 13) }}
            className={`font-extralight`}
          >
            {sevenDaysVariation > 0 ? (
              <FaCaretUp className="inline mb-1" size={14} />
            ) : sevenDaysVariation < 0 ? (
              <FaCaretDown className="inline mb-1" size={14} />
            ) : (
              <FaMinus className="inline mb-1" size={14} />
            )}
            {sevenDaysVariation.toFixed(1)}%
          </span>
        )
      },
    },
    {
      field: "total_volume",
      headerName: "Volume em 24 h",
      headerAlign: "right",
      align: "right",
      width: 170,
      // flex: 1,
      renderCell: (e: any) => {
        const totalVolume = e?.row?.total_volume
        return (
          <span className={`font-extralight`}>
            US
            {totalVolume
              .toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
              .replace("$", "$ ")}
          </span>
        )
      },
    },
    {
      field: "market_cap",
      headerName: "Capitalização de mercado",
      headerAlign: "right",
      align: "right",
      width: 200,
      renderCell: (e: any) => {
        const marketCap = e?.row?.market_cap
        return (
          <span className={`font-extralight`}>
            US
            {marketCap
              .toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
              .replace("$", "$ ")}
          </span>
        )
      },
    },
    {
      field: "image",
      headerName: "Últimos 7 dias",
      headerAlign: "right",
      align: "right",
      width: 160,
      renderCell: (e: any) => {
        const id = e.row.image.split("/")[5]
        const url = `https://www.coingecko.com/coins/${id}/sparkline.svg`
        return (
          <Image
            width={135}
            height={50}
            src={"me.png"}
            alt="graphic"
            loader={() => url}
          />
        )
      },
    },
  ]

  const totalMarketCap = globalData?.total_market_cap
  const totalVolume = globalData?.total_volume
  const marketCapVariation24h = globalData?.market_cap_change_percentage_24h_usd

  return (
    <main className="flex flex-col">
      <div className="flex xl:hidden relative">
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
              target="_blank"
              href="https://www.coingecko.com/en/api"
              className="font-semibold text-[#35b000]"
            >
              CoinGecko API
            </a>
          </div>
        </div>
      </div>
      {isActive && (
        <div className="flex flex-col xl:grid xl:grid-cols-2 gap-1">
          <div className="flex flex-col gap-1 xl:gap-2">
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
          </div>
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
            ".MuiDataGrid-columnHeader": {
              fontSize: 12,
            },
            ".MuiDataGrid-columnHeaderTitle": {
              fontWeight: 700,
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
