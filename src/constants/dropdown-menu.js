import { AiFillPieChart } from "react-icons/ai"
import { FaTrophy } from "react-icons/fa"
import { HiSparkles } from "react-icons/hi"
import { FaListOl } from "react-icons/fa"
import { BiLink } from "react-icons/bi"
import { FaShapes } from "react-icons/fa"

export const criptoCurrencies = [
  {
    href: "#",
    description: "Por Capitalização de Mercado",
    icon: <AiFillPieChart className="text-gray-400" size={18} />,
  },
  {
    href: "#",
    description: "Categorias",
    icon: <FaShapes className="text-gray-400" size={18} />,
  },
  {
    href: "#",
    description: "Cadeias",
    icon: <BiLink className="text-gray-400" size={18} />,
  },
  {
    href: "#",
    description: "Destaques",
    icon: <FaListOl className="text-gray-400" size={18} />,
  },
  {
    href: "#",
    description: "Novas Criptomoedas",
    icon: <HiSparkles className="text-gray-400" size={18} />,
  },
  {
    href: "#",
    description: "Ganhadores e Perdedores",
    icon: <FaTrophy className="text-gray-400" size={18} />,
  },
]
