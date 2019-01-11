import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"
import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import ShaneImage from '../images/ebuka-v1.png'

const IndexPage = () => (
  <Layout>
      <Helmet>           
            <link href="https://fonts.googleapis.com/css?family=Lato:700,300,400" rel="stylesheet" />       
    </Helmet>
    <SEO title="Home" keywords={[`Chiebuka`, `edwin`, `portfolio`,`gatsby`, `application`, `react`]} />
    <div className="header-content">
          <div className="header-content__content">
              <h1 className="heading-1">Product Manager, Mobile developer, Christian and a Visioneer</h1>
              <p>I love building digital products with a bias towards education and Christian tools</p>
              <Link to="/page-2/" className="button">Chat with me</Link>
          </div>
          <div className="header-content__img">
              <img src={ShaneImage} alt=""></img>
          </div>
      </div>
  </Layout>
)

export default IndexPage
