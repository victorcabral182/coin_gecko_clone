"use client"

import { useReducer } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { SearchInputComp } from "../SearchInputComp"

export const SearchInputBox = () => {
  const [open, openClose] = useReducer((open) => !open, false)

  return (
    <div className="w-full md:px-6">
      {!open ? (
        <div
          onClick={openClose}
          className="flex items-center gap-2 p-[0.625rem] bg-gray-100 rounded-[0.5rem] z-0 mt-1"
        >
          <AiOutlineSearch className="text-[#64748B]" />
          <span className="text-xs font-semibold text-[#64748B]">
            Pesquisar
          </span>
        </div>
      ) : (
        <SearchInputComp openClose={openClose} />
      )}
    </div>
  )
}
