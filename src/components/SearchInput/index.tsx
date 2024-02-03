"use client"

import { useReducer, useState } from "react"
import { IoMdClose } from "react-icons/io"
import { AiOutlineSearch } from "react-icons/ai"

export const SearchInput = () => {
  const [open, openClose] = useReducer((open) => !open, false)
  const [search, setSearch] = useState<string>()

  return (
    <div className="w-full">
      {!open ? (
        <div
          onClick={openClose}
          className="flex items-center gap-2 p-[0.625rem] bg-gray-100 rounded-[0.5rem] z-0"
        >
          <AiOutlineSearch className="text-[#64748B]" />
          <span className="text-xs font-semibold text-[#64748B]">
            Pesquisar
          </span>
        </div>
      ) : (
        <div className="flex items-center relative w-full">
          <div className="flex w-full items-center gap-0 p-[0.625rem] bg-white shadow-sm z-1">
            <AiOutlineSearch className="text-[#64748B]" />
            <input
              type="text"
              className=" w-[90%] p-[0.625rem] focus-within:outline-none"
            />
          </div>
          <IoMdClose
            className="absolute right-3 text-[#64748B]"
            size={20}
            onClick={openClose}
          />
        </div>
      )}
    </div>
  )
}
