import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Emails = new Mongo.Collection('Emails');

/**
 * Create the schema for Stuff
 */
export const EmailsSchema = new SimpleSchema({
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
  email: {
    label: 'email',
    type: String,
    optional: false,
    max: 200,
  },
});

Emails.attachSchema(EmailsSchema);
