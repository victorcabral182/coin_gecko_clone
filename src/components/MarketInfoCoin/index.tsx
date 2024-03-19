interface IMarketInfoCoin {
  data?: any
}

export const MarketInfoCoin = ({ data }: IMarketInfoCoin) => {
  return (
    <>
      <div className="w-full flex flex-col my-4">
        <div className="flex justify-between w-full border-b border-b-[#EFF2F5] py-4">
          <span className="text-[#64748B] font-medium text-[14px]">
            Capitalização de mercado
          </span>
          <span className="text-[#0f172a] font-medium text-[14px]">
            US
            {data?.market_data?.market_cap?.usd?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
        </div>
        <div className="flex justify-between w-full border-b border-b-[#EFF2F5] py-4">
          <span className="text-[#64748B] font-medium text-[14px]">
            Avaliação totalmente diluída
          </span>
          <span className="text-[#0f172a] font-medium text-[14px]">
            US
            {data?.market_data?.fully_diluted_valuation?.usd?.toLocaleString(
              "en-US",
              {
                style: "currency",
                currency: "USD",
              }
            )}
          </span>
        </div>
        <div className="flex justify-between w-full border-b border-b-[#EFF2F5] py-4">
          <span className="text-[#64748B] font-medium text-[14px]">
            Volume de negociação de 24h
          </span>
          <span className="text-[#0f172a] font-medium text-[14px]">
            US
            {data?.market_data?.fully_diluted_valuation?.usd?.toLocaleString(
              "en-US",
              {
                style: "currency",
                currency: "USD",
              }
            )}
          </span>
        </div>
        <div className="flex justify-between w-full border-b border-b-[#EFF2F5] py-4">
          <span className="text-[#64748B] font-medium text-[14px]">
            Fornecimento circulante
          </span>
          <span className="text-[#0f172a] font-medium text-[14px]">
            {data?.market_data?.circulating_supply?.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between w-full border-b border-b-[#EFF2F5] py-4">
          <span className="text-[#64748B] font-medium text-[14px]">
            Fornecimento total
          </span>
          <span className="text-[#0f172a] font-medium text-[14px]">
            {data?.market_data?.total_supply?.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between w-full border-b border-b-[#EFF2F5] py-4">
          <span className="text-[#64748B] font-medium text-[14px]">
            Fornecimento máx
          </span>
          <span className="text-[#0f172a] font-medium text-[14px]">
            {data?.market_data?.max_supply?.toLocaleString()}
          </span>
        </div>
      </div>
    </>
  )
}
