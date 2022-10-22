import { deck } from './deck'
import _sampleSize from 'lodash/sampleSize'

export const hand = () => {
  const rand = _sampleSize(deck(), 2)

  // Ace
  // return [{card: 'A', suit: rand[0].suit}, rand[1]]

  // King
  // return [{card: 'K', suit: rand[0].suit}, rand[1]]

  // Queen
  // return [{card: 'Q', suit: rand[0].suit}, rand[1]]

  // Jack 
  // return [{card: 'J', suit: rand[0].suit}, rand[1]]

  // Ten
  // return [{card: 'T', suit: rand[0].suit}, rand[1]]

  // Nine
  // return [{card: '9', suit: rand[0].suit}, rand[1]]

  // Eight
  // return [{card: '8', suit: rand[0].suit}, rand[1]]

  // Seven
  // return [{card: '7', suit: rand[0].suit}, rand[1]]
  
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