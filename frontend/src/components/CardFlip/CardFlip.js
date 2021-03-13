import './CardFlip.scss'

// Flip two images vertical
const CardFlip = ({ front, back }) => {
  return (
    <div className='flip__container'>
      <div className='flip__container-inner'>
        <figure className='flip__figure'>
          {/* <img
            className='flip__img flip__img--front'
            src={front}
            alt='CardFlip'
          /> */}
          <div className='flip__img flip__img--front'>{front}</div>
        </figure>
        <figcaption className='flip__figcaption'>
          <div className='flip__img flip__img--back'>{back}</div>
          {/* <img
            className='flip__img flip__img--back'
            src={back}
            alt='CardFlip'
          /> */}
        </figcaption>
      </div>
    </div>
  )
}

export default CardFlip
