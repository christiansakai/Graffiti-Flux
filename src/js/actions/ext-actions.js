var AppActions = require('./app-actions');

function sendMessage (payload) {
    chrome.runtime.sendMessage(payload);
}

var ExtActions = {
    getIdentities:function(){
        sendMessage({
            action:'getIdentities'
        })
    },
    getPage:function(url,organization){
        console.log('GETTING PAGE STATE',arguments);
        sendMessage({
            action:'getPage',
            endpoint: 'Page',
            method:'GET',
            args:{
                page:url
            }
        })
    }
};

chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log('ON MESSAGE',request)
        AppActions[request.action](request.data);
    });


module.exports = ExtActions;
