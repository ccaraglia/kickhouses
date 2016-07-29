import {User, CampaignModel, CampaignCollection} from './models/models'
import CAMPAIGN_STORE from './store'


const ACTIONS = {

    //WE WANT TO LOG THE USER IN IMMEDIATELY AFTER THEY REGISTER (AS LONG AS THEY REGISTER SUCCESFULLY) THE FIRST METHOD REGISTERS AND THE SECOND LOGS THEM IN
    //.then takes two callback functions, both of these methods use that to create either a 'success' function or a 'failure' function
    registerUser: function(userObj) { //input name doesn't actually matter, we just named it the same as the object that is getting passsed in for our own peace of mind
        User.register(userObj).then( () => ACTIONS.logUserIn(userObj.email, userObj.password),
            (error) => {
                alert('FAILURE TO REGISTER')
                console.log(error)
            }
        )

    },

    logUserIn: function(email, password) {
        User.login(email, password).then(
            (responseData) => {
                alert(`user ${email} logged in!`)
                console.log(responseData)
                location.hash = 'home' //want the page to re-route to the home page after successfull login
            },
            (error) => {
                alert('FAILURE LOGGING IN')
                console.log(error)
            }
        )
    },

    logUserOut: function() { // we want the page to reroute to the login page after a user has logged out (server keeps track os user being logged in with a 'session')
        User.logout().then(
            () => location.hash = 'login'
        )
    },

    addBackerToCampaign: function(campaignObj,backerObj) {
        campaignObj.get('backers').push(backerObj)
        campaignObj.save()
    },

    addCampaignToUser: function(campaignId)
    {
        var usr = User.getCurrentUser()
        var array = usr.campBacked.push(campaignId)
        console.log(usr.campBacked)
        usr.campBacked.push(campaignId)
        console.log(usr)
        var usrMod = new User(usr)
       usrMod.save().then(function(resp) {
        console.log(resp)
       })
    },

    addBacker: function(campaignObj,backerObj) {
        this.addBackerToCampaign(campaignObj,backerObj)
        this.addCampaignToUser(campaignObj.id)

    },

saveCampaign: function(campaignObj){
        var campaign = new CampaignModel(campaignObj)
        campaign.save().then(
            (responseData)=>{
                alert("Thanks for submitting!!!")
                location.hash='home'
                console.log(responseData)
            },
            (error)=>{
                alert('FAILURE')
                console.log(error)
            }
        )

    },

    fetchSingleCampaign: function(id){

        CAMPAIGN_STORE.data.model.set({
            _id:id
        })

        console.log(CAMPAIGN_STORE.data.model)
        CAMPAIGN_STORE.data.model.fetch()
    },

    fetchCampaigns: function(queryObj){
        let searchObj = typeof queryObj === 'object' ? queryObj : {}

        CAMPAIGN_STORE.data.collection.fetch({

            data: searchObj
        })
    },
    //  ,,,,(3),,,,TH
    fetchUserCampaigns: function(uid){
        CAMPAIGN_STORE.data.userModel.set({
            _id:uid
        })


        CAMPAIGN_STORE.data.userModel.fetch().then( ()=> {
            //  ,,,,(5),,,,CC
            CAMPAIGN_STORE.data.collection.reset(CAMPAIGN_STORE.data.userModel.get('campBacked'))
            console.log('expanded user data')
        })
    }

}









export default ACTIONS