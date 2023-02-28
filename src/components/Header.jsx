import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor}) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
        
        // backgroundColor: '#272932',
        // color: '#35495E'
    }

  return (
    <header style={ headerStyles }>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

// Using defaultProps when no props (text) is sent
Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.6)',
  textColor: '#41b883',
};

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header;
