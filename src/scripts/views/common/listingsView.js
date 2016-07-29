import React from 'react'


const ListingsView = React.createClass({

    _showListingJSX: function(campaignColl){

        let campaignModelsArray = campaignColl.map((model)=> <SingleListingView campaignModel={model} />)

        return campaignModelsArray


    },


    render: function(){
        console.log(this.props.campaignColl)
        return(
            <div className="listingsView">

                {this._showListingJSX( this.props.campaignColl  )}

            </div>

            )
    }



})


const SingleListingView = React.createClass({

    render: function(){


        return(
            <a href={`#campaigns/detail/${this.props.campaignModel.id}`} className='campaign'>
            <h2>campaign title {this.props.campaignModel.get('title')}</h2>
            </a>
            )

    }



})


export default ListingsView