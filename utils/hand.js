import { deck } from './deck'
import _sampleSize from 'lodash/sampleSize'

export const hand = () => {
  return _sampleSize(deck(), 2)
}