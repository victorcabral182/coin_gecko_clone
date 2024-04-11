import { BsFillGearFill } from "react-icons/bs"
import {
  criptoCurrencies,
  currencyExchange,
  information,
  nft,
  products,
} from "@/constants/dropdown-menu"
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import Link from "next/link"
import { BiChevronDown } from "react-icons/bi"
import { Button3D } from "../Button3D"

export const MenuMobile = () => {
  return (
    <section className="fixed px-4 bg-white w-full top-[60px] left-0 z-20 min-h-[calc(100vh-60px)] max-h-[calc(100vh-60px)] overflow-y-auto">
      <Accordion>
        <AccordionSummary expandIcon={<BiChevronDown size={20} />}>
          <p className="font-semibold text-sm">Criptomoedas</p>
        </AccordionSummary>
        <AccordionDetails className="flex flex-col pl-6 pb-4 mt-[-4px]">
          {criptoCurrencies?.map((item) => {
            if (!item.divider) {
              return (
                <Link
                  className="w-full"
                  key={item?.description}
                  href={item?.href ?? "#"}
                >
                  <div className="flex items-center gap-2 rounded-lg py-3 px-2 hover:bg-gray-100">
                    {item?.icon}
                    <span className="text-[#314455] text-[14px] font-semibold">
                      {item?.description}
                    </span>
                  </div>
                </Link>
              )
            } else {
              return (
                <div
                  key={item.description}
                  className="flex items-center gap-2 rounded-lg py-2 px-2 text-[#64748b] text-xs whitespace-nowrap"
                >
                  {item?.description}
                  <hr className="w-full opacity-60" />
                </div>
              )
            }
          })}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<BiChevronDown size={20} />}>
          <p className="font-semibold text-sm">Câmbios</p>
        </AccordionSummary>
        <AccordionDetails className="flex flex-col pl-6 pb-4 mt-[-4px]">
          {currencyExchange?.map((item) => {
            if (!item.divider) {
              return (
                <Link
                  className="w-full"
                  key={item?.description}
                  href={item?.href ?? "#"}
                >
                  <div className="flex items-center gap-2 rounded-lg py-3 px-2 hover:bg-gray-100">
                    {item?.icon}
                    <span className="text-[#314455] text-[14px] font-semibold">
                      {item?.description}
                    </span>
                  </div>
                </Link>
              )
            } else {
              return (
                <div
                  key={item.description}
                  className="flex items-center gap-2 rounded-lg py-2 px-2 text-[#64748b] text-xs whitespace-nowrap"
                >
                  {item?.description}
                  <hr className="w-full opacity-60" />
                </div>
              )
            }
          })}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<BiChevronDown size={20} />}>
          <p className="font-semibold text-sm">NFT</p>
        </AccordionSummary>
        <AccordionDetails className="flex flex-col pl-6 pb-4 mt-[-4px]">
          {nft?.map((item) => {
            if (!item.divider) {
              return (
                <Link
                  className="w-full"
                  key={item?.description}
                  href={item?.href ?? "#"}
                >
                  <div className="flex items-center gap-2 rounded-lg py-3 px-2 hover:bg-gray-100">
                    {item?.icon}
                    <span className="text-[#314455] text-[14px] font-semibold">
                      {item?.description}
                    </span>
                  </div>
                </Link>
              )
            } else {
              return (
                <div
                  key={item.description}
                  className="flex items-center gap-2 rounded-lg py-2 px-2 text-[#64748b] text-xs whitespace-nowrap"
                >
                  {item?.description}
                  <hr className="w-full opacity-60" />
                </div>
              )
            }
          })}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<BiChevronDown size={20} />}>
          <p className="font-semibold text-sm">Informação</p>
        </AccordionSummary>
        <AccordionDetails className="flex flex-col pl-6 pb-4 mt-[-4px]">
          {information?.map((item) => {
            if (!item.divider) {
              return (
                <Link
                  className="w-full"
                  key={item?.description}
                  href={item?.href ?? "#"}
                >
                  <div className="flex items-center gap-2 rounded-lg py-3 px-2 hover:bg-gray-100">
                    {item?.icon}
                    <span className="text-[#314455] text-[14px] font-semibold">
                      {item?.description}
                    </span>
                  </div>
                </Link>
              )
            } else {
              return (
                <div
                  key={item.description}
                  className="flex items-center gap-2 rounded-lg py-2 px-2 text-[#64748b] text-xs whitespace-nowrap"
                >
                  {item?.description}
                  <hr className="w-full opacity-60" />
                </div>
              )
            }
          })}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<BiChevronDown size={20} />}>
          <p className="font-semibold text-sm">Produtos</p>
        </AccordionSummary>
        <AccordionDetails className="flex flex-col gap-2 pl-6 pb-4 mt-[-4px]">
          {products?.map((item) => {
            if (!item.divider) {
              return (
                <Link
                  className="w-full"
                  key={item?.description}
                  href={item?.href ?? "#"}
                >
                  <div className="flex items-center gap-2 rounded-lg py-3 px-2 hover:bg-gray-100">
                    {item?.icon}
                    <span className="text-[#314455] text-[14px] font-semibold">
                      {item?.description}
                    </span>
                  </div>
                </Link>
              )
            } else {
              return (
                <div
                  key={item.description}
                  className="flex items-center gap-2 rounded-lg py-2 px-2 text-[#64748b] text-xs whitespace-nowrap"
                >
                  {item?.description}
                  <hr className="w-full opacity-60" />
                </div>
              )
            }
          })}
        </AccordionDetails>
      </Accordion>
      <Button3D
        variant="outline"
        className="flex items-center justify-center w-full my-4 h-[40px]"
      >
        <BsFillGearFill size={16} color="" />
      </Button3D>
    </section>
  )
}
