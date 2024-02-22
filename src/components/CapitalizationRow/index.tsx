import { FaMinus } from "react-icons/fa"
import React, { useEffect } from "react"
import { FaCaretDown, FaCaretUp } from "react-icons/fa"

interface CapitalizationRowProps {
  data?: any
}

export const CapitalizationRow = ({ data }: CapitalizationRowProps) => {
  const totalMarketCap = data?.total_market_cap
  const marketCapVariation24h = data?.market_cap_change_percentage_24h_usd

  const handleMarketCap = (values: any) => {
    if (data) {
      const sum = Object?.values(values)?.reduce(
        (acc: number, value: number) => acc + value,
        0
      )
      if (sum) {
        return sum.toLocaleString()
      }
      return "error"
    }
  }

  const checkCondition = (variation: number) => {
    if (variation > 0) return "text-[#00a83e]"
    else if (variation < 0) return "text-[#ff3a33]"
    else return "text-black"
  }

  return (
    <>
      <div className="flex whitespace-nowrap gap-2 max-w-full overflow-x-scroll md:px-6 py-2 border-y mt-2">
        <div>
          <span className="text-xs text-[#64748b]">
            Capitalização de mercado:{" "}
          </span>
          <span className="text-xs text-[#334155] font-semibold">
            US{data && handleMarketCap(totalMarketCap)}
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
            {data?.market_cap_change_percentage_24h_usd.toFixed(2)}%
          </span>
        </div>
        <div>
          <span className="text-xs text-[#64748b]">Vol. 24h </span>
          <span className="text-xs text-[#334155] font-semibold">
            US$ 1,737 tri{" "}
          </span>
          <span className="text-xs items-center text-[#00a83e]">
            <FaCaretUp className="inline mb-1" size={14} />
          </span>
        </div>
        <div>
          <span className="text-xs text-[#64748b]">Domínio </span>
          <span className="text-xs text-[#334155] font-semibold">
            US$ 1,737 tri{" "}
          </span>
          <span className="text-xs items-center text-[#00a83e]">
            <FaCaretUp className="inline mb-1" size={14} />
            0.5%
          </span>
        </div>
        <div>
          <span className="text-xs text-[#64748b]">Gás </span>
          <span className="text-xs text-[#334155] font-semibold">
            US$ 1,737 tri{" "}
          </span>
          <span className="text-xs items-center text-[#00a83e]">
            <FaCaretUp className="inline mb-1" size={14} />
            0.5%
          </span>
        </div>
      </div>
    </>
  )
}
