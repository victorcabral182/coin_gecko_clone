import React from "react"

interface ButtonSubMenu {
  title: string
  iconLeft?: any
  iconRight?: any
  selected?: boolean
  setSelected?: () => void
}

export const ButtonSubMenu = ({
  title,
  iconLeft,
  iconRight,
  selected = false,
  setSelected,
}: ButtonSubMenu) => {
  return (
    <>
      <div
        onClick={setSelected}
        className={`flex w-fit h-fit items-center gap-1 max-h-8 py-[0.375rem] rounded-md px-3 text-sm font-semibold ${
          selected
            ? "text-[#35af00] bg-[#e8fcc9]"
            : "text-[#4a4a4a] bg-transparent"
        }`}
      >
        {iconLeft}
        <span>{title}</span>
        {iconRight}
      </div>
    </>
  )
}
