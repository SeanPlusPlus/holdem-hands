import { useContext, useState, useEffect } from 'react'
import _last from 'lodash/last'
import Image from 'next/image'
import { GlobalContext } from '../context/GlobalState'



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
            <div className="flex">
              <div className="ml-1">
                <Image
                  src="/cards/KS.svg"
                  alt="ks"
                  width={180}
                  height={300}
                  className="mr-1"
                />
              </div>
              <div className="ml-1">
                <Image
                  src="/cards/QS.svg"
                  alt="qs"
                  width={180}
                  height={300}
                />

              </div>

            </div>
            {display[0].card} of {display[0].suit}
            <br />
            {display[1].card} of {display[1].suit}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
