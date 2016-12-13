/**
 * Created by bynun on 12/12/2016.
 */
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Checkboxes = new Mongo.Collection('Checkboxes');

/**
 * Create the schema for Stuff
 */
export const CheckboxesSchema = new SimpleSchema({
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
  phonecheckbox: {
    label: 'phonecheckbox',
    type: Boolean,
  },
  emailcheckbox: {
    label: 'emailcheckbox',
    type: Boolean,
  },
});

Checkboxes.attachSchema(CheckboxesSchema);
