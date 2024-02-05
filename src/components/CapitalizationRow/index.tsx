import React from "react"
import { FaCaretUp } from "react-icons/fa"

interface CapitalizationRowProps {
  data?: any
}

export const CapitalizationRow = ({ data }: CapitalizationRowProps) => {
  return (
    <>
      <div className="flex whitespace-nowrap gap-2 max-w-full overflow-x-scroll md:px-6 py-2 border-y mt-2">
        <div>
          <span className="text-xs text-[#64748b]">
            Capitalização de mercado:{" "}
          </span>
          <span className="text-xs text-[#334155] font-semibold">
            US$ 1,737 tri{" "}
          </span>
          <span className="text-xs items-center text-[#00a83e] ">
            <FaCaretUp className="inline mb-1" size={14} />
            0.5%
          </span>
        </div>
        <div>
          <span className="text-xs text-[#64748b]">Vol. 24h </span>
          <span className="text-xs text-[#334155] font-semibold">
            US$ 1,737 tri{" "}
          </span>
          <span className="text-xs items-center text-[#00a83e]">
            <FaCaretUp className="inline mb-1" size={14} />
            0.5%
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
