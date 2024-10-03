import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import { contact } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const toggleNavList = () => setShowNavList(!showNavList)

  const handleContactClick = (event) => {
    event.preventDefault()
    if (location.pathname === '/') {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate('/', { state: { scrollTo: 'contact' } })
    }
    toggleNavList()
  }

  return (
    <nav className='center nav'>
      <ul className={`nav__list ${showNavList ? 'nav__list--active' : ''}`}>
        <li className='nav__list-item'>
          <Link to="/" onClick={toggleNavList} className='link link--nav'>
            Home
          </Link>
        </li>
        
        <li className='nav__list-item'>
          <Link to="/about" onClick={toggleNavList} className='link link--nav'>
            About
          </Link>
        </li>

        <li className='nav__list-item'>
          <Link to="/experience" onClick={toggleNavList} className='link link--nav'>
           Experience
          </Link>
        </li>

        {contact.email && (
          <li className='nav__list-item'>
            <a
              href="#contact"
              onClick={handleContactClick}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        )}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
