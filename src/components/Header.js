import React from 'react'
import './style.css'
export default function Header() {
    return (

        <div className='container'>
            <div className="nav">
                <a href='Header.js'><img className='logo' src={require('./image/rutvik.png').default} alt="not now" /></a>
                <ul>
                    <li>
                        <a href="https://rutvik2991.github.io/Resume/">Home</a>
                    </li>
                    <li>
                        <a href="https://rutvik2991.github.io/Resume/">Project</a>
                    </li>
                    <li>
                        <a href="https://rutvik2991.github.io/Resume/">about me</a>
                    </li>
                </ul>
            </div>
            <div className='info'>
                <div className='data'>
                    <h1>I'm Rutvik Haripara</h1>
                    <h2>Web-devloper</h2>
                    <p>Hi.. I have Skill Web-Devlopment.Like HTML,CSS,Javascript This is the basic skill I have. And I had done many of the project which is based on web-devlopment tools.two to 3 project which is based on live camera detaction or we said like object detaction that is other platfrom all the deatail showen Below.... </p>
                </div>
                <div className="informativeimages">
                    <img className='sideone' src={require('./image/side.png').default} alt="" />
                </div>
            </div>

        </div>
    )
}