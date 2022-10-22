const suited = (card1suite, card2suit) => {
  return card1suite === card2suit
}

const mapper = {
  A: 14,
  K: 13,
  Q: 12,
  J: 11,
  T: 10,
  14: 'A',
  13: 'K',
  12: 'Q',
  11: 'J',
  10: 'T',
}

const sortCards = (c1, c2) => {
  const card1 = mapper[c1] ? mapper[c1] : c1
  const card2 = mapper[c2] ? mapper[c2] : c2

  let sorted = [card1, card2].sort(function (a, b) {
    return a - b || a - b
  })

  sorted.reverse()

  const s1 = mapper[sorted[0]] ? mapper[sorted[0]] : sorted[0]
  const s2 = mapper[sorted[1]] ? mapper[sorted[1]] : sorted[1]

  return [s1, s2]
}

export const sklansky = (card1, card2, score) => {
  const isSuited = suited(card1.split('')[1], card2.split('')[1])
  const sorted = sortCards(card1.split('')[0], card2.split('')[0])
  const c1 = sorted[0] + ''
  const c2 = sorted[1] + ''
  let val = null

  if (isSuited) {
    // Ace
    if (c1 === 'A') {
      if (c2 === 'K') {
        val = 1
      }
      else if (c2 === 'Q') {
        val = 2
      }
      else if (c2 === 'J') {
        val = 2
      }
      else if (c2 === 'T') {
        val = 3
      }
      else {
        val = 5
      }
    }

    // King
    if (c1 === 'K') {
      if (c2 === 'Q') {
        val = 2
      }
      else if (c2 === 'J') {
        val = 3
      }
      else if (c2 === 'T') {
        val = 4
      }
      else if (c2 === '9') {
        val = 6
      }
      else {
        val = 7
      }
    }

    // Queen
    if (c1 === 'Q') {
      if (c2 === 'J') {
        val = 3
      }
      else if (c2 === 'T') {
        val = 4
      }
      else if (c2 === '9') {
        val = 5
      }
      else if (c2 === '8') {
        val = 7
      }
      else {
        val = null
      }
    }

    // Jack
    if (c1 === 'J') {
      if (c2 === 'T') {
        val = 3
      }
      else if (c2 === '9') {
        val = 4
      }
      else if (c2 === '8') {
        val = 6
      }
      else if (c2 === '7') {
        val = 8
      }
      else {
        val = null
      }
    }

    // Ten
    if (c1 === 'T') {
      if (c2 === '9') {
        val = 4
      }
      else if (c2 === '8') {
        val = 5
      }
      else if (c2 === '7') {
        val = 7
      }
      else {
        val = null
      }
    }

    // Nine
    if (c1 === '9') {
      if (c2 === '8') {
        val = 4
      }
      else if (c2 === '7') {
        val = 5
      }
      else if (c2 === '6') {
        val = 8
      }
      else {
        val = null
      }
    }

    // Eight
    if (c1 === '8') {
      if (c2 === '7') {
        val = 5
      }
      else if (c2 === '6') {
        val = 6
      }
      else if (c2 === '5') {
        val = 8
      }
      else {
        val = null
      }
    }

    // Seven
    if (c1 === '7') {
      if (c2 === '6') {
        val = 5
      }
      else if (c2 === '5') {
        val = 6
      }
      else if (c2 === '4') {
        val = 8
      }
      else {
        val = null
      }
    }

    // Six
    if (c1 === '6') {
      if (c2 === '5') {
        val = 7
      }
      else if (c2 === '4') {
        val = 7
      }
      else {
        val = null
      }
    }

    // Five
    if (c1 === '5') {
      if (c2 === '4') {
        val = 6
      }
      else if (c2 === '3') {
        val = 7
      }
      else {
        val = null
      }
    }

    // Four
    if (c1 === '4') {
      if (c2 === '3') {
        val = 7
      }
      else if (c2 === '2') {
        val = 8
      }
      else {
        val = null
      }
    }

    // Three
    if (c1 === '3') {
      if (c2 === '2') {
        val = 8
      }
      else {
        val = null
      }
    }
  }

  if (!isSuited) {
    // Ace
    if (c1 === 'A') {
      if (c2 === 'A') { // Pair
        val = 1
      }
      else if (c2 === 'K') {
        val = 2
      }
      else if (c2 === 'Q') {
        val = 3
      }
      else if (c2 === 'J') {
        val = 4
      }
      else if (c2 === 'T') {
        val = 6
      }
      else if (c2 === '9') {
        val = 8
      }
      else {
        val = null
      }
    }

    // King
    if (c1 === 'K') {
      if (c2 === 'K') { // Pair
        val = 1
      }
      else if (c2 === 'Q') {
        val = 4
      }
      else if (c2 === 'J') {
        val = 5
      }
      else if (c2 === 'T') {
        val = 6
      }
      else if (c2 === '9') {
        val = 8
      }
      else {
        val = null
      }
    }

    // Queen
    if (c1 === 'Q') {
      if (c2 === 'Q') { // Pair
        val = 1
      }
      else if (c2 === 'J') {
        val = 5
      }
      else if (c2 === 'T') {
        val = 6
      }
      else if (c2 === '9') {
        val = 8
      }
      else {
        val = null
      }
    }

    // Jack 
    if (c1 === 'J') {
      if (c2 === 'J') { // Pair
        val = 1
      }
      else if (c2 === 'T') {
        val = 5
      }
      else if (c2 === '9') {
        val = 7
      }
      else if (c2 === '9') {
        val = 8
      }
      else {
        val = null
      }
    }

    // Ten
    if (c1 === 'T') {
      if (c2 === 'T') { // Pair
        val = 2
      }
      else if (c2 === '9') {
        val = 7
      }
      else if (c2 === '8') {
        val = 8
      }
      else {
        val = null
      }
    }

    // Nine
    if (c1 === '9') {
      if (c2 === '9') { // Pair
        val = 3
      }
      else if (c2 === '8') {
        val = 7
      }
      else {
        val = null
      }
    }

    // Eight
    if (c1 === '8') {
      if (c2 === '8') { // Pair
        val = 4
      }
      else if (c2 === '7') {
        val = 8
      }
      else {
        val = null
      }
    }

    // Seven
    if (c1 === '7') {
      if (c2 === '7') { // Pair
        val = 5
      }
      else if (c2 === '6') {
        val = 8
      }
      else {
        val = null
      }
    }

    // Six
    if (c1 === '6') {
      if (c2 === '6') { // Pair
        val = 6
      }
      else if (c2 === '5') {
        val = 8
      }
      else {
        val = null
      }
    }

    // Five
    if (c1 === '5') {
      if (c2 === '5') { // Pair
        val = 6
      }
      else if (c2 === '4') {
        val = 8
      }
      else {
        val = null
      }
    }

    // Four
    if (c1 === '4') {
      if (c2 === '4') { // Pair
        val = 7
      }
      else {
        val = null
      }
    }

    // Three
    if (c1 === '3') {
      if (c2 === '3') { // Pair
        val = 7
      }
      else {
        val = null
      }
    }

    // Two
    if (c1 === '2') {
      if (c2 === '2') { // Pair
        val = 7
      }
      else {
        val = null
      }
    }
  }

  if (process.env.NODE_ENV === 'development') {
    console.log(isSuited, c1, c2, 'score', score, 'val', val)
  }

  return score === val
}