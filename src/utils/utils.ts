export const checkCondition = (variation: number) => {
  if (variation > 0) {
    return "text-[#00a83e]"
  } else if (variation < 0) {
    return "text-[#FF3A33]"
  } else {
    return "text-black"
  }
}

export const handleMarketCap = (values: any) => {
  const sum = values
    ? Object?.values(values)?.reduce(
        (acc: number, value: number) => acc + value,
        0
      )
    : 0
  if (sum) {
    return sum.toLocaleString()
  }
  return "error"
}

export const handleFirstTwo = (values: any) => {
  const list: any = values ? Object?.entries(values) : null
  const first = list ? list[0] : 0
  const second = list ? list[1] : 0
  return (
    first[0] +
    " " +
    first[1]?.toFixed(1) +
    "%" +
    " " +
    second[0] +
    " " +
    second[1]?.toFixed(1) +
    "%"
  )
}
