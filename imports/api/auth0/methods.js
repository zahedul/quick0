import jwt from 'jsonwebtoken';
import Auth0s from './auth0s';
import { logger } from '/imports/api/utils/logger';
import _ from 'lodash';

Meteor.methods({
  syncUsers() {
    try{
      logger().info('call syncUsers');
      const AUTH0 = Meteor.settings.AUTH0;
      const authToken = jwt.sign({
        aud: AUTH0.GLOBAL_CLIENT_ID,
        scopes: {
          users: {
            actions: ["read"]
          }
        }
      }, new Buffer(AUTH0.GLOBAL_CLIENT_SECRET, 'base64'));

      const httpHeader = {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + authToken
      };
      let httpUrl = AUTH0.BASE_URL + 'api/v2/users?per_page=100';
      httpUrl += '&connection='+ Meteor.settings.AUTH0.CONNECTION;

      const result = HTTP.call('GET', httpUrl, { headers: httpHeader });

      if (result.data) {
        let count = 0;
        Auth0s.remove({});
        _.each(result.data, (data)=>{
          Auth0s.insert(data);
          count++;
        });
        logger().info('total inserted data is %s', count);
        return count;
      }
    } catch (e) {
      logger().error(e);
      throw new Meteor.Error(e);
    }
  },
  removeUser(options) {
    try {
      logger().info('call removeUser');
      const AUTH0 = Meteor.settings.AUTH0;
      const authToken = jwt.sign({
        aud: AUTH0.GLOBAL_CLIENT_ID,
        scopes: {
          users: {
            actions: ["delete"]
          }
        }
      }, new Buffer(AUTH0.GLOBAL_CLIENT_SECRET, 'base64'));

      const httpHeader = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authToken
      };
      const httpUrl = AUTH0.BASE_URL + 'api/v2/users/' + options.user_id;
      const result = HTTP.call('DELETE', httpUrl, { headers: httpHeader });

      if (result.statusCode === 204) {
        return Auth0s.remove({_id: options._id });
      } else {
        return new Meteor.Error(result);
      }
    } catch (e) {
      logger().error(e);
      throw new Meteor.Error(e);
    }
  },
});