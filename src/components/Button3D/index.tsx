"use client"

import React, { ButtonHTMLAttributes, ReactNode } from "react"

interface IButton3DProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "outline" | "filled"
  wFull?: boolean
  className?: string
}

export const Button3D = ({
  children,
  variant = "filled",
  wFull,
  className,
  ...props
}: IButton3DProps) => {
  return (
    <>
      <div>
        <button
          className={`${wFull && "w-full"} ${
            variant === "filled"
              ? "bg-[#4bcc00] hover:bg-[#409900] active:bg-[#4bcc0080] py-[0.375rem] px-[0.625rem] rounded-[0.5rem] border-b-[5px] border-b-[#229203] hover:border-b-[#2C6D03] text-xs text-white font-semibold"
              : "bg-[#fff] active:bg-[#4bcc0080] py-[0.375rem] px-[0.625rem] rounded-[0.5rem] border-b-4 border-b-[#cbd5e1] hover:bg-slate-100 hover:border-b-slate-400 border-t-2 border-t-[#cbd5e1] border-x-2 border-x-[#cbd5e1] text-xs text-[#0f172a] font-semibold"
          } ${className}`}
          {...props}
        >
          {children}
        </button>
      </div>
    </>
  )
}
