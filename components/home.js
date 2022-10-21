import { useContext, useState, useEffect } from 'react'
import _last from 'lodash/last'
import Image from 'next/image'
import { GlobalContext } from '../context/GlobalState'

const nums = Array(9).fill().map((x,i)=>i + 1)

const Home = () => {
  const [display, setDisplay] = useState(null)

  const {
    hand,
  } = useContext(GlobalContext)

  useEffect(() => {
    setDisplay(_last(hand))
  })

  if (!display) {
    return <></>
  }

  return (
    <>
      <div className="hero bg-base-200">
        <div className="hero-content text-center mb-64 mt-1 ml-0 mr-0 pr-0 pl-0">
          <div className="max-w-md">
            <div className="flex mb-8">
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
            {nums.map((n) => (n))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
