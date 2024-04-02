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
