"use client"

import React, { ButtonHTMLAttributes, ReactNode } from "react"

interface IButton3DProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "outline" | "filled"
}

export const Button3D = ({
  children,
  variant = "filled",
  ...props
}: IButton3DProps) => {
  // tw-bg-white dark:tw-bg-moon-800 !tw-border-t-2 !tw-border-x-2 !tw-border-slate-300 dark:!tw-border-moon-500 tw-shadow-secondaryShadow dark:tw-shadow-secondaryShadowDark !tw-mb-1 hover:tw-bg-slate-100 dark:hover:tw-bg-moon-700 hover:tw-shadow-secondaryHover dark:hover:tw-shadow-secondaryHoverDark active:!tw-shadow-secondaryActive dark:active:!tw-shadow-secondaryActiveDark tw-transition-all tw-duration-150 active:tw-translate-y-2 tw-items-center tw-justify-center tw-font-semibold tw-text-inline tw-rounded-lg tw-select-none focus:tw-outline-none tw-px-2.5 tw-py-1.5 tw-inline-flex
  return (
    <>
      <div>
        <button
          className={`${
            variant === "filled"
              ? "bg-[#4bcc00] hover:bg-[#409900] active:bg-[#4bcc0080] py-[0.375rem] px-[0.625rem] rounded-[0.5rem] border-b-[5px] border-b-[#229203] hover:border-b-[#2C6D03] border-x-[1px] border-t-[1px] border-t-[#2292036c] border-x-[#229203] text-xs text-white font-semibold"
              : "bg-[#fff] active:bg-[#4bcc0080] py-[0.375rem] px-[0.625rem] rounded-[0.5rem] border-b-4 border-b-[#cbd5e1] hover:bg-slate-100 hover:border-b-slate-400 border-t-2 border-t-[#cbd5e1] border-x-2 border-x-[#cbd5e1] text-xs text-[#0f172a] font-semibold"
          }`}
          {...props}
        >
          {children}
        </button>
      </div>
    </>
  )
}
