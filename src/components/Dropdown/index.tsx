import Link from "next/link"

interface IDropDown {
  isOpen: boolean
  options: any
}

export const Dropdown = ({ options, isOpen }: IDropDown) => {
  return (
    <>
      {isOpen && (
        <div className="absolute z-10">
          <div className="w-[280px] flex flex-col border rounded-lg mt-2 p-4 bg-white">
            {options?.map((item) => (
              <Link className="w-full" key={item.description} href={item.href}>
                <div className="flex items-center gap-2 rounded-lg py-4 px-2 hover:bg-gray-100">
                  {item.icon}
                  {item.description}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
