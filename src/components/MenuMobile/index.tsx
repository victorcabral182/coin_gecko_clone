import { criptoCurrencies } from "@/constants/dropdown-menu"
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import Link from "next/link"
import { BiChevronDown } from "react-icons/bi"

export const MenuMobile = () => {
  return (
    <section className="absolute w-full top-10 z-50">
      <Accordion>
        <AccordionSummary expandIcon={<BiChevronDown size={20} />}>
          <p className="font-semibold text-sm">Criptomoedas</p>
        </AccordionSummary>
        <AccordionDetails className="flex flex-col gap-4 pl-6 pb-4 mt-[-4px]">
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
                    {item?.description}
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
    </section>
  )
}
