import { RxPinTop } from 'react-icons/rx';

export const BtnTop = () => {
  return(
    <>
      <button
        type="button"
        className="btnTop"
        onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}
      >
        <RxPinTop />
      </button>
    </>
  )
}