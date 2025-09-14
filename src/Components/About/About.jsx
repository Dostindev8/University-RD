import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about' />
        <img src={play_icon} alt="" className='play-icon' onClick={() => { setPlayState(true) }} />
      </div>
      <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <br />
        <h2 className='typewriter'>Feeding great minds</h2>
        <p>With a focus on innovation, hands-on learing, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaninful impact in classrooms, shools, and comunities.</p>
        <p>Whether you aspire to become a teacher, administrator,
          counselor, or educational leader, our diverse range of programs
          offers the perfect pathway to achieve your goals and unlock your
          full potencial in shaping the future of education.</p>
      </div>
    </div>
  )
}

export default About
