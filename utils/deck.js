const getFaceCard = (num) => {
  if (num === 10) {
    return 'T'
  }

  if (num === 11) {
    return 'J'
  }
  
  if (num === 12) {
    return 'Q'
  }

  if (num === 13) {
    return 'K'
  }

  if (num === 14) {
    return 'A'
  }
}

export const deck = () => {
  const cards = []
  const suits = [
    'H',
    'S',
    'D',
    'C',
  ]
  const uniq = 13
  suits.forEach((suit) => {
    for (var i = 0; i < uniq; i++) {
      const num = i + 2
      const card = (num > 9) ? getFaceCard(num) : num
      cards.push({
        card,
        suit,
      })
    }
  })

  return cards
}