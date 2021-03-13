import { BiDownArrow } from 'react-icons/bi'
import './DropDown.scss'

function DropDown({ title, children }) {
  return (
    <div className='dropdown'>
      <button className='dropdown__btn'>
        {title}
        <BiDownArrow className='dropdown__icon' />
      </button>
      {/* Need insert a list of items */}
      <div className='dropdown__children'>{children}</div>
    </div>
  )
}

export default DropDown
