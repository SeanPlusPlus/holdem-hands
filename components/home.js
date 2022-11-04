import { useContext, useState, useEffect } from 'react'
import _last from 'lodash/last'
import Image from 'next/image'
import { GlobalContext } from '../context/GlobalState'
import { sklansky } from '../utils/sklansky'
import { getCard } from '../utils/hand'

const nums = Array(9).fill().map((x,i)=>{
  if (i === 8) {
    return '∅'
  }
  return i + 1
})

const Home = () => {
  const [display, setDisplay] = useState(null)
  const [res, setRes] = useState(null)
  const [score, setScore] = useState(false)
  const [disable, setDisable] = useState(false)

  const {
    hand,
    setHand,
  } = useContext(GlobalContext)

  useEffect(() => {
    setDisplay(_last(hand))
  })

  const handleClick = (e) => {
    setDisable(true)
    const n = parseInt(e.target.id, 10) || null
    const card1 = display[0].card + display[0].suit
    const card2 = display[1].card + display[1].suit
    const r = sklansky(card1, card2, n)
    setRes(r)
    if (r) {
      console.log('n', n);
      setScore(n)
    }
    setDisable(false)
  }

  const handleNextHand = () => {
    setScore(false)
    setHand()
  }

  if (!display) {
    return <></>
  }

  return (
    <>
      <div className="hero">
        <div className="hero-content text-center mt-0 ml-0 mr-0 pr-0 pl-0 pt-2">
          <div className="max-w-md">
            <div className="mb-3">
              { (score === false) && (res !== false) && (
                <div className="alert shadow-lg h-14">
                  <div>
                    <span className="text-sm">What is the quality of this hand?</span>
                  </div>
                </div>
              )}
              { res === false && (
                <div className="alert alert-warning shadow-lg h-14">
                  <div>
                    <span className="text-sm">Incorrect! Try again</span>
                  </div>
                </div>
              )}
              {(score !== false) && (
                <div className="alert alert-info shadow-lg h-14">
                  <div className="flex">
                    <div>
                      {getCard(hand[hand.length - 1][0].card)}
                      &nbsp;&#47;&nbsp;
                      {getCard(hand[hand.length - 1][1].card)}
                      { (hand[hand.length - 1][0].card !== hand[hand.length - 1][1].card) && (
                        <span className="ml-2 font-bold">
                          {hand[hand.length - 1][0].suit === hand[hand.length - 1][1].suit ? 'Suited' : 'Unsuited'}
                        </span>
                      )}
                    </div>
                    <div className="float-right">
                      { ((score === null)) && (
                        <div className="badge badge-error gap-2">
                          {score ? score : '∅'}
                        </div>
                      )}
                      { ((score === 8) || (score === 7) || (score === 6) || (score === 5) || (score === 4)) && (
                        <div className="badge badge-warning gap-2">
                          {score}
                        </div>
                      )}
                      { ((score === 3) || (score === 2) || (score === 1)) && (
                        <div className="badge badge-success gap-2">
                          {score}
                        </div>
                      )}
                    </div>
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
                  className={`btn btn-lg border rounded border-base-300 text-xl font-bold cursor-pointer ${disable && 'btn-disabled'}`}
                >{n}</div>
              ))}
            </div>
            {(score !== false) && (
              <div className="mt-2">
                <button onClick={handleNextHand} className="btn btn-secondary w-full">Deal next hand</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
