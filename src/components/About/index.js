// Write your code here
import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutContainer = isDarkTheme
        ? 'About-container-dark'
        : 'About-container-light'

      const aboutImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const textCss = isDarkTheme ? 'About-heading-dark' : 'About-heading-light'
      return (
        <>
          <Navbar />
          <div className={aboutContainer}>
            <img src={aboutImg} alt="about" />
            <h1 className={textCss}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
