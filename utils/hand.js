import { deck } from './deck'
import _sampleSize from 'lodash/sampleSize'

export const hand = () => {
  const rand = _sampleSize(deck(), 2)

  // Ace
  // return [{card: 'A', suit: rand[0].suit}, rand[1]]

  // King
  return [{card: 'K', suit: rand[0].suit}, rand[1]]

  // return rand
}