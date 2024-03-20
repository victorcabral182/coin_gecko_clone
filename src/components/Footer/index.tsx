"use client"

import Image from "next/image"
import logo from "../../assets/img/coingecko.svg"
import { Button3D } from "../Button3D"
import { DropdownFooter } from "../DropdownFooter"
import { MenuFooterDesktop } from "../MenuFooterDesktop"

export const Footer = () => {
  return (
    <>
      <footer className="flex flex-col xl:grid xl:grid-cols-7 xl:gap-4 border-t-[1px] border-opacity-10 border-t-gray-400 mt-8 pt-6 pb-4">
        <div className="flex flex-col xl:col-span-3">
          <Image src={logo} alt="Coin Gecko logo" className="w-[172px]" />
          <span className="text-[14px] text-[#64748b] leading-5 my-5 ">
            A CoinGecko fornece análise de fundamentos para o mercado de
            criptos. Além de rastreamento de preços, volume e capitalização de
            mercado, a CoinGecko rastreia o crescimento da comunidade,
            desenvolvimento de código fonte, principais eventos e métricas em
            cadeia.
          </span>
        </div>
        <DropdownFooter />
        <MenuFooterDesktop />
        <p className="font-semibold text-sm xl:col-span-5">
          Quer manter-se a par das criptomoedas?
        </p>
        <p className="font-normal text-sm text-gray-500 py-2 xl:col-span-5">
          Subscreva a nossa newsletter gratuita e obtenha as notícias, as
          atualizações e os relatórios mais recentes sobre criptomoedas.
        </p>
        <form className="border-b-[1px] border-opacity-10 border-t-gray-400 pb-6 xl:flex xl:col-span-2 xl:gap-2 xl:border-none">
          <input
            required
            type="email"
            placeholder="Insira o seu e-mail"
            className="w-full h-fit text-[13px] px-2 py-[10px] mb-2 border-2 border-gray-200 rounded-md focus-within:outline-[#4bcc00]"
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
        <div className="flex flex-col mt-4 gap-4 xl:flex-row xl:items-center xl:justify-between xl:col-span-7">
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
        </div>
        <p className="text-[14px] leading-5 text-gray-500 text-justify xl:col-span-7">
          <span className="font-semibold underline text-[13px] text-[#334155]">
            ISENÇÃO DE RESPONSABILIDADE IMPORTANTE:
          </span>{" "}
          Todos os conteúdos fornecidos no nosso website, sites hiperligados,
          aplicações associadas, fóruns, blogs, contas nas redes sociais e
          noutras plataformas &quot;website&quot; são apenas para sua informação
          geral obtida por fontes de terceiros. Não fazemos garantias de
          qualquer tipo em relação ao nosso conteúdo, por exemplo, a precisão e
          atualização. Nenhuma parte do conteúdo que fornecemos constitui
          aconselhamento financeiro, jurídico nem qualquer outra forma de
          aconselhamento para a sua confiança específica por qualquer motivo.
          Qualquer utilização ou confiança no nosso conteúdo é unicamente da sua
          responsabilidade. Deve realizar a sua própria pesquisa, avaliação,
          análise e verificar o nosso conteúdo antes de confiar nele. Os câmbios
          são uma atividade de alto risco que pode levar a grandes perdas,
          portanto, consulte o seu consultor financeiro antes de tomar qualquer
          decisão. Nenhum conteúdo no nosso website é uma solicitação ou oferta.
        </p>
      </footer>
    </>
  )
}
