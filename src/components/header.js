import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div className="header-links">
      <h1>Chiebuka Edwin</h1>
      <div className="header-links__actions">
        <Link to="#" className="header-links__action">Projects</Link>
        <Link to="#" className="header-links__action">Skills</Link>
        <Link to="#" className="header-links__action">Blog</Link>
      </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
