import React from 'react'
import Header from './header'
import ACTIONS from '../actions'
import {User} from '../models/models'
import ReactFilepicker from 'react-filepicker'



const ComposeView = React.createClass({
     render: function() {
        return (
            <div className="container-full composeView" >
                <Header />
                <div className="container-narrow">
                    <h3>Post a new campaign!!!</h3>
                    <CampaignPostingForm />
                </div>
            </div>
        )
    }
})



const CampaignPostingForm = React.createClass({



    _handleCompose: function(evt){
        evt.preventDefault()
        ACTIONS.saveCampaign({
            title: evt.currentTarget.title.value,
            subtitle: evt.currentTarget.subtitle.value,
            value: evt.currentTarget.value.value,
            zipcode: evt.currentTarget.zipcode.value,
            authorId: User.getCurrentUser()._id,
            authorEmail: User.getCurrentUser().email,
            description: evt.currentTarget.description.value,
            imageUrl: this.url ? this.url : "../images/img-not-found.png"

        })
    },

    _handleImage: function(result){
        console.log(result.url)
        this.url = result.url
    },


    render: function() {
        return (
            <div className="campaignPostingForm container">
                <form className="form-group grid-container" onSubmit={this._handleCompose} >

                    <div className="form-field sm-12-x-12 md-6-x-12">
                        <label>Campaign Name</label>

                        <input className="form-control" type="text" name="title" placeholder="Enter the campaign title"/>
                    </div>

                    <div className="form-field sm-12-x-12 md-6-x-12">
                        <label>Brief Label</label>

                        <input type="text" name="subtitle" placeholder="Enter the subtitle"/>
                    </div>

                    <div className="form-field sm-12-x-12 md-6-x-12">
                        <label>Home Value</label>
                        <input className="form-control" type="text" name="value" placeholder="Enter the value" />
                    </div>

                    <div className="form-field sm-12-x-12 md-6-x-12">
                        <label>Enter Zipcode</label>
                        <input className="form-control" type="text" name="zipcode" placeholder="ZIPCODE"/>
                    </div>

                    <div className="form-field sm-12-x-12 md-12-x-12">
                        <label>Enter Zipcode</label>

                        <textarea rows="5"className="form-control" type="text" name="description" placeholder="Enter the description"></textarea>
                    </div>


                    <div className="form-field sm-12-x-12 md-6-x-12">

                        <ReactFilepicker apikey="As5zYYoX5Rue7kPqcGGvcz" onSuccess={this._handleImage}/>
                    </div>


                    <div className="form-field sm-12-x-12 md-6-x-12">
                        <button className="btn btn-default" type="submit" >SUBMIT </button>
                    </div>



                </form>
            </div>
            )
    }
})

export default ComposeView