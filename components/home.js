import { useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import _last from 'lodash/last'


const Home = () => {
  const {
    hand,
  } = useContext(GlobalContext)

  const display = _last(hand)

  return (
    <>
      <div className="hero bg-base-200">
        <div className="hero-content text-center mb-64">
          <div className="max-w-md">
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
