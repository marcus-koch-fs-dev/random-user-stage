import './CardFlip.scss'

// Flip two images vertical
const CardFlip = ({ front, back }) => {
  return (
    <div className='flip__container'>
      <div className='flip__container-inner'>
        <figure className='flip__figure'>
          <div className='flip__img flip__img--front'>{front}</div>
        </figure>
        <figcaption className='flip__figcaption'>
          <div className='flip__img flip__img--back'>{back}</div>
        </figcaption>
      </div>
    </div>
  )
}

export default CardFlip
