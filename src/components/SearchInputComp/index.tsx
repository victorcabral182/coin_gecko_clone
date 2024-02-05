"use client"

import React, { useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { IoMdClose } from "react-icons/io"
import { ButtonSubMenu } from "../ButtonSubMenu"
import { TrendingSection } from "../TrendingSection"
import { FaFireAlt, FaImage, FaShapes } from "react-icons/fa"

interface SearchInputCompProps {
  openClose: () => void
}

export const SearchInputComp = ({ openClose }: SearchInputCompProps) => {
  const [search, setSearch] = useState<string>("")
  const [optionSelected, setOptionSelected] = useState(1)

  const searchMenuButtons = [
    {
      title: "Tendências",
      icon: <FaFireAlt size={14} />,
    },
    {
      title: "NFTs",
      icon: <FaImage size={14} />,
    },
    {
      title: "Categorias",
      icon: <FaShapes size={14} />,
    },
  ]

  const cleanSearchInput = () => {
    setSearch("")
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-72px)]">
      <section className="flex flex-col jus items-center relative w-full z-10">
        <div className="flex w-full items-center gap-0 p-[0.625rem] bg-white shadow-sm">
          <AiOutlineSearch size={28} className="text-[#64748B]" />
          <input
            type="text"
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
        <div className="flex justify-start gap-2 w-full mt-2 mb-1">
          {searchMenuButtons.map((item, index) => (
            <ButtonSubMenu
              key={index}
              title={item.title}
              iconLeft={item.icon}
              selected={optionSelected === index + 1}
              setSelected={() => setOptionSelected(index + 1)}
            />
          ))}
        </div>
      </section>
      <TrendingSection trendSelected={optionSelected} />
    </div>
  )
}
