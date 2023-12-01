// 250 points | 3231 ops/s | Cognitive complexity: 3

function findFirstRepeated(gifts: []) {
  const uniqueGifts = [...new Set(gifts)]
  for (let i = 0; i < gifts.length; i++) {
    if (uniqueGifts[i] !== gifts[i]) return gifts[i]
  }
  return -1
}
