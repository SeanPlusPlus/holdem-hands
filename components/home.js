import { useContext, useState, useEffect } from 'react'
import _last from 'lodash/last'
import Image from 'next/image'
import { GlobalContext } from '../context/GlobalState'
import { sklansky } from '../utils/sklansky'

const nums = Array(9).fill().map((x,i)=>{
  if (i === 8) {
    return '∅'
  }
  return i + 1
})

const Home = () => {
  const [display, setDisplay] = useState(null)
  const [res, setRes] = useState(null)
  const [score, setScore] = useState(null)

  const {
    hand,
    setHand,
  } = useContext(GlobalContext)

  useEffect(() => {
    setDisplay(_last(hand))
  })

  const handleClick = (e) => {
    const n = parseInt(e.target.id, 10) || null
    const card1 = display[0].card + display[0].suit
    const card2 = display[1].card + display[1].suit
    const r = sklansky(card1, card2, n)
    setRes(r)
    if (r) {
      setHand()
      setScore(n)
    }
  }

  if (!display) {
    return <></>
  }

  return (
    <>
      <div className="hero">
        <div className="hero-content text-center mt-0 ml-0 mr-0 pr-0 pl-0">
          <div className="max-w-md">
            <div className="mb-3">
              { res === null && (
                <div className="alert alert-info shadow-lg">
                  <div>
                    <span>What is the quality of this hand?</span>
                  </div>
                </div>
              )}
              { res === true && (
                <div className="alert alert-success shadow-lg">
                  <div>
                    <span>Correct! How&apos;s about this hand?</span>
                  </div>
                </div>
              )}
              { res === false && (
                <div className="alert alert-warning shadow-lg">
                  <div>
                    <span>Incorrect! Try again</span>
                  </div>
                </div>
              )}
            </div>
           <div className="flex mb-2">
              <div className="mr-2">
                <Image
                  src={`/cards/${display[0].card}${display[0].suit}.svg`}
                  alt={display[0].card + display[0].suit}
                  width={160}
                  height={230}
                />
              </div>
              <div className="ml-2">
                <Image
                  src={`/cards/${display[1].card}${display[1].suit}.svg`}
                  alt={display[1].card + display[1].suit}
                  width={160}
                  height={230}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {nums.map((n) => (
                <div
                  key={n}
                  id={n}
                  onClick={handleClick}
                  className="btn btn-lg border rounded border-base-300 text-xl font-bold cursor-pointer"
                >{n}</div>
              ))}
            </div>
            {hand.length > 1 && (
              <div className="mt-4 pt-2 pb-2 border rounded">
                <code>
                  <span className="mr-1 ml-1">
                    {hand[hand.length - 2][0].card}
                    {hand[hand.length - 2][0].suit}
                  </span>
                  :
                  <span className="ml-1 mr-1">
                    {hand[hand.length - 2][1].card}
                    {hand[hand.length - 2][1].suit}
                  </span>
                  =
                  <span className="ml-1">
                    {score || '∅'}
                  </span>
                </code>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
