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

  const {
    hand,
  } = useContext(GlobalContext)

  useEffect(() => {
    setDisplay(_last(hand))
  })

  const handleClick = (e) => {
    const n = parseInt(e.target.id, 10)
    const card1 = display[0].card + display[0].suit
    const card2 = display[1].card + display[1].suit
    setRes(sklansky(card1, card2, n))
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
                  className="border rounded border-sky-500 pt-6 pb-6 text-xl font-bold cursor-pointer hover:bg-base-300"
                >{n}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
