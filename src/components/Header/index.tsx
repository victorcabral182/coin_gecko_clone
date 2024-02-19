import Image from "next/image"
import { AiOutlineMenu } from "react-icons/ai"
import logoHeader from "../../assets/img/logo-header.webp"
import { Button3D } from "../Button3D"

export const Header = () => {
  return (
    <>
      <header className="flex flex-col w-full gap-2 mb-2 md:px-6">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <AiOutlineMenu size={18} />
            <Image
              src={logoHeader}
              alt="coin gecko logo"
              className="w-[7.5rem]"
            />
          </div>
          <Button3D type="button">Usar App</Button3D>
        </div>
      </header>
    </>
  )
}
