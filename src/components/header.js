import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'black',
      marginBottom: '1.45rem',
      height: 70
    }}
  >
    <div
      style={{
        margin: '15',
        maxWidth: 960,
        paddingLeft: 25,
        paddingTop: 5
      }}
    >
      <h1 style={{ margin: 0, display: 'inline-block', paddingBottom: 5 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: 20,
            fontWeight: 200,
            fontFamily: 'helvetica'
          }}
          className="headerLink"
        >
          {siteTitle}
        </Link>
      </h1>
        <Link
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: 17,
            fontWeight: 200,
            fontFamily: 'helvetica',
            marginLeft: 30
          }}
          to="/essays"
          className="headerLink"
        >
          Essays
        </Link>
        <Link
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: 17,
            fontWeight: 200,
            fontFamily: 'helvetica',
            marginLeft: 30
          }}
          to="/implementations"
          className="headerLink"
        >
           Implementations
        </Link>
        <Link
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: 17,
            fontWeight: 200,
            fontFamily: 'helvetica',
            marginLeft: 30
          }}
          to="/diagrams"
          className="headerLink"
        >
           Diagrams
        </Link>
    </div>
  </div>
)

export default Header
