const getFaceCard = (num) => {
  if (num === 11) {
    return 'Jack'
  }
  
  if (num === 12) {
    return 'Queen'
  }

  if (num === 13) {
    return 'King'
  }

  if (num === 14) {
    return 'Ace'
  }
}

export const deck = () => {
  const cards = []
  const suits = [
    'Hearts',
    'Spades',
    'Diamonds',
    'Clubs',
  ]
  const uniq = 13
  suits.forEach((suit) => {
    for (var i = 0; i < uniq; i++) {
      const num = i + 2
      const card = (num > 10) ? getFaceCard(num) : num
      cards.push({
        card,
        suit,
      })
    }
  })

  return cards
}