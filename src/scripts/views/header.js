import React from 'react'
import ACTIONS from '../actions'


const Header = React.createClass({

    render: function(){

        return(

                <div id="header">

                    <a href="#campaigns/search">Search</a>
                    <a href="#campaigns/postCampaign">New</a>
                    <a href="#campaigns/myCampaigns">My Campaigns</a>
                    <a href="#home"><img src="../images/KICKHousesLogo.png" height="30" width="100"/></a>
                    <a href="#campaigns/myPortfolio">Portfolio</a>
                    <a href="#login">Login</a>
                    <a href="#" onClick={ACTIONS.logUserOut}>Logout</a>

                </div>

            )
    }



})


export default Header