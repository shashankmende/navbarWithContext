// Write your code here
import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgContainer = isDarkTheme
        ? 'not-found-container-dark'
        : 'not-found-container-light'

      const textCss = isDarkTheme
        ? 'not-found-heading'
        : 'not-found-heading-light'

      return (
        <>
          <Navbar />
          <div className={bgContainer}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-img"
            />
            <h1 className={textCss}>Lost Your Way?</h1>
            <p className={textCss}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
