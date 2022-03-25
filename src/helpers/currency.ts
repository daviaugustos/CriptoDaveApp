export const getKMoneyAmount = num => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + 'M'
    : Math.sign(num) * Math.abs(num)
}
