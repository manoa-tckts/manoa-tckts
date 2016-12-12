import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Usercheckboxes = new Mongo.Collection('Usercheckboxes');

/**
 * Create the schema for Stuff
 */
export const UsercheckboxesSchema = new SimpleSchema({
  uid: {
    label: 'uid',
    type: String,
    optional: false,
    max: 200,
  },
  username: {
    label: 'username',
    type: String,
    optional: false,
    max: 200,
  },
  phonenumber: {
    label: 'phonenumber',
    type: String,
    optional: false,
  },
  emailnumber: {
    label: 'emailnumber',
    type: String,
    optional: false,
  },
});

Usercheckboxes.attachSchema(UsercheckboxesSchema);
