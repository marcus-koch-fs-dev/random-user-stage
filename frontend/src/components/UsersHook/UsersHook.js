import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../Loader/Loader'
import Scroll from '../Scroll/Scroll'
import DropDown from '../UI/Dropdown/DropDown'
import CardFlip from '../CardFlip/CardFlip'
import UserCard from '../UserCard/UserCard'
import ImageCard from '../ImageCard/ImageCard'
import './UsersHooks.scss'

// Receive & display list of user
const UsersHook = (props) => {
  const amount = 5
  const URL = 'https://randomuser.me/api/?&results=50'
  const [data, setData] = useState({ results: [] })
  const [visible, setVisible] = useState(amount)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(URL)
      setData(result.data)
    }
    fetchData()
  }, [])

  // User interactions to change arrangement of data
  // onClick load more users
  const handleLoadMoreUsers = () => {
    setVisible(visible + 5)
  }

  // onClick reduce users
  const handleReduceUsers = () => {
    const difference = visible - amount
    setVisible(difference >= 0 ? difference : visible)
  }

  // onClick sort by age ascend
  const sortByAgeAsc = () => {
    setData({ results: data.results.sort((a, b) => a.dob.age - b.dob.age) })
  }

  // onClick sort by age descend
  const sortByAgeDesc = () => {
    setData({ results: data.results.sort((a, b) => b.dob.age - a.dob.age) })
  }

  // onClick sort male first
  const sortBySexAsc = () => {
    setData({
      results: data.results.sort((a, b) =>
        b.gender < a.gender ? -1 : b.gender > a.gender ? 1 : 0
      ),
    })
  }

  // onClick sort female first
  const sortBySexDesc = () => {
    setData({
      results: data.results.sort((a, b) =>
        a.gender < b.gender ? -1 : a.gender > b.gender ? 1 : 0
      ),
    })
  }

  return (
    <>
      {/* User interaction control elements */}
      <ul className='userControl__list'>
        <li className='userControl__item'>
          <button className='userControl__btn' onClick={handleLoadMoreUsers}>
            Load more
          </button>
        </li>
        <li className='userControl__item'>
          <button className='userControl__btn' onClick={handleReduceUsers}>
            Reduce some
          </button>
        </li>
        <li className='userControl__item'>
          <DropDown title='Sort by'>
            <ul className='dropdown__list'>
              <li className='dropdown__item' onClick={sortByAgeAsc}>
                Age asc
              </li>
              <li className='dropdown__item' onClick={sortByAgeDesc}>
                Age desc
              </li>
              <li className='dropdown__item' onClick={sortBySexAsc}>
                Male first
              </li>
              <li className='dropdown__item' onClick={sortBySexDesc}>
                Female first
              </li>
            </ul>
          </DropDown>
        </li>
      </ul>

      {/* Render user list */}
      <div className='userList'>
        {/* User list is wrapped by scroll container */}
        <Scroll>
          {data ? (
            <div className='userList__box'>
              <ul className='userList__list'>
                {data.results.slice(0, visible).map((user) => {
                  const { uuid } = user.login
                  return (
                    <li className='userList__item' key={uuid}>
                      {/* On hover, rotate the card to backside */}
                      <CardFlip
                        front={<UserCard user={user} />}
                        back={<ImageCard user={user} />}
                      ></CardFlip>
                    </li>
                  )
                })}
              </ul>
            </div>
          ) : (
            <div className='userList__loader'>
              <Loader />
            </div>
          )}
        </Scroll>
      </div>
    </>
  )
}

export default UsersHook
