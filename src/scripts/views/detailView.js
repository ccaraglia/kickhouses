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

       ACTIONS.addBacker(this.state.model, {
                backerId: User.getCurrentUser()._id,
                shareValue: parseInt(evt.currentTarget.amount.value)
        })

         //   {backers.shareValue: evt.currentTarget.amount.value}


     },



    render: function(){

//        console.log(this.state.model.attributes.backers.length)
        console.log(this.state.model.get('length'))
        if (!this.state.model.attributes.backers) {
            return <div>loading...</div>
            var totalPledged = 0
        }


        if (this.state.model.attributes.backers.length){
        var backersSize = this.state.model.attributes.backers.length

        var valore = this.state.model.get('value')
        var totalPledged = 0


        for (var i = 0; i < backersSize; i++){
            console.log( this.state.model.get('backers')[i].shareValue )
            totalPledged += this.state.model.get('backers')[i].shareValue
        }

        var percent = parseInt(totalPledged)/parseInt(valore) * 100

        console.log(percent)


    }
    if (isNaN(percent)){percent = 0}

        return(
            <div className="container-full homeView">
                <Header />
                <div className="container-narrow">
                    <h2>{this.state.model.get('title')}</h2>
                    <h3>{this.state.model.get('subtitle')}</h3>
                    <h4>ZIPCODE: {this.state.model.get('zipcode')}</h4>
                    <h4>Wished funds: ${this.state.model.get('value')}</h4>
                    <h4>{this.state.model.get('description')}</h4>


                    <h4>Pledged funds {Math.floor(percent)}%</h4>

                    <img id="thumb" src={this.state.model.get('imageUrl')} />

                    <div className="campaignPledgingForm container">
                        <form className="form-group" onSubmit={this._handlePledge} >

                            <div className="form-field">
                                <input className="form-control" type="text" name="amount" placeholder="Enter pledging amount"/>

                            </div>

                            <div className="form-field">
                                <button className="btn btn-default" type="submit" > PLEDGE </button>
                            </div>



                        </form>
                    </div>
                </div>
            </div>

            )
    }


})


export default DetailView