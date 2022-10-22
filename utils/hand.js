import { deck } from './deck'
import _sampleSize from 'lodash/sampleSize'

export const hand = () => {
  const rand = _sampleSize(deck(), 2)

  return [
    {
      card: 'K',
      suit: 'C'
    },
    {
      card: 'K',
      suit: 'S'
    },
  ]

  return rand
}

export const getCard = (str) => {
  if (str === 'A') {
    return 'Ace'
  }
  if (str === 'K') {
    return 'King'
  }
  if (str === 'Q') {
    return 'Queen'
  }
  if (str === 'J') {
    return 'Jack'
  }
  if (str === 'T') {
    return 'Ten'
  }
  return str
}