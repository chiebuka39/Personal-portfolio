import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
// import Image from '../components/image'


import '../scss/style.scss'
import Header from './header'
import Footer from './footer'
import Introduction from './introduction'
import Skills from './skills'
import Projects from './projects'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        
        <div className="container"
        >
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
        </div>
        <Introduction title="Hello, i'm Chiebuka Edwin"
         content ="My journey into tech started 3 years ago, since then i have built mobile apps, 
            websites and also worked as a network engineer. 
            I actually have a long way to go bit i'm more focused on bring great products into life now." />
        <Skills /> 
        <Introduction title="My Projects"
         content ="I have built lots of personal projects and also led two teams to hackathon victory previously, 
         here are some of my past and present project" />
         <Projects />
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
