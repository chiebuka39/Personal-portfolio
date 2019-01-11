import { Link } from 'gatsby'
import React from 'react'


const Footer = () =>(
    <div className="footer">
           <div className="footer__work">
              <h3 className="heading-3">Start a project</h3>
              <p className="heading-2">I'm interested in working with you to build the next digital product</p>
              <Link to="#" className="button">Start a Project</Link>
           </div> 
           <div className="footer__elements">
              <h3 className="heading-3">Built By Chiebuka with Gatsby</h3>

           </div>  
    </div>
)

export default Footer