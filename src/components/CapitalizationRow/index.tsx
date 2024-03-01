import React from "react"
import { Button3D } from "../Button3D"
import { RxGear } from "react-icons/rx"
import { FaMinus } from "react-icons/fa"
import { FaCaretDown, FaCaretUp } from "react-icons/fa"
import { checkCondition, handleFirstTwo, handleMarketCap } from "@/utils/utils"

interface CapitalizationRowProps {
  data?: any
  isHeader?: boolean
}

export const CapitalizationRow = ({
  data,
  isHeader,
}: CapitalizationRowProps) => {
  const totalMarketCap = data?.total_market_cap
  const totalVolume = data?.total_volume
  const marketCapVariation24h = data?.market_cap_change_percentage_24h_usd
  return (
    <div className="w-full xl:flex xl:justify-between">
      <div className="flex whitespace-nowrap gap-2 xl:gap-3 max-w-full xl:w-full overflow-x-scroll xl:overflow-x-hidden md:px-6 py-2 border-y xl:border-y-0 mt-2 xl:mt-0">
        <div>
          <span className="hidden xl:inline text-xs text-[#64748b]">
            Moedas:{" "}
          </span>
          <span className="hidden xl:inline text-xs text-[#334155] font-semibold">
            {data?.active_cryptocurrencies}{" "}
          </span>
        </div>
        <div>
          <span className="hidden xl:inline text-xs text-[#64748b]">
            Câmbio:{" "}
          </span>
          <span className="hidden xl:inline text-xs text-[#334155] font-semibold">
            {data?.markets}{" "}
          </span>
        </div>
        <div>
          <span className="text-xs text-[#64748b]">
            Capitalização de mercado:{" "}
          </span>
          <span className="text-xs text-[#334155] font-semibold">
            US$ {data && handleMarketCap(totalMarketCap)}
          </span>
          <span
            className={`text-xs items-center ${checkCondition(
              marketCapVariation24h
            )} `}
          >
            {marketCapVariation24h > 0 ? (
              <FaCaretUp className="inline mb-1 " size={14} />
            ) : marketCapVariation24h < 0 ? (
              <FaCaretDown className="inline mb-1 " size={14} />
            ) : (
              <FaMinus className="inline mb-1 " size={14} />
            )}
            {data?.market_cap_change_percentage_24h_usd?.toFixed(2) ?? 0}%
          </span>
        </div>
        <div>
          <span className="text-xs text-[#64748b]">Vol. 24h </span>
          <span className="text-xs text-[#334155] font-semibold">
            US$ {handleMarketCap(totalVolume) ?? ""}
          </span>
        </div>
        <div>
          <span className="text-xs text-[#64748b]">Domínio </span>
          <span className="text-xs text-[#334155] font-semibold uppercase">
            {handleFirstTwo(data?.market_cap_percentage) ?? ""}
          </span>
        </div>
      </div>
      {isHeader && (
        <div className="hidden  xl:w-[400px] xl:flex xl:items-center xl:justify-end xl:gap-2">
          <Button3D variant="outline" type="button">
            <RxGear size={14} />
          </Button3D>
          <Button3D variant="outline" type="button">
            Iniciar sessão
          </Button3D>
          <Button3D type="button">Cadastrar</Button3D>
        </div>
      )}
    </div>
  )
}
