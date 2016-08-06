import React from 'react'
import ACTIONS from '../actions'
import CAMPAIGN_STORE from '../store'

import Header from './header'

import ListingsView from './common/listingsView'


const HomeView = React.createClass({

    getInitialState: function(){

      return CAMPAIGN_STORE.getData()

    },



    componentWillMount: function(){

        ACTIONS.fetchCampaigns()

        CAMPAIGN_STORE.on('updateContent', ()=> this.setState(CAMPAIGN_STORE.getData()
        ))

    },

    componentWillUnmount: function(){
       CAMPAIGN_STORE.off('updateContent')
    },


    render: function(){
        return(
            <div className="container-full homeView">
                <Header />
                <ListingsView campaignColl={this.state.collection} />
            </div>

            )
    }


})


export default HomeView