import { v4 as uuidv4 } from 'uuid'
import './UserCard.scss'

// User Card, on front side of CardFlip, header color depend on sex
const UserCard = ({ user }) => {
  const { gender, email } = user
  const { age } = user.dob
  const { city, country } = user.location
  const { first, last } = user.name
  const { medium } = user.picture

  return (
    <div className='userCard-container'>
      <div
        className={`userCard__mask-top${
          gender === 'male' ? '__male' : '__female'
        }`}
      ></div>
      <img className='userCard__img' src={medium} alt='user' />
      <div className='userCard__divider-box'>
        <div className='userCard__divider-stroke' />
      </div>
      <ul className='userCard__ul'>
        <li>
          {first} {last}
        </li>
        <li>
          {gender}, {age} years
        </li>
        <>
          {email
            .replace('@', '%@')
            .split('%')
            .map((e) => {
              return <li key={uuidv4()}>{e}</li>
            })}
        </>
        <li>
          {city}, {country}
        </li>
      </ul>
    </div>
  )
}

export default UserCard
