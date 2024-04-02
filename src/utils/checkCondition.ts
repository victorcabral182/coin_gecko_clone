export const checkCondition = (variation: number) => {
  if (variation > 0) {
    return "text-[#00a83e]"
  } else if (variation < 0) {
    return "text-[#FF3A33]"
  } else {
    return "text-black"
  }
}
