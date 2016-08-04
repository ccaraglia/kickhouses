import Backbone from 'backbone'
import _ from 'underscore'
import {CampaignCollection, CampaignModel, User} from './models/models'

const CAMPAIGN_STORE = _.extend(Backbone.Events, {


    data:{
        collection:  new CampaignCollection(),
        model: new CampaignModel(),
       //  ,,,,(4),,,,TH

        userModel: new User()
    },

    emitChange: function(){
        this.trigger('updateContent')
    },
//get initial state of the app
    getData: function(){
        return _.clone(this.data)
    },

     initialize: function(){
        this.data.collection.on('sync update reset', this.emitChange.bind(this))

        this.data.model.on('sync update', this.emitChange.bind(this))

        this.data.userModel.on('sync update', this.emitChange.bind(this))
    },

    set: function(key,value) {
        this.data[key] = value
        this.emitChange()
    }

})
CAMPAIGN_STORE.initialize()

export default CAMPAIGN_STORE