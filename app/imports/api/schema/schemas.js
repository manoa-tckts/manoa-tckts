import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const UserData = new Mongo.Collection('UserData');
export const ListOfEvents = new Mongo.Collection('ListOfEvents');
export const Ticket = new Mongo.Collection('Ticket');

export const UserProfile = new SimpleSchema({
  name: {
    type: String,
    optional: false
  },

  firstName: {
    type: String,
    optional: true
  },
  lastName: {
    type: String,
    optional: true
  },
  bio: {
    type: String,
    optional: true
  }
});
/*
 * Create the schema for Users
 */
export const UserDataSchema = new SimpleSchema({
  username: {
    label: 'Username',
    type: String,
    max: 10,
  },
  emails: {
    label: 'emails',
    type: Array,
    max: 50,
    optional: true
  },
  "emails.$": {
    type: Object
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },

  'registered_emails.$': {
    type: Object,
    blackbox: true
  },
  createdAt: {
    type: Date
  },
  profile: {
    type: UserProfile,
    optional: true
  },
  // Make sure this services field is in your schema if you're using any of the accounts packages
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  roles: {
    type: Object,
    optional: true,
    blackbox: true
  },
  // Option 2: [String] type
  // If you are sure you will never need to use role groups, then
  // you can specify [String] as the type
  roles: {
    type: Array,
    optional: true
  },
  'roles.$': {
    type: String
  },
  // In order to avoid an 'Exception in setInterval callback' from Meteor
  heartbeat: {
    type: Date,
    optional: true
  }
});


//UserData.attachSchema(UserDataSchema);
Meteor.users.attachSchema(UserDataSchema);

/**
 * Create the schema for Events
 */
export const EventsSchema = new SimpleSchema({
  event: {
    label: 'Event',
    type: String,
    optional: true,
    max: 2000,
  },
  image: {
    label: 'Image',
    type: String,
    optional: false,
  },
  date: {
    label: 'Date',
    type: Date,
    optional: false,
    max: 20,
  },
  location: {
    label: 'Location',
    type: String,
    optional: false,
    max: 2000,
  },
  price: {
    label: 'Price',
    type: Number,
    decimal: true,
    optional: false,
    max: 200,
  },
  numTickets: {
    label: 'Number Tickets',
    type: Number,
    optional: true,
  },
  tickets: {
    label: 'Tickets',
    type: [TicketSchema],
    optional: true,
  },
});

ListOfEvents.attachSchema(EventsSchema);

/**
 * Create the schema for Tickets
 */
export const TicketSchema = new SimpleSchema({
  eventName: {
    label: 'Event Name',
    type: String,
    optional: false,
    max: 2000,
  },
  status: {
    label: 'Status',
    type: String,
    optional: false,
  },
  date: {
    label: 'Date',
    type: Date,
    optional: false,
    max: 20,
  },
  price: {
    label: 'Price',
    type: Number,
    decimal: true,
    optional: false,
    max: 200,
  },
  owner: {
    label: 'Owner',
    type: String,
  },
  event: {
    label: 'Event',
<<<<<<< HEAD
    type: ListOfEvents,
=======
    type: String,
>>>>>>> master
    optional: true,
  },

});

Ticket.attachSchema(TicketSchema);