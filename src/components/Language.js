import React from 'react'
export const Language = () => {
    return (
        <>
        <div className='tag'>
            <h1>
                Language That I Know...
            </h1>
        </div>
        <div className='lug'>
            <a href='https://www.w3schools.com/html/html_intro.asp' className="llogo">
                <ion-icon name="logo-html5"></ion-icon>
                <div className='ltext'>
                    <h2>HTML</h2>
                </div>
            </a>
            <a href='https://www.w3schools.com/w3css/defaulT.asp' className="llogo" >
                <ion-icon name="logo-css3"></ion-icon>
                <div className="ltext">
                    <h2>CSS</h2>
                </div>
            </a>
            <a href='https://www.w3schools.com/js/js_intro.asp' className="llogo">
                <ion-icon name="logo-javascript"></ion-icon>
                <div className="ltext">
                    <h2>Javascript</h2>
                </div>
            </a>
            <a href='https://www.w3schools.com/nodejs/nodejs_intro.asp' className="llogo">
                <ion-icon name="logo-nodejs"></ion-icon>
                <div className="ltext">
                    <h2>Node.js</h2>
                </div>
            </a>
            <a href='https://www.w3schools.com/REACT/DEFAULT.ASP' className="llogo">
                <ion-icon name="logo-react"></ion-icon>
                <div className="ltext">
                    <h2>React.js</h2>
                </div>
            </a>
        

        </div>
        </>
    )
}
