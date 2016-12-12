import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Phonenumbers = new Mongo.Collection('Phonenumbers');

/**
 * Create the schema for Stuff
 */
export const PhonenumbersSchema = new SimpleSchema({
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
  phone: {
    label: 'phone',
    type: String,
    optional: true,
    max: 200,
  },
});

Phonenumbers.attachSchema(PhonenumbersSchema);
