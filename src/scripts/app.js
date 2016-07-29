import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import LoginView from './views/loginView'
import ComposeView from './views/ComposeView'
import HomeView from './views/homeView'
import MyCampaignView from './views/myCampaignsView'
import SearchView from './views/searchView'
import DetailView from './views/detailView'
import MyPortfolioView from './views/myPortfolioView'


const app = function() {


var AppRouter = Backbone.Router.extend ({
        routes: {
            'home': 'goHome',   //VIEWALL
            'campaigns/search': 'handleSearch',
            'campaigns/detail/:id' : 'handleDetail',
            'campaigns/postCampaign': 'handleCampaignPost',
            'campaigns/myPortfolio': 'handleMyPortfolio',    //campaigns backed by me
            'campaigns/myCampaigns': 'handleMyCampaigns',  //campaigns I wrote
            'login': 'handleLogin',
            '*catchall': 'redirectHome'
        },


    goHome: function(){

        ReactDOM.render(<HomeView />, document.querySelector('.container'))
    },

    handleSearch: function(){
      console.log('search suspended')
      //  ReactDOM.render(<SearchView />, document.querySelector('.container'))
    },

    handleDetail: function(campaign_id){
        ReactDOM.render(<DetailView campaign_id = {campaign_id} />, document.querySelector('.container'))
    },

    handleCampaignPost: function(){
        ReactDOM.render(<ComposeView />, document.querySelector('.container'))
    },

    handleMyPortfolio: function(){
        ReactDOM.render(<MyPortfolioView />, document.querySelector('.container'))
    },

    handleMyCampaigns: function(){
      ReactDOM.render(<MyCampaignView />, document.querySelector('.container'))
    },

    handleLogin: function(){
        ReactDOM.render(<LoginView />, document.querySelector('.container'))
    },

    redirectHome: function() {
        location.hash = 'home'
    },

    initialize: function() { //good way to add logic to check if a user is logged in to protect certain routes
        Backbone.history.start()
    }

})

new AppRouter()

}
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE.
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..