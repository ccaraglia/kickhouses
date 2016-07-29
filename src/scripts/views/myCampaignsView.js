import React from 'react'
import ACTIONS from '../actions'
import CAMPAIGN_STORE from '../store'

import Header from './header'

import ListingsView from './common/listingsView'
import {User} from '../models/models'

const MyCampaignView = React.createClass({

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
        let myColl = this.state.collection.where({authorId: User.getCurrentUser()._id})
        return(
            <div className="homeView">
                <Header />
                <ListingsView campaignColl={myColl} />
            </div>

            )
    }


})


export default MyCampaignView