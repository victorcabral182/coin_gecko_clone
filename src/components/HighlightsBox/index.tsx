import React from "react"
import Image from "next/image"
import { checkCondition } from "@/utils/utils"
import { FaCaretDown, FaCaretUp, FaMinus } from "react-icons/fa"

interface IHighlightsBox {
  graphic?: any // TODO: TIPAR ESSA BAGAÇA
  amount?: number | string
  variation?: number
  description?: string
  type?: "graphic" | "coin"
  data?: any // TODO: TIPAR ESSA BAGAÇA
  trending?: "trending" | "gainers"
}

export const HighlightsBox = ({
  amount,
  graphic,
  variation,
  description,
  type,
  trending,
  data,
}: IHighlightsBox) => {
  return (
    <>
      {type === "graphic" ? (
        <div className="grid grid-cols-5 p-4 border-2 border-gray-100 rounded-[14px] min-h-[5.875rem] max-h-[5.875rem]">
          <div className="flex flex-col col-span-3 justify-between">
            <span className="text-[1.125rem] text-[#0f172a] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
              US$ {amount}
            </span>
            <div className="md:flex md:flex-row md:gap-2 md:items-center">
              <span className="text-[#64748b] font-semibold text-[0.875rem] pt-1">
                {description}
              </span>
              {variation && (
                <span
                  className={`flex items-center text-sm ${checkCondition(
                    variation
                  )}  font-semibold`}
                >
                  {variation > 0 ? (
                    <FaCaretUp className="inline" size={14} />
                  ) : variation < 0 ? (
                    <FaCaretDown className="inline" size={14} />
                  ) : (
                    <FaMinus className="inline " size={14} />
                  )}
                  {variation}%
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-end col-span-2">
            <Image
              width={128}
              height={58}
              src={graphic}
              alt="graphic"
              loader={() => graphic}
            />
          </div>
        </div>
      ) : (
        <>
          {trending === "trending" ? (
            <div className="p-4 border-2 border-gray-100 rounded-[14px] min-h-[5.875rem] mb-4">
              <div className="flex flex-col gap-4 md:gap-6 col-span-3 justify-between">
                <span className="text-[1rem] text-[#0f172a] font-semibold">
                  🔥 Tendências
                </span>
                {data?.map((e: any, index: number) => {
                  return (
                    <div className="flex justify-between" key={index}>
                      <div className="flex">
                        <Image
                          width={24}
                          height={24}
                          loader={() => e?.item?.thumb}
                          src={"me.png"}
                          alt="coin symbol"
                        />
                        <span className="text-sm text-[#334155] ml-2 self-center mr-1 font-semibold">
                          {e?.item?.name}
                        </span>
                      </div>
                      <div className="flex">
                        <span className="text-sm text-[#334155] ml-2 self-center mr-1 font-semibold">
                          {e?.item?.data?.price}
                        </span>
                        <span
                          className={`flex items-center text-sm ${checkCondition(
                            e?.item?.data?.price_change_percentage_24h?.usd
                          )} font-semibold`}
                        >
                          {e?.item?.data?.price_change_percentage_24h?.usd >
                          0 ? (
                            <FaCaretUp className="inline" size={14} />
                          ) : e?.item?.data?.price_change_percentage_24h?.usd <
                            0 ? (
                            <FaCaretDown className="inline" size={14} />
                          ) : (
                            <FaMinus className="inline" size={14} />
                          )}
                          {e?.item?.data?.price_change_percentage_24h?.usd?.toFixed(
                            1
                          )}
                          %
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ) : (
            <div className=" p-4 border-2 border-gray-100 rounded-[14px] min-h-[5.875rem] ">
              {/* <div className="flex flex-col gap-4 col-span-3 justify-between">
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
              </div> */}
            </div>
          )}
        </>
      )}
    </>
  )
}
