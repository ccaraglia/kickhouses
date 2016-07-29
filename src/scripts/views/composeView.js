import React from 'react'
import Header from './header'
import ACTIONS from '../actions'
import {User} from '../models/models'
import ReactFilepicker from 'react-filepicker'



const ComposeView = React.createClass({
     render: function() {
        return (
            <div className="composeView" >
                <Header />
                <h3>post a bloody campaign!</h3>
                <CampaignPostingForm />
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
                <form onSubmit={this._handleCompose} >

                    <div className="form-group">
                    <input className="form-control" type="text" name="title" placeholder="Enter the campaign title"/>
                    </div>

                     <div className="form-group">
                    <textarea className="form-control" type="text" name="subtitle" placeholder="Enter the subtitle"></textarea>
                    </div>

                    <div className="form-group">
                    <textarea className="form-control" type="text" name="value" placeholder="Enter the value"></textarea>
                    </div>

                     <div className="form-group">
                    <input className="form-control" type="text" name="zipcode" placeholder="ZIPCODE"/>
                    </div>

                     <div className="form-group">
                    <textarea className="form-control" type="text" name="description" placeholder="Enter the description"></textarea>
                    </div>

                    <ReactFilepicker apikey="As5zYYoX5Rue7kPqcGGvcz" onSuccess={this._handleImage}/>


                    <button className="btn btn-default" type="submit" >SUBMIT </button>


                </form>
            </div>
            )
    }
})

export default ComposeView