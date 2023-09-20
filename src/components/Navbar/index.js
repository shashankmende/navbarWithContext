// Write your code here
import './index.css'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickThemeBtn = () => {
        toggleTheme()
      }

      const themeContainer = isDarkTheme
        ? 'navbar-dark-container'
        : 'navbar-light-container'

      const themeWebsiteImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const listItems = isDarkTheme ? 'link-item' : 'link-item-light'

      return (
        <div className={`${themeContainer}`}>
          <ul className="nav-items-container">
            <li className="list-items">
              <img
                src={themeWebsiteImage}
                alt="website logo"
                className="webiste-logo"
              />
            </li>
            <div className="home-about-container">
              <Link to="/" className="link-item">
                {' '}
                <li className={listItems}>Home</li>
              </Link>
              <Link to="/about" className="link-item">
                {' '}
                <li className={listItems}>About</li>
              </Link>
            </div>
            <li className="list-items">
              <button
                type="button"
                data-testid="theme"
                className="dark-btn"
                onClick={onClickThemeBtn}
              >
                <img src={themeImage} alt="theme" className="webiste-logo" />
              </button>
            </li>
          </ul>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
