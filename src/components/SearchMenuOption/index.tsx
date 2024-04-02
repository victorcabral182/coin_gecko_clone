import Image from "next/image"
import React from "react"
import a from "../../app/favicon.ico"

interface SearchMenuOptionProps {
  thumb: string
  title: string
  prefix: string
  variation?: any
}

export const SearchMenuOption = ({
  prefix,
  thumb,
  title,
  variation,
}: SearchMenuOptionProps) => {
  return (
    <div className="flex justify-between rounded-lg hover:bg-[#f1f5f9] items-center py-3 px-2">
      <div className="flex  ">
        <Image
          width={24}
          height={24}
          src={a}
          loader={() => thumb}
          alt="coin symbol"
        />
        <span className="text-sm text-[#334155] ml-2 self-center mr-1 font-semibold">
          {title}
        </span>
        <span className="text-xs self-center text-[#64748b] font-normal uppercase">
          {prefix}
        </span>
      </div>
      {variation && <span className="text-[0.8125rem]">{variation}%</span>}
    </div>
  )
}
