import Link from "next/link"
import { IDropDownData } from "@/types/dropdrown"

interface IDropDownProps {
  isOpen: boolean
  options: IDropDownData[]
}

export const Dropdown = ({ options, isOpen }: IDropDownProps) => {
  return (
    <>
      {isOpen && (
        <div className="absolute z-10">
          <div className="w-[280px] flex flex-col border rounded-lg mt-2 p-4 bg-white">
            {options?.map((item) => {
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
          </div>
        </div>
      )}
    </>
  )
}
