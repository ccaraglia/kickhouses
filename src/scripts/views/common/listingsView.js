import React from 'react'
import {User} from '../../models/models'


const ListingsView = React.createClass({

    _showListingJSX: function(campaignColl){

        let campaignModelsArray = campaignColl.map((model)=> <SingleListingView  showPledged={this.props.showPledged} campaignModel={model} />)

        return campaignModelsArray


    },


    render: function(){
        console.log(this.props.campaignColl)
        return(
            <div className="container-narrow listingsView">

                {this._showListingJSX( this.props.campaignColl  )}

            </div>

            )
    }



})


const SingleListingView = React.createClass({

    _checkForPledgedAmt: function(pledgedByYou){
        if (!pledgedByYou) return ''

        return <span> *** You pledged  <i className="fa fa-usd"></i>
        {
            pledgedByYou && pledgedByYou.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
        }  ({Math.floor(pledgedByYou/this.props.campaignModel.get('value')*100)}%)
        </span>
    },

    render: function(){
        console.log(this.props.campaignModel)
        var pledgedByYou = null

        if (this.props.showPledged) {

            pledgedByYou = 0;

            for (var i = 0; i < this.props.campaignModel.get('backers').length; i++){

                if (this.props.campaignModel.get('backers')[i].backerId === User.getCurrentUser()._id){

                    pledgedByYou += this.props.campaignModel.get('backers')[i].shareValue
                }

            }

        }




        return(
            <div>

                <div id="colLeft">
                    <img id="thumbnail" src={this.props.campaignModel.get('imageUrl')} />
                </div>

                <div id="colRight">
                <a id='textListing' href={`#campaigns/detail/${this.props.campaignModel.id}`} className='campaign'>
                <h2>{this.props.campaignModel.get('title')}</h2>
                <h4><i className="fa fa-usd"></i>
                    {
                        this.props.campaignModel.get('value').toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
                    }

                    { this._checkForPledgedAmt(pledgedByYou) }
                </h4>
                </a>
            {/*}    { pledgedByYou === null ? '' : <h6> {pledgedByYou} </h6> }*/}
                </div>

            </div>
            )

    }



})
/*$


*/

export default ListingsView