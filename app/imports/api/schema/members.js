import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Members = new Mongo.Collection('Members');

/**
 * Create the schema for Stuff
 */
export const MembersSchema = new SimpleSchema({
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
  first: {
    label: 'first',
    type: String,
    optional: true,
    max: 200,
  },
  last: {
    label: 'last',
    type: String,
    optional: true,
    max: 200,
  },
  phone: {
    label: 'phone',
    type: String,
    optional: true,
    max: 200,
  },
  email: {
    label: 'email',
    type: String,
    optional: true,
    max: 200,
  },
  motto: {
    label: 'motto',
    type: String,
    optional: true,
    max: 200,
  },
  miscellaneous: {
    label: 'miscellaneous',
    type: String,
    optional: true,
  },
  picture: {
    label: 'picture',
    type: String,
    optional: true,
    max: 200,
  },
  role: {
    label: 'role',
    type: String,
    optional: false,
    max: 200,
  },
  banned: {
    label: 'banned',
    type: Boolean,
  },
  phonecheckbox: {
    type: Boolean,
    optional: true
  },
  emailcheckbox: {
    type: Boolean,
    optional: true
  },
  superuser: {
    type: Boolean,
    optional: true
  },
  admin: {
    type: Boolean,
    optional: true
  }
});

Members.attachSchema(MembersSchema);
