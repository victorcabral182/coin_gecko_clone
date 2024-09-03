"use client"

import { useEffect, useReducer, useRef } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { SearchInputComp } from "../SearchInputComp"

export const SearchInputBox = () => {
  const searchInputRef = useRef(null)
  const [open, openClose] = useReducer((open) => !open, false)

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        if (open) {
          openClose()
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  return (
    <div className="w-full md:px-6 xl:px-0 relative">
      {!open ? (
        <div
          onClick={openClose}
          className="flex items-center gap-2 p-[0.625rem] bg-gray-100 rounded-[0.5rem] z-0 mt-1 cursor-text"
        >
          <AiOutlineSearch className="text-[#64748B]" />
          <span className="text-xs font-semibold text-[#64748B]">
            Pesquisar
          </span>
        </div>
      ) : (
        <div ref={searchInputRef}>
          <SearchInputComp open={open} openClose={openClose} />
        </div>
      )}
    </div>
  )
}
