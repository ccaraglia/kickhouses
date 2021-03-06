import React from 'react'
import ACTIONS from '../actions'
import CAMPAIGN_STORE from '../store'

import Header from './header'

import ListingsView from './common/listingsView'
import {User} from '../models/models'


const MyPortfolioView = React.createClass({

    getInitialState: function(){

      return CAMPAIGN_STORE.getData()

    },



    componentWillMount: function(){
        //  ,,,,(2),,,,TH
        ACTIONS.fetchUserCampaigns(User.getCurrentUser()._id)

        CAMPAIGN_STORE.on('updateContent', ()=> this.setState(CAMPAIGN_STORE.getData()
        ))

    },

     componentWillUnmount: function(){
        CAMPAIGN_STORE.off('updateContent')
     },


    render: function(){
        //  ,,,,(6),,,,CC

 //       console.log('user is', this.state.userModel)
 //       console.log('campBacked', this.state.collection.models.length)


        var size = User.getCurrentUser().campBacked.length
       // for (var i = 0; i < size; i++){
  //      console.log('size is', size)

        let myCollection = this.state.collection
        //}
        if (this.state.collection.models[0].get('backers')[0]){
        console.log('campaign here>>>>', this.state.collection.models[0].get('backers')[0].backerId)
        console.log('campaign here>>>>', this.state.collection.models[0].get('backers')[0].shareValue)
        console.log('Current user: ', User.getCurrentUser()._id)


}


        return(
            <div className="homeView">
                <Header />
                <ListingsView  showPledged = {true} campaignColl = { myCollection } />
                }
            </div>

            )
    }


})


export default MyPortfolioView