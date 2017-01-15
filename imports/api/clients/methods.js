import { Mongo } from 'meteor/mongo';

const Clients = new Mongo.Collection('clients');

const Schemas = {};

Schemas.Client = new SimpleSchema({
  name: {
    type: String,
    label: "Name",
  },
  connection: {
    type: String,
    label: "Connection Name"
  },
  client_id: {
    type: String,
    label: "Client ID",
  },
  client_secret: {
    type: String,
    label: "Client Secret",
  },
  global_id: {
    type: String,
    label: "Global ID",
  },
  global_secret: {
    type: String,
    label: "Global Secret",
  },
  isSelected: {
    type: Boolean,
    default: false
  }
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  },
  modifiedAt: {
    type: Date,
    type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  }
});

Clients.attachSchema(Schemas.Client);

export default Clients;