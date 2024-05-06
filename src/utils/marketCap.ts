export const handleMarketCap = (values: number) => {
  const sum = values
    ? Object?.values(values)?.reduce(
        (acc: number, value: number) => acc + value,
        0
      )
    : 0
  if (sum) {
    return ((sum as number) / 10 ** 15).toLocaleString() + "T"
  }
  return "error"
}
