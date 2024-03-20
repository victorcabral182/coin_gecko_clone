import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { BiChevronDown } from "react-icons/bi"

export const DropdownFooter = () => {
  return (
    <>
      <div className="flex flex-col xl:hidden gap-2 mb-4 border-b-[1px] border-opacity-10 border-t-gray-400 pb-6">
        <Accordion>
          <AccordionSummary expandIcon={<BiChevronDown size={20} />}>
            <p className="font-semibold text-sm">Recursos</p>
          </AccordionSummary>
          <AccordionDetails className="flex flex-col gap-4 pl-6 pb-4 mt-[-4px]">
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Perpétuos
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Notícias de Cripto
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Tesouraria de Bitcoin
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Mapa de Calor de Cripto
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              API de criptomoedas
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<BiChevronDown size={20} />}>
            <p className="font-semibold text-sm">Donativos</p>
          </AccordionSummary>
          <AccordionDetails className="flex flex-col gap-4 pl-6 pb-4 mt-[-4px]">
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Bitcoin
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Ethereum
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<BiChevronDown size={20} />}>
            <p className="font-semibold text-sm">Suporte</p>
          </AccordionSummary>
          <AccordionDetails className="flex flex-col gap-4 pl-6 pb-4 mt-[-4px]">
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Formulário do pedido
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Anúncios
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Lista de Brindes e Recompensas
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Centro de ajuda
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Recompensa por erros
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              FAQ
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<BiChevronDown size={20} />}>
            <p className="font-semibold text-sm">Sobre a CoinGecko</p>
          </AccordionSummary>
          <AccordionDetails className="flex flex-col gap-4 pl-6 pb-4 mt-[-4px]">
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Sobre nós
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Carreiras (adicionar button)
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Blog da Empresa
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Manual de marcas
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Isenção de Responsabilidade
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Termos de serviço
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Política de privacidade
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Política de anúncios
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Preferências de cookies
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<BiChevronDown size={20} />}>
            <p className="font-semibold text-sm">Comunidade</p>
          </AccordionSummary>
          <AccordionDetails className="flex flex-col gap-4 pl-6 pb-4 mt-[-4px]">
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              X/Twitter
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Chat no Telegram
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Notícias no Telegram
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Instagram
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Reddit
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Discord
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Facebook
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              Youtube
            </p>
            <p className="font-normal text-sm text-gray-500 cursor-pointer">
              TikTok
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  )
}
