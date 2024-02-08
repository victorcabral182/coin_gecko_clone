import Image from "next/image"
import React from "react"
import { AiFillCaretUp } from "react-icons/ai"
import a from "../../app/favicon.ico"

interface IHighlightsBox {
  graphic?: any // TODO: TIPAR ESSA BAGAÇA
  amount: number
  variation?: number
  description: string
  type: "graphic" | "coin"
  data?: any // TODO: TIPAR ESSA BAGAÇA
}

export const HighlightsBox = ({
  amount,
  graphic,
  variation,
  description,
  type,
}: IHighlightsBox) => {
  return (
    <>
      {type === "graphic" ? (
        <div className="grid grid-cols-5 p-4 border-2 border-gray-100 rounded-[14px] min-h-[5.875rem] max-h-[5.875rem]">
          <div className="flex flex-col col-span-3 justify-between">
            <span className="text-[1.125rem] text-[#0f172a] font-semibold">
              US$ {amount}
            </span>
            <span className="text-[#64748b] font-semibold text-[0.875rem] pt-1">
              {description}
            </span>
            {variation && (
              <span className="flex items-center  text-sm text-[#00a83e] font-semibold">
                <AiFillCaretUp size={14} />
                {variation}%
              </span>
            )}
          </div>
          <div className="flex items-center justify-center col-span-2">
            {graphic}
          </div>
        </div>
      ) : (
        <>
          <div className=" p-4 border-2 border-gray-100 rounded-[14px] min-h-[5.875rem] ">
            <div className="flex flex-col gap-4 col-span-3 justify-between">
              <span className="text-[1rem] text-[#0f172a] font-semibold">
                🔥 Tendências
              </span>
              <div className="flex justify-between">
                <div className="flex">
                  <Image width={24} height={24} src={a} alt="coin symbol" />
                  <span className="text-sm text-[#334155] ml-2 self-center mr-1 font-semibold">
                    Next.JS
                  </span>
                </div>
                <div className="flex">
                  <span className="text-sm text-[#334155] ml-2 self-center mr-1 font-semibold">
                    US$ [var]
                  </span>
                  <span className="flex items-center  text-sm text-[#00a83e] font-semibold">
                    <AiFillCaretUp size={14} />
                    {variation}%
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <Image width={24} height={24} src={a} alt="coin symbol" />
                  <span className="text-sm text-[#334155] ml-2 self-center mr-1 font-semibold">
                    Next.JS
                  </span>
                </div>
                <div className="flex">
                  <span className="text-sm text-[#334155] ml-2 self-center mr-1 font-semibold">
                    US$ [var]
                  </span>
                  <span className="flex items-center  text-sm text-[#00a83e] font-semibold">
                    <AiFillCaretUp size={14} />
                    {variation}%
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <Image width={24} height={24} src={a} alt="coin symbol" />
                  <span className="text-sm text-[#334155] ml-2 self-center mr-1 font-semibold">
                    Next.JS
                  </span>
                </div>
                <div className="flex">
                  <span className="text-sm text-[#334155] ml-2 self-center mr-1 font-semibold">
                    US$ [var]
                  </span>
                  <span className="flex items-center  text-sm text-[#00a83e] font-semibold">
                    <AiFillCaretUp size={14} />
                    {variation}%
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" p-4 border-2 border-gray-100 rounded-[14px] min-h-[5.875rem] ">
            <div className="flex flex-col gap-4 col-span-3 justify-between">
              <span className="text-[1rem] text-[#0f172a] font-semibold">
                🚀 Maiores Ganhadores
              </span>
              <div className="flex justify-between">
                <div className="flex">
                  <Image width={24} height={24} src={a} alt="coin symbol" />
                  <span className="text-sm text-[#334155] ml-2 self-center mr-1 font-semibold">
                    Next.JS
                  </span>
                </div>
                <div className="flex">
                  <span className="text-sm text-[#334155] ml-2 self-center mr-1 font-semibold">
                    US$ [var]
                  </span>
                  <span className="flex items-center  text-sm text-[#00a83e] font-semibold">
                    <AiFillCaretUp size={14} />
                    {variation}%
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <Image width={24} height={24} src={a} alt="coin symbol" />
                  <span className="text-sm text-[#334155] ml-2 self-center mr-1 font-semibold">
                    Next.JS
                  </span>
                </div>
                <div className="flex">
                  <span className="text-sm text-[#334155] ml-2 self-center mr-1 font-semibold">
                    US$ [var]
                  </span>
                  <span className="flex items-center  text-sm text-[#00a83e] font-semibold">
                    <AiFillCaretUp size={14} />
                    {variation}%
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <Image width={24} height={24} src={a} alt="coin symbol" />
                  <span className="text-sm text-[#334155] ml-2 self-center mr-1 font-semibold">
                    Next.JS
                  </span>
                </div>
                <div className="flex">
                  <span className="text-sm text-[#334155] ml-2 self-center mr-1 font-semibold">
                    US$ [var]
                  </span>
                  <span className="flex items-center  text-sm text-[#00a83e] font-semibold">
                    <AiFillCaretUp size={14} />
                    {variation}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
