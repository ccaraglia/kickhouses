import React from 'react'
import ACTIONS from '../actions'

var flipNavEl = document.querySelector('.flip-nav')

        // var searchEl = document.querySelector('.show-search')


        // var hamburgerEl = document.querySelector('.hamburger-menu')

  /*      searchEl.addEventListener("click", function(){flipNavEl.className="flip-nav view-2"
        })

        hamburgerEl.addEventListener("click", function(){
                flipNavEl.className="flip-nav view-1"
        })

    */
const Header = React.createClass({

searchEl: function(){
this.refs.flipNav.className = "flip-nav view-2"

},

hamburgerEl: function(){
this.refs.flipNav.className = "flip-nav view-1"
},

handleSearch: function(evt){
    if (evt.keyCode === 13){
             console.log(evt.target.value)

             let searchQuery = {
                 zipcode: evt.target.value
             }

             ACTIONS.fetchCampaigns(searchQuery)
             evt.target.value = ''
             console.log(this.state.collection)


    }
},

    render: function(){
        if (this.props.currentView === "search") {
            this.searchEl()
        }


        return(

                <div id="header">

                   <div ref="flipNav" className="flip-nav view-1">
                    <div className="search-bar">
                        <div onClick={this.hamburgerEl} className="hamburger-menu">
                            <i className="fa fa-bars fa-2x"></i>
                        </div>
                            <i className="fa fa-search"></i>
                            <input onKeyDown={this.handleSearch} type="text" />
                    </div>
            <nav>

            <ul>

                <li onClick={this.searchEl} onKeyDown={this.handleSearch} className="show-search"><i className="fa fa-search"></i></li>
                <li> <a href="#campaigns/postCampaign">New</a></li>
                <li><a href="#campaigns/myCampaigns">My Campaigns</a></li>
                <li><a href="#home"><img src="../images/KICKHousesLogo.png" width="150"/></a></li>
                <li><a href="#campaigns/myPortfolio">Portfolio</a></li>
                <li><a href="#login">Login</a></li>
                <li><a href="#" onClick={ACTIONS.logUserOut}>Logout</a></li>

            </ul>

            </nav>
</div>
</div>



            )
    }



})


export default Header