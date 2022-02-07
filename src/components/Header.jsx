import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../index.css'

function Header ({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
  }
  return (
    <Link to='/' style={{textDecoration:'none'}}>
      <header style={headerStyles}>
        <div className='container'>
          <h2>{text}</h2>
        </div>
      </header>
    </Link>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0, 0, 0, 0.4)',
  textColor: '#ff6a95'
}

Header.propTypes = {
	 // Prop type checking
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
}

export default Header
