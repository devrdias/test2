// helper function to convert hex to rgba color, for testing on web
export const hexToRgb = (hex: string) => {
  hex = hex.replace('#', '')
  const r = parseInt(hex.length === 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16)
  const g = parseInt(hex.length === 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16)
  const b = parseInt(hex.length === 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16)
  return `rgba(${r},${g},${b},1.00)`
}
