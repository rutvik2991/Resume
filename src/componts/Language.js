import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import './Style.css';

export const Language = () => {
    useEffect(() => {
        Aos.init({duration:3000});
      }, []);
    return (
        <div>
        <div className="tag">
        <h1 data-aos="fade-up" >Languages That I know</h1>
        </div>
        <div  className='vartic'>
            
            <a data-aos="fade-up" href="https://www.w3schools.com/html/html_intro.asp"><ion-icon name="logo-html5"></ion-icon></a>
            <a data-aos="fade-up" href="https://www.w3schools.com/css/css_intro.asp"><ion-icon name="logo-css3"></ion-icon></a>
            <a data-aos="fade-up" href="https://www.w3schools.com/js/"><ion-icon name="logo-javascript"></ion-icon></a>
            <a data-aos="fade-up" href="https://www.w3schools.com/nodejs/"><ion-icon name="logo-nodejs"></ion-icon></a>
            <a data-aos="fade-up" href="https://www.w3schools.com/REACT/DEFAULT.ASP"><ion-icon name="logo-react">React</ion-icon></a>
            
        </div>
        <div className='tag'>
            <h1>That's me<ion-icon name="happy-outline"></ion-icon></h1>
        </div>
        </div>
        
    )
}
