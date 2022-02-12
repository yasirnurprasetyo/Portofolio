import { useEffect, useRef } from 'react'
import { init } from 'ityped'
import './intro.scss'
// import React from 'react'

export default function Intro() {
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Quality Assurance", "Fullstack Engineer", "Beckend Engineer", "Frontend Engineer", "Product Manager"]
    })
  }, [])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/men.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Alex Marshall</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
        </div>
        <a href="#portofolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
