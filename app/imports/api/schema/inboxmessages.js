/**
 * Created by bynun on 12/13/2016.
 */
import {Messages} from '../../api/schema/messages.js';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Inboxmessages = new Mongo.Collection('Inboxmessages');

/**
 * Create the schema for Stuff
 */
export const InboxmessagesSchema = new SimpleSchema({
  chatid: {
    label: 'chatid',
    type: String,
    optional: false,
    max: 200,
  },
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
  messages: {
    label: 'messages',
    type: [Messages],
    optional: true,
  },
});

Inboxmessages.attachSchema(InboxmessagesSchema);
