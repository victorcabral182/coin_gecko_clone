"use client"

import React, { ButtonHTMLAttributes, ReactNode } from "react"

interface IButton3DProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button3D = ({ children, ...props }: IButton3DProps) => {
  return (
    <>
      <div>
        <button
          className="bg-[#35b000] active:bg-[#4bcc0080] py-[0.375rem] px-[0.625rem] rounded-[0.5rem] border-b-4 border-b-[#229203] text-xs text-white font-semibold"
          {...props}
        >
          {children}
        </button>
      </div>
    </>
  )
}
