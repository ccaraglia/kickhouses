import React from 'react'


const ListingsView = React.createClass({

    _showListingJSX: function(campaignColl){

        let campaignModelsArray = campaignColl.map((model)=> <SingleListingView campaignModel={model} />)

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

    render: function(){


        return(
            <div>

            <div id="colLeft">
            <img id="thumbnail" src={this.props.campaignModel.get('imageUrl')} />
            </div>

            <div id="colRight">
            <a id='textListing' href={`#campaigns/detail/${this.props.campaignModel.id}`} className='campaign'>
            <h2>{this.props.campaignModel.get('title')}</h2>
            <h4><i className="fa fa-usd"></i> {this.props.campaignModel.get('value').toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</h4>
            </a>
            </div>

            </div>
            )

    }



})


export default ListingsView