import React from 'react'
import ACTIONS from '../actions'
import CAMPAIGN_STORE from '../store'

import Header from './header'

import ListingsView from './common/listingsView'
import {User} from '../models/models'

const DetailView = React.createClass({

    getInitialState: function(){

      return CAMPAIGN_STORE.getData()

    },



    componentWillMount: function(){

        ACTIONS.fetchSingleCampaign( this.props.campaign_id)

        CAMPAIGN_STORE.on('updateContent', ()=> this.setState(CAMPAIGN_STORE.getData()
        ))

    },

    componentWillUnmount: function(){
        CAMPAIGN_STORE.off('updateContent')
     },


     _handlePledge: function(evt){
        evt.preventDefault()
        console.log(evt.currentTarget.amount.value)

       ACTIONS.addBacker(this.state.model,{
                backerId: User.getCurrentUser()._id,
                shareValue: evt.currentTarget.amount.value
        })

         //   {backers.shareValue: evt.currentTarget.amount.value}


     },



    render: function(){

//        console.log(this.state.model.attributes.backers.length)
        console.log(this.state.model.get('length'))
        if (!this.state.model.attributes.backers) {
            return <div>loading...</div>
        }


        if (this.state.model.attributes.backers.length){
        var backersSize = this.state.model.attributes.backers.length

        var valore = this.state.model.get('value')
        var totalPledged = 0
        console.log(this.state.model.get('backers')[0].shareValue)

        for (var i = 0; i < backersSize; i++){
            console.log( this.state.model.get('backers')[i].shareValue )
            totalPledged += this.state.model.get('backers')[i].shareValue
        }

        var percent = totalPledged/valore * 100
    }
        return(
            <div className="homeView">
                <Header />
                <h2>{this.state.model.get('title')}</h2>
                <h4>{this.state.model.get('zipcode')}</h4>
                <h4>{this.state.model.get('value')}</h4>
                <h4>pledged till now {percent}%</h4>
                <div className="campaignPledgingForm container">
                    <form onSubmit={this._handlePledge} >

                        <div className="form-group">
                            <input className="form-control" type="text" name="amount" placeholder="Enter pledging amount"/>
                        </div>

                        <button className="btn btn-default" type="submit" > PLEDGE </button>

                    </form>
            </div>
            </div>

            )
    }


})


export default DetailView