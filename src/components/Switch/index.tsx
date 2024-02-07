"use client"

import React, { useReducer } from "react"
import { AiOutlineCheck } from "react-icons/ai"
import { CgClose } from "react-icons/cg"

interface SwitchProps {
  switcher: () => void
  isActive: boolean
  textLeft?: string | undefined
  textRight?: string | undefined
}

export const Switch = ({
  switcher,
  isActive,
  textLeft,
  textRight,
}: SwitchProps) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      {textLeft && (
        <span className="text-gray-700 font-semibold text-sm">{textLeft}</span>
      )}
      <div
        onClick={switcher}
        className={`relative transition-all duration-100 ease-linear ${
          isActive ? "bg-[#4bcc00]" : "bg-[#eff2f5]"
        } items-center w-full max-w-[3rem] min-h-4 max-h-4 rounded-md z-1`}
      >
        <div
          className={`top-[-4px] transition-all duration-100 ease-linear  absolute flex items-center justify-center min-w-[25px] min-h-[25px] bg-white rounded-lg border-2 ${
            isActive
              ? "border-[#4bcc00] left-[47.5%]"
              : "border-[#eff2f5] left-0"
          }`}
        >
          {isActive ? (
            <AiOutlineCheck className="text-[#4bcc00]" size={12} />
          ) : (
            <CgClose className="text-gray-400" size={12} />
          )}
        </div>
      </div>
      {textLeft && (
        <span className="text-gray-700 font-semibold text-sm">{textRight}</span>
      )}
    </div>
  )
}
