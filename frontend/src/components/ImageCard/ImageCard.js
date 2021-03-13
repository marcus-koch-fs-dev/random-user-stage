import './ImageCard.scss'

// Image card, on backside of CardFlip
const ImageCard = ({ user }) => {
  const { medium } = user.picture
  const { phone } = user

  return (
    <div className='imageCard-container'>
      <img className='imageCard__img' src={medium} alt='user' />
      <p className='imageCard__p'>Phone:</p>
      <p className='imageCard__p'>{phone}</p>
    </div>
  )
}

export default ImageCard
