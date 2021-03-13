import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import UsersHook from '../../components/UsersHook/UsersHook'
import ParticlesCanvas from '../../components/ParticlesCanvas'
import './Home.scss'

// Landing page
const Home = () => {
  return (
    <div className='homePage'>
      <div className='homePage__header'>
        <Header />
      </div>
      <div className='homePage__particles'>
        <div className='homePage__user'>
          <UsersHook />
        </div>
        <ParticlesCanvas />
      </div>
      <div className='homePage__footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Home
