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
      cards.push({
        i,
        suit,
      })
    }
  })

  return cards
}