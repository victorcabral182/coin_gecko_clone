"use client"

import { BiChevronDown } from "react-icons/bi"
import Image from "next/image"
import logo from "../../assets/img/coingecko.svg"
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { Button3D } from "../Button3D"

export const Footer = () => {
  return (
    <>
      <footer className="flex flex-col border-t-[1px] border-opacity-10 border-t-gray-400 mt-8 pt-6">
        <Image src={logo} alt="Coin Gecko logo" className="w-[172px]" />
        <span className="text-[14px] text-[#64748b] leading-5 my-5 ">
          A CoinGecko fornece análise de fundamentos para o mercado de criptos.
          Além de rastreamento de preços, volume e capitalização de mercado, a
          CoinGecko rastreia o crescimento da comunidade, desenvolvimento de
          código fonte, principais eventos e métricas em cadeia.
        </span>
        <div className="flex flex-col gap-2 mb-4 border-b-[1px] border-opacity-10 border-t-gray-400 pb-6">
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
        <p className="font-semibold text-sm">
          Quer manter-se a par das criptomoedas?
        </p>
        <p className="font-normal text-sm text-gray-500 py-2">
          Subscreva a nossa newsletter gratuita e obtenha as notícias, as
          atualizações e os relatórios mais recentes sobre criptomoedas.
        </p>
        <form className="border-b-[1px] border-opacity-10 border-t-gray-400 pb-6">
          <input
            required
            type="email"
            placeholder="Insira o seu e-mail"
            className="w-full text-[13px] px-2 py-[10px] mb-2 border-2 border-gray-200 rounded-md focus-within:outline-[#4bcc00]"
          />

          <Button3D
            type="submit"
            wFull
            variant="filled"
            className="h-[40px] text-[14px]"
          >
            Subscrever
          </Button3D>
        </form>
        <div className="flex flex-col mt-4 gap-4">
          <span className="font-normal text-sm text-gray-500 text-center">
            © 2024 CoinGecko. All Rights Reserved.
          </span>
          <div className="flex justify-center gap-4">
            <Image
              width={135}
              height={45}
              src="me.png"
              alt="Google Play"
              className="w-[135px] h-[45px]"
              loader={() =>
                "https://static.coingecko.com/s/coingecko_logos/google_play_store-cb1f298b04afa7f74639a948d9b2e22e4aa6eea9486a2b0442c2cf9bdcda63e8.svg"
              }
            />
            <Image
              width={135}
              height={45}
              src="me.png"
              alt="App Store"
              className="w-[135px] h-[45px]"
              loader={() =>
                "https://static.coingecko.com/s/coingecko_logos/apple_app_store-558245a688cc13737dfb861fd82b252d75d5afbaf343c06e3067a454675bbe05.svg"
              }
            />
          </div>
          <p className="text-[14px] leading-5 text-gray-500 text-justify">
            <span className="font-semibold underline text-[13px] text-[#334155]">
              ISENÇÃO DE RESPONSABILIDADE IMPORTANTE:
            </span>{" "}
            Todos os conteúdos fornecidos no nosso website, sites hiperligados,
            aplicações associadas, fóruns, blogs, contas nas redes sociais e
            noutras plataformas &quot;website&quot; são apenas para sua
            informação geral obtida por fontes de terceiros. Não fazemos
            garantias de qualquer tipo em relação ao nosso conteúdo, por
            exemplo, a precisão e atualização. Nenhuma parte do conteúdo que
            fornecemos constitui aconselhamento financeiro, jurídico nem
            qualquer outra forma de aconselhamento para a sua confiança
            específica por qualquer motivo. Qualquer utilização ou confiança no
            nosso conteúdo é unicamente da sua responsabilidade. Deve realizar a
            sua própria pesquisa, avaliação, análise e verificar o nosso
            conteúdo antes de confiar nele. Os câmbios são uma atividade de alto
            risco que pode levar a grandes perdas, portanto, consulte o seu
            consultor financeiro antes de tomar qualquer decisão. Nenhum
            conteúdo no nosso website é uma solicitação ou oferta.
          </p>
        </div>
      </footer>
    </>
  )
}
