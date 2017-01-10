import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

import Auth0List from '../components/auth0s/lists';
import Auth0s from '/imports/api/auth0/auth0s';
// App component - represents the whole app

class App extends Component {

  syncUsers() {
    console.log('request for syncUsers');
    Meteor.call('syncUsers', (err, data) => {
      if (!err) {
        console.log('data synced %d', data);
      } else {
        console.log(err);
      }
    })
  }

  render() {
    console.log(this.props);
    return (
      <div id="wrapper">
        <div id="sidebar-wrapper" className="">
          <nav id="spy">
            <ul className="sidebar-nav nav">
              <li className="sidebar-brand">
                <span className="fa fa-home solo">Quick0</span>
              </li>
              <li className="">
                <a href="#anch1"className="active">
                  <span className="fa fa-anchor solo">Clients</span>
                </a>
              </li>
              <li className="">
                <a href="#anch1" data-scroll="" className="">
                  <span className="fa fa-anchor solo">Settings</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div id="page-content-wrapper" className="">
          <div className="content-header">
            <div className="row clearfix">
              <h1 id="home" className="col-md-9">
                Akly-Dev Users
              </h1>
              <div className="col-md-2">
                <button onClick={this.syncUsers} className="btn btn-primary">Sync 100</button>
              </div>
            </div>
          </div>

          <div className="page-content inset">
            <div className="row">
              <div className="jumbotron text-center">
                <Auth0List users={this.props.auth0Users}/>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('auth0s');

  return {
    auth0Users: Auth0s.find({}, {sort: {createdAt: -1}}).fetch(),
  };
}, App);