"use client"

import { FaFireAlt } from "react-icons/fa"
import { useReducer, useState } from "react"
import { IoMdClose } from "react-icons/io"
import { AiOutlineSearch } from "react-icons/ai"
import { ButtonSubMenu } from "../ButtonSubMenu"
import { FaImage } from "react-icons/fa"
import { FaShapes } from "react-icons/fa"
import { TrendingSection } from "../TrendingSection"

export const SearchInputBox = () => {
  const [search, setSearch] = useState<string>("")
  const [optionSelected, setOptionSelected] = useState(0)
  const [open, openClose] = useReducer((open) => !open, false)

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

  // TODO: COMPONENTIZAR DIV DO OPEN

  return (
    <div className="w-full">
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
                  selected={optionSelected === index}
                  setSelected={() => setOptionSelected(index)}
                />
              ))}
            </div>
          </section>
          <TrendingSection />
        </div>
      )}
    </div>
  )
}
