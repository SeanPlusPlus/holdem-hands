import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import Image from 'next/image'

const About = () => {
  const {
    modal,
    setModal,
  } = useContext(GlobalContext)

  const handleClose= () => {
    setModal({})
  }

  return (
    <div className={`modal ${modal && modal.about}`}>
      <div className="modal-box relative">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-4 top-4" onClick={handleClose}>✕</label>
        <h3 className="font-bold text-xl flex">
          <span className="ml-1 text-2xl mb-4">
            About Hold&apos;em Hands
          </span>
        </h3>
        <div>
          <p className="pb-3">
            This is a tool for studying Texas Hold&apos;em starting hands inspired by <a className="link text-sky-500" href="https://en.wikipedia.org/wiki/Texas_hold_%27em_starting_hands" rel="noopener noreferrer" target="_blank">this Wikipedia entry</a>.
          </p>
          <p className="pb-3">
            Each hand is scored on this table:
          </p>
          <Image
            src="/table1.png"
            width={400}
            height={360}
          />
          <p className="pt-3">
            Hit me up and let me know your thoughts on this one! <a className="link text-sky-500" href="https://twitter.com/SeanPlusPlus" rel="noopener noreferrer" target="_blank">@SeanPlusPlus</a>
          </p>
        </div>
        <div className="modal-action pt-5">
          <label htmlFor="my-modal" className="btn" onClick={handleClose}>Close</label>
        </div>
      </div>
    </div>
  )
}

export default About