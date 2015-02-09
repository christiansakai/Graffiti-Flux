var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher.js');

var AppActions = {
    getIdentities:function(user){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.GET_IDENTITIES,
            user:user
        })
    },
    changeIdentity: function(identity){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.CHANGE_IDENTITY,
            identity:identity
        })
    },
    initializePage:function(default_identity){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.INITIALIZE_PAGE,
            default_identity:default_identity
        })
    },
    getPage:function(page){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.GET_PAGE,
            page:page
        })
    },
    loadSprays: function(sprays){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.LOAD_SPRAYS,
            sprays:sprays
        })
    }
};

module.exports = AppActions;
