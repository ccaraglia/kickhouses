import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import LoginView from './views/loginView'
import ComposeView from './views/composeView'
import HomeView from './views/homeView'
import MyCampaignView from './views/myCampaignsView'
//import SearchView from './views/searchView'
import DetailView from './views/detailView'
import MyPortfolioView from './views/myPortfolioView'
import {User} from './models/models'
import LandingView from './views/landingView'


const app = function() {

let protectedRoutes = [
            'campaigns'
        ]

var AppRouter = Backbone.Router.extend ({
        routes: {
            'home': 'goHome',   //VIEWALL
            'landing': 'handleLanding',
            'campaigns/detail/:id' : 'handleDetail',
            'campaigns/postCampaign': 'handleCampaignPost',
            'campaigns/myPortfolio': 'handleMyPortfolio',    //campaigns backed by me
            'campaigns/myCampaigns': 'handleMyCampaigns',  //campaigns I wrote
            'login': 'handleLogin',
            '*catchall': 'redirectLanding'
        },


    goHome: function(){

        ReactDOM.render(<HomeView />, document.querySelector('.container'))
    },

    handleLanding: function(){
      console.log('landing page')
         ReactDOM.render(<LandingView />, document.querySelector('.container'))
    },

    handleDetail: function(campaign_id){
        ReactDOM.render(<DetailView campaign_id = {campaign_id} />, document.querySelector('.container'))
    },

    handleCampaignPost: function(){
        if(!this._userIsAuthenticated(User)) {return location.hash = 'login'}

        ReactDOM.render(<ComposeView />, document.querySelector('.container'))
    },

    handleMyPortfolio: function(){
        if(!this._userIsAuthenticated(User)) {return location.hash = 'login'}

       ReactDOM.render(<MyPortfolioView />, document.querySelector('.container'))
    },

    handleMyCampaigns: function(){
        console.log('zhy')
        if(!this._userIsAuthenticated(User)) {return location.hash = 'login'}

        ReactDOM.render(<MyCampaignView />, document.querySelector('.container'))

    },

    handleLogin: function(){
        ReactDOM.render(<LoginView />, document.querySelector('.container'))
    },

    redirectLanding: function() {
        location.hash = 'landing'
    },

    initialize: function() { //good way to add logic to check if a user is logged in to protect certain routes
        let protectedRoutes = [
            'campaigns'
        ]


        this.on('route', (routeHandler) => {
            console.log('user rerouting')
        })

        Backbone.history.start()
    },

    _userIsAuthenticated(Usr){
        console.log(Usr.getCurrentUser())
        return !Usr.getCurrentUser() || Usr.getCurrentUser() === 'null' ? false : true;
    },




})



new AppRouter()

}
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE.
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..