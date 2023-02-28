import PropTypes from 'prop-types'

function Card({children, reverse}) {
  return (
    // vvv Check if card component should be reversed using class vvv
    // <div className={`card ${reverse && 'reverse'}`}>
    //     {children}
    // </div>
   
//  vvv  Alternatively use styling logic to not needing css-styling vvv
    <div className="card" style={{
      backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
      color: reverse ? '#fff' : '#000'
    }}>
        {children}
    </div>
  )
}

Card.defaultProps = {
  reverse: false
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool.isRequired
}

export default Card