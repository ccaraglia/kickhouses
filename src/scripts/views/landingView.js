import React from 'react'

const LandingView = React.createClass({
    render: function(){
        return(
            <div>
            <HeroView />
            <FeaturesSection />
            </div>
            )
    }


})

const HeroView = React.createClass({

    render: function(){
        return(

            <div className='with-bg-size'>

                <header className="hero with-bg-size">


                    <div className="container-narrow landingStyle">

                        <h1 className="title">KICKHouses.</h1>

                            <button className="btn startButton"><a id="hyperlink1" href="#login"> Get Started </a></button>



                    </div>

                </header>

            </div>

            )

    }


})


const FeaturesSection = React.createClass({
   render: function(){
     return(
       <div className="container-full features-list">
         <div className="container-narrow">

           <h2>KICKHouses.  Cheaper than owning.  Cheaper than renting.</h2>

           <div className="grid-container">

             <div className="sm-12-x-12 md-4-x-12 feature">
                <i className="fa fa-bullhorn fa-5x" aria-hidden="true"></i>
                <h3>Create a campaign</h3>
             </div>

             <div className="sm-12-x-12 md-4-x-12 feature">

                <i className="fa fa-money fa-5x" aria-hidden="true"></i>
                <h3>Finance your home with private equity</h3>
             </div>

             <div className="sm-12-x-12 md-4-x-12 feature">

               <i className="fa fa-arrow-down fa-5x" aria-hidden="true"></i>
               <h3>Reduce monthly expenses</h3>
             </div>

           </div>
        </div>
    </div>
)}

})




export default LandingView