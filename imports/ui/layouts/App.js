import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Auth0List from '../components/auth0s/lists';
import Auth0s from '/imports/api/auth0/auth0s';
// App component - represents the whole app

class App extends Component {

  syncUsers() {
    console.log('request for syncUsers');
    Meteor.call('syncUsers', (err, data)=>{
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
      <div className="container">
        <header>
          <div className="row clearfix">
            <div className="col-md-9">
              <h1>Manage Auth0 Users</h1>
            </div>
            <div className="col-md-3">
              <button onClick={this.syncUsers} className="btn btn-primary">Sync 100</button>
            </div>
          </div>
        </header>
        <section>
          <Auth0List users={this.props.auth0Users}/>
        </section>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('auth0s');

  return {
    auth0Users: Auth0s.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
}, App);