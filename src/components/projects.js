import React from 'react'
import { Link } from 'gatsby';

const Projects = ({ title, content }) => (
    <div className="projects">
        <div className="projects__card">
            <h3>Wordstudy</h3>
            <p>A Mobile application that helps Christians study the bible 
                online by conecting them with their churches and friends</p>
            <Link to="www.google.com">Wordstudy</Link>
        </div>
        <div className="projects__card">
            <h3>Subnet Guru</h3>
            <p>A App that helps Network engineers calculate the subnets of their IP Adddresses</p>
            <Link to="www.google.com">Subnet Guru</Link>
        </div>
        <div className="projects__card">
            <h3>Task It</h3>
            <p>Task it helps users stay organized by setting thier to-do list and also goals</p>
            <Link to="www.google.com">Task It</Link>
            
          
        </div>
    </div>
  )
  
  export default Projects