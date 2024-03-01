import { GiNestedHexagons } from "react-icons/gi"
import { AiOutlineFileImage } from "react-icons/ai"
import { AiFillStar } from "react-icons/ai"
import { BiBuilding } from "react-icons/bi"
import { AiOutlineLineChart } from "react-icons/ai"
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
    divider: false,
  },
  {
    href: "#",
    description: "Categorias",
    icon: <FaShapes className="text-gray-400" size={18} />,
    divider: false,
  },
  {
    href: "#",
    description: "Cadeias",
    icon: <BiLink className="text-gray-400" size={18} />,
    divider: false,
  },
  {
    description: "Popular",
    divider: true,
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
  {
    description: "Ferramentas",
    divider: true,
  },
  {
    href: "#",
    description: "Todas as Moedas",
    divider: false,
  },
  {
    href: "#",
    description: "Comparar moedas",
    divider: false,
  },
  {
    href: "#",
    description: "Conversor",
    divider: false,
  },
  {
    href: "#",
    description: "Gráfico Global",
    divider: false,
  },
]

export const currencyExchange = [
  {
    href: "#",
    description: "Corretoras de Cripto",
    icon: <AiFillPieChart className="text-gray-400" size={18} />,
    divider: false,
  },
  {
    href: "#",
    description: "Corretoras Descentralizadas",
    icon: <BiBuilding className="text-gray-400" size={18} />,
    divider: false,
  },
  {
    href: "#",
    description: "Derivados",
    icon: <AiOutlineLineChart className="text-gray-400" size={18} />,
    divider: false,
  },
]

export const Nft = [
  {
    href: "#",
    description: "Preço de Entrada de NFT",
    icon: <AiOutlineFileImage className="text-gray-400" size={18} />,
    divider: false,
  },
  {
    href: "#",
    description: "Moedas relacionadas om NFT",
    icon: <GiNestedHexagons className="text-gray-400" size={18} />,
    divider: false,
  },
  {
    href: "#",
    description: "Watchlist NFT",
    icon: <AiFillStar className="text-gray-400" size={18} />,
    divider: false,
  },
]
