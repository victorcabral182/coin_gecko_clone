"use client"

import Image from "next/image"
import logoHeader from "../../assets/img/coingecko.svg"
import { Button3D } from "../Button3D"
import { Dropdown } from "../Dropdown"
import { AiFillStar } from "react-icons/ai"
import { AiOutlineMenu } from "react-icons/ai"
import { SearchInputBox } from "../SearchInputBox"
import { CapitalizationRow } from "../CapitalizationRow"
import { AiOutlineClose } from "react-icons/ai"
import { useGeneralContext } from "@/contexts/generalContext/GeneralContext"
import { useReducer } from "react"
import {
  criptoCurrencies,
  currencyExchange,
  information,
  nft,
  products,
} from "@/constants/dropdown-menu"
import Link from "next/link"
import { MenuMobile } from "../MenuMobile"

export const Header = () => {
  const { globalData } = useGeneralContext()

  const [isOpenCripto, switchMenu1] = useReducer(
    (isOpenCripto) => !isOpenCripto,
    false
  )
  const [isOpenExchange, switchMenu2] = useReducer(
    (isOpenExchange) => !isOpenExchange,
    false
  )
  const [isOpenNft, switchMenu3] = useReducer((isOpenNft) => !isOpenNft, false)
  const [isOpenInformation, switchMenu4] = useReducer(
    (isOpenInformation) => !isOpenInformation,
    false
  )
  const [isOpenProducts, switchMenu5] = useReducer(
    (isOpenProducts) => !isOpenProducts,
    false
  )

  const [showMenuMobile, action] = useReducer((showMenu) => !showMenu, false)

  return (
    <>
      <div className="hidden xl:flex">
        <CapitalizationRow isHeader data={globalData} />
      </div>
      <header
        style={{
          position: showMenuMobile ? "fixed" : "initial",
          paddingRight: showMenuMobile ? "32px" : "",
        }}
        className={`flex flex-col z-10 w-full relative gap-2 mb-2 md:px-6 xl:px-0 xl:border-y-[1px] xl:border-y-gray-400 xl:border-opacity-10 xl:mt-2 bg-white top-0`}
      >
        <div
          className="flex justify-between xl:hidden"
          style={{ paddingTop: showMenuMobile ? "16px" : "" }}
        >
          <div className="flex items-center gap-4">
            {!showMenuMobile ? (
              <AiOutlineMenu size={18} onClick={action} />
            ) : (
              <AiOutlineClose size={18} onClick={action} />
            )}
            <Link href="/">
              <Image
                src={logoHeader}
                alt="coin gecko logo"
                className="w-[7.5rem]"
              />
            </Link>
          </div>
          <div className="flex xl:hidden">
            <Button3D type="button">Usar App</Button3D>
          </div>
        </div>
        <div className="hidden xl:flex xl:items-center xl:justify-between xl:py-3">
          <div className="flex items-center gap-8">
            <Link href="/">
              <Image
                src={logoHeader}
                alt="coin gecko logo"
                className="w-[9rem] h-[40px]"
              />
            </Link>
            <div className="flex gap-8 font-semibold text-sm text-[#334155]">
              <div
                className="relative"
                onMouseEnter={switchMenu1}
                onMouseLeave={switchMenu1}
              >
                <span
                  className={`cursor-pointer hover:text-[#4bcc00] ${
                    isOpenCripto && "text-[#4bcc00]"
                  } `}
                >
                  Criptomoedas
                </span>
                <Dropdown isOpen={isOpenCripto} options={criptoCurrencies} />
              </div>
              <div
                className="relative"
                onMouseEnter={switchMenu2}
                onMouseLeave={switchMenu2}
              >
                <span
                  className={`cursor-pointer hover:text-[#4bcc00] ${
                    isOpenExchange && "text-[#4bcc00]"
                  }`}
                >
                  Câmbios
                </span>
                <Dropdown isOpen={isOpenExchange} options={currencyExchange} />
              </div>
              <div
                className="relative"
                onMouseEnter={switchMenu3}
                onMouseLeave={switchMenu3}
              >
                <span
                  className={`cursor-pointer hover:text-[#4bcc00] ${
                    isOpenNft && "text-[#4bcc00]"
                  }`}
                >
                  NFT
                </span>
                <Dropdown isOpen={isOpenNft} options={nft} />
              </div>
              <div
                className="relative"
                onMouseEnter={switchMenu4}
                onMouseLeave={switchMenu4}
              >
                <span
                  className={`cursor-pointer hover:text-[#4bcc00] ${
                    isOpenInformation && "text-[#4bcc00]"
                  }`}
                >
                  Informação
                </span>
                <Dropdown isOpen={isOpenInformation} options={information} />
              </div>
              <div
                className="relative"
                onMouseEnter={switchMenu5}
                onMouseLeave={switchMenu5}
              >
                <span
                  className={`cursor-pointer hover:text-[#4bcc00] ${
                    isOpenProducts && "text-[#4bcc00]"
                  }`}
                >
                  Produtos
                </span>
                <Dropdown isOpen={isOpenProducts} options={products} />
              </div>
            </div>
          </div>
          <div className="flex items-center text-sm text-[#334155]">
            <div className="flex items-center gap-2 cursor-pointer">
              <Image
                alt="candy jar"
                src="me.png"
                width={12}
                height={12}
                loader={() =>
                  "https://static.coingecko.com/s/candy_notification-62af2d17629b138154e3fac22a492b51d914d18461f9283ae4bd5ad5730d8763.svg"
                }
              />
              <span className="text-gray-700 font-semibold">Candy</span>
            </div>
            <div className="flex gap-1 items-center ml-2 cursor-pointer">
              <AiFillStar size={18} color="#ffd11a" />
              <span className="text-gray-700 font-semibold">Carteira</span>
            </div>
            <div className="ml-3 w-[210px]">
              <SearchInputBox />
            </div>
          </div>
        </div>
        {showMenuMobile && <div className="h-[40px]" />}
        {showMenuMobile && <MenuMobile />}
      </header>
    </>
  )
}
