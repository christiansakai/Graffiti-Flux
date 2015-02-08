var React = require('react');

var ExtActions = require('../../actions/ext-actions');

var PageStore = require('../../stores/page-store');
var UserStore = require('../../stores/user-store');

var Sprays = require('../Spray/sprays');


function getPage(){
    return {
        page:PageStore.getPageState(),
        filter:UserStore.getCurrentIdentity()
    };
}

var Page =
    React.createClass({
        getInitialState: function(){
            return getPage();
        },
        _onChange:function(){
            console.log('PAGE INITIALIZED OR CHANGED');
            this.setState(getPage())
        },
        componentWillMount:function(){
            ExtActions.getPageState();
            PageStore.addChangeListener(this._onChange);
        },
        render: function (){
            return (
                <div>
                    {this.state.page._id}<br />
                    {this.state.page.pageRef}<br />
                    <Sprays organization={this.state.filter.organization} />
                </div>
            )
        }

    });

module.exports = Page;