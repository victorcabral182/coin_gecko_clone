import { checkCondition } from "@/utils/utils"
import { FaCaretDown, FaCaretUp, FaMinus } from "react-icons/fa"

interface ISimpleTableVariation {
  data?: any
}

export const SimpleTableVariation = ({ data }: ISimpleTableVariation) => {
  return (
    <>
      <div className="flex flex-col items-center border border-gray-200 rounded-lg">
        <div className="w-full grid grid-cols-6 bg-[#F1f5F9] font-semibold">
          <span className="text-center py-3 px-3 text-[12px] text-[#0f172a]">
            24h
          </span>
          <span className="text-center py-3 px-3 text-[12px] text-[#0f172a]">
            7d
          </span>
          <span className="text-center py-3 px-3 text-[12px] text-[#0f172a]">
            14d
          </span>
          <span className="text-center py-3 px-3 text-[12px] text-[#0f172a]">
            30d
          </span>
          <span className="text-center py-3 px-3 text-[12px] text-[#0f172a]">
            60d
          </span>
          <span className="text-center py-3 px-3 text-[12px] text-[#0f172a]">
            1y
          </span>
        </div>
        <div className="w-full grid grid-cols-6">
          <span
            style={{
              color: checkCondition(
                data?.market_data?.price_change_percentage_24h
              )
                .replace("text-[", "")
                .replace("]", ""),
            }}
            className="flex items-center text-center py-3 px-2 text-[12px] text-[#0f172a] "
          >
            {data?.market_data?.price_change_percentage_24h > 0 ? (
              <FaCaretUp className="inline " size={13} />
            ) : data?.market_data?.price_change_percentage_24h < 0 ? (
              <FaCaretDown className="inline " size={13} />
            ) : (
              <FaMinus className="inline " size={13} />
            )}
            {data?.market_data?.price_change_percentage_24h.toFixed(1)}%
          </span>
          <span
            style={{
              color: checkCondition(
                data?.market_data?.price_change_percentage_7d
              )
                .replace("text-[", "")
                .replace("]", ""),
            }}
            className="flex items-center text-center py-3 text-[12px] text-[#0f172a]"
          >
            {data?.market_data?.price_change_percentage_7d > 0 ? (
              <FaCaretUp className="inline " size={13} />
            ) : data?.market_data?.price_change_percentage_7d < 0 ? (
              <FaCaretDown className="inline " size={13} />
            ) : (
              <FaMinus className="inline " size={13} />
            )}
            {data?.market_data?.price_change_percentage_7d.toFixed(1)}%
          </span>
          <span
            style={{
              color: checkCondition(
                data?.market_data?.price_change_percentage_14d
              )
                .replace("text-[", "")
                .replace("]", ""),
            }}
            className="flex items-center text-center py-3 text-[12px] text-[#0f172a]"
          >
            {data?.market_data?.price_change_percentage_14d > 0 ? (
              <FaCaretUp className="inline " size={13} />
            ) : data?.market_data?.price_change_percentage_14d < 0 ? (
              <FaCaretDown className="inline " size={13} />
            ) : (
              <FaMinus className="inline " size={13} />
            )}
            {data?.market_data?.price_change_percentage_14d.toFixed(1)}%
          </span>
          <span
            style={{
              color: checkCondition(
                data?.market_data?.price_change_percentage_30d
              )
                .replace("text-[", "")
                .replace("]", ""),
            }}
            className="flex items-center text-center py-3 text-[12px] text-[#0f172a]"
          >
            {data?.market_data?.price_change_percentage_30d > 0 ? (
              <FaCaretUp className="inline " size={13} />
            ) : data?.market_data?.price_change_percentage_30d < 0 ? (
              <FaCaretDown className="inline " size={13} />
            ) : (
              <FaMinus className="inline " size={13} />
            )}
            {data?.market_data?.price_change_percentage_30d.toFixed(1)}%
          </span>
          <span
            style={{
              color: checkCondition(
                data?.market_data?.price_change_percentage_60d
              )
                .replace("text-[", "")
                .replace("]", ""),
            }}
            className="flex items-center text-center py-3 text-[12px] text-[#0f172a]"
          >
            {data?.market_data?.price_change_percentage_60d > 0 ? (
              <FaCaretUp className="inline " size={13} />
            ) : data?.market_data?.price_change_percentage_60d < 0 ? (
              <FaCaretDown className="inline " size={13} />
            ) : (
              <FaMinus className="inline " size={13} />
            )}
            {data?.market_data?.price_change_percentage_60d.toFixed(1)}%
          </span>
          <span
            style={{
              color: checkCondition(
                data?.market_data?.price_change_percentage_1y
              )
                .replace("text-[", "")
                .replace("]", ""),
            }}
            className="flex items-center text-center py-3 text-[12px] text-[#0f172a]"
          >
            {data?.market_data?.price_change_percentage_1y > 0 ? (
              <FaCaretUp className="inline " size={13} />
            ) : data?.market_data?.price_change_percentage_1y < 0 ? (
              <FaCaretDown className="inline " size={13} />
            ) : (
              <FaMinus className="inline " size={13} />
            )}
            {data?.market_data?.price_change_percentage_1y.toFixed(1)}%
          </span>
        </div>
      </div>
    </>
  )
}
