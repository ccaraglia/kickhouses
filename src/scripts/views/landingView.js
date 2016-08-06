import React from 'react'

const LandingView = React.createClass({

    render: function(){
        return(

            <div className='with-bg-size'>

                <header className="hero with-bg-size">


                    <div className="container-narrow landingStyle">

                        <h1 className="title"><img id="landingLogo" src="../images/KICKHousesLogo.png"/> </h1>

                            <h3 className="subtitle"><img src="../images/KICKHousesLogo.png"/>Cheaper than owning.  Cheaper than renting.</h3>

                            <button className="btn">Get Started</button>



                    </div>

                </header>

            </div>

            )

    }


})


export default LandingView