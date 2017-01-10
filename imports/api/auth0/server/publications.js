import Auth0s from '../auth0s';
import { logger } from '/imports/api/utils/logger';

Meteor.publish('auth0s', function tasksPublication() {
  logger().info('subscribe auth0s publication');
  return Auth0s.find();
});