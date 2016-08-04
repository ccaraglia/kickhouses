import React from 'react'
import ACTIONS from '../actions'
import CAMPAIGN_STORE from '../store'

import Header from './header'

import ListingsView from './common/listingsView'
import {User} from '../models/models'

console.log('srchview1')
const SearchView = React.createClass({

     getInitialState: function(){

       return CAMPAIGN_STORE.getData()

     },



     componentWillMount: function(){

         ACTIONS.fetchCampaigns()

         CAMPAIGN_STORE.on('updateContent', ()=> this.setState(CAMPAIGN_STORE.getData()
         ))

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


     componentWillUnmount: function(){
         CAMPAIGN_STORE.off('updateContent')
      },


    render: function(){

        return(
            <div className="homeView">
                <Header currentView="search" />
                <ListingsView campaignColl={this.state.collection} />
            </div>

            )
    }
})

export default SearchView