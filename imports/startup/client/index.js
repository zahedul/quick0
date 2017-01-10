// Import client startup through a single index entry point

// import './routes.js';

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '/imports/ui/layouts/App';

Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});