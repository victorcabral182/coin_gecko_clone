"use client"

import { IoMdClose } from "react-icons/io"
import { AiOutlineSearch } from "react-icons/ai"
import { useDebounce } from "@/utils/useDebounce"
import { TrendingSection } from "../TrendingSection"
import React, { useEffect, useRef, useState } from "react"
import { useCoinGeckoService } from "@/services/coin-gecko-service"

interface ISearchInputCompProps {
  open: boolean
  openClose: () => void
}

export const SearchInputComp = ({ openClose, open }: ISearchInputCompProps) => {
  const { getSearch } = useCoinGeckoService()

  const [list, setList] = useState<any>([])
  const [search, setSearch] = useState<string>("")
  const [optionSelected] = useState(1)

  const inputRef = useRef(null)
  const debounceSearch = useDebounce(search)

  async function tryGetSearch(coinName) {
    try {
      const response = await getSearch(coinName)
      setList(response)
    } catch (err) {
      console.error(err)
    }
  }

  const cleanSearchInput = () => {
    setSearch("")
  }

  useEffect(() => {
    if (debounceSearch) {
      tryGetSearch(debounceSearch)
    } else if (debounceSearch.length === 0) {
      setList([])
    }
  }, [debounceSearch]) // eslint-disable-line

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.select()
    }
  }, [open])

  return (
    <div className="absolute z-10 lg:top-[-28px] bg-white flex flex-col w-full lg:w-[calc(100vw-1410px)]">
      <section className="flex flex-col jus items-center relative w-full z-10">
        <div className="flex w-full items-center gap-0 p-[0.625rem] bg-white shadow-sm">
          <AiOutlineSearch size={28} className="text-[#64748B]" />
          <input
            type="text"
            ref={inputRef}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" w-[90%] p-[0.625rem] focus-within:outline-none"
            placeholder="Pesquisar Token, Pares Dex, NFT, Corretoras, Categorias, Artigos"
          />
          <button
            type="button"
            onClick={cleanSearchInput}
            className="text-xs bg-[#f1f5f9] rounded-md py-[2px] px-[6px] font-medium text-[#334155] shadow-sm"
          >
            Desmarcar
          </button>
          <IoMdClose
            className="text-[#64748B] ml-2"
            size={28}
            onClick={openClose}
          />
        </div>
      </section>
      <TrendingSection list={list} trendSelected={optionSelected} />
    </div>
  )
}
