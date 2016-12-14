/**
 * Created by bynun on 12/13/2016.
 */
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Messages = new Mongo.Collection('Messages');

/**
 * Create the schema for Stuff
 */
export const MessagesSchema = new SimpleSchema({
  sender: {
    label: 'sender',
    type: String,
    optional: false,
    max: 200,
  },
  reciever: {
    label: 'reciever',
    type: String,
    optional: false,
    max: 200,
  },
  message: {
    label: 'message',
    type: String,
    optional: false,
  },
});

Messages.attachSchema(MessagesSchema);
