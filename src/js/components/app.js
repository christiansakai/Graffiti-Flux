/** @jsx React.DOM */
var React = require('react');
var Identity = require('../components/User/identity');
var Page = require('../components/Page/page');

var APP =
    React.createClass({
        render:function(){
           return (
               <div>
                   <h1>Graffiti</h1>
                   <Identity />
                   <Page />
               </div>
               )

        }
    });
module.exports = APP;
