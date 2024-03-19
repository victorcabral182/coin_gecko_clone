import { Button3D } from "../Button3D"

interface ICommunityOpinion {
  data?: any
}

export const CommunityOpinion = ({ data }: ICommunityOpinion) => {
  const handleSentiment = () => {
    if (data?.sentiment_votes_up_percentage > 60) {
      return "otimista"
    } else if (
      data?.sentiment_votes_up_percentage < 60 &&
      data?.sentiment_votes_up_percentage > 50
    ) {
      return "neutra"
    } else {
      return "pessimista"
    }
  }

  return (
    <>
      <div className="flex flex-col gap-3">
        <span className="text-[#0f172a] text-[18px] font-bold">
          O que a comunidade acha {data?.symbol.toUpperCase()} hoje?
        </span>
        <span className="text-[12px] text-[#64748b] font-regular">
          A comunidade está {handleSentiment()} com relação ao {data?.name} (
          {data?.symbol.toUpperCase()}) hoje.
        </span>
        <div className="flex gap-1 pointer-events-none">
          <Button3D variant="outline">
            🚀 {data?.sentiment_votes_up_percentage?.toFixed(0)}%
          </Button3D>
          <Button3D variant="outline">
            👎 {data?.sentiment_votes_down_percentage?.toFixed(0)}%
          </Button3D>
        </div>
      </div>
    </>
  )
}
