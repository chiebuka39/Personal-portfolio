import React from 'react'
import Designer from '../images/icon-designer.svg'
import Frontend from '../images/icon-frontend.svg'
import Mentor from '../images/icon-mentor.svg'

const Skills = () => (
    <div className="skills">
        <div className="designer">
            <img src={Designer} alt="Product Designer"></img>
            <h3 className="role">Product Manager/Designer</h3>
            
            <p>I love the entire life-cycle of designing and 
                building products that would fufil both user needs and business needs</p>
            <h3 className="comfort">Things i'm comfortable at</h3>
            <li>Writing vision statements</li>
            <li>Designing Product roadmap</li>
            <li>Problem solving</li>
            <li>Figma and Adobe XD</li>
            <li>Product strategy</li>
            <li>User research</li>
            <li>Customer development</li>
            
        </div>
        <div className="designer">
            <img src={Mentor} alt="Product Designer"></img>
            <h3 className="role">Mobile developer</h3>
        
            <p>I love the entire life-cycle of designing and 
                building products that would fufil both user needs and business needs</p>
            <h3 className="comfort">Things i'm comfortable at</h3>
            <li>Android Development</li>
            <li>Kotlin Language</li>
            <li>Java Language</li>
            <li>Android Architecture components</li>
            <li>Material Design</li>
        </div>
        <div className="designer">
            <img src={Frontend} alt="Product Designer"></img>
            <h3 className="role">Front End Web Developer</h3>
        
            <p>I love the entire life-cycle of designing and 
                building products that would fufil both user needs and business needs</p>
            <h3 className="comfort">Things i'm comfortable at</h3>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Vue</li>
        </div>
    </div>
  )
  
  export default Skills