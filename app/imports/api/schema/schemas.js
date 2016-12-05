import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const UserData = new Mongo.Collection('UserData');
export const ListOfEvents = new Mongo.Collection('ListOfEvents');
export const Ticket = new Mongo.Collection('Ticket');

export const UserProfile = new SimpleSchema({
  picture:{
    type: String,
    optional: true
  },
  name: {
    type: String,
    optional: false
  },
  first: {
    type: String,
    optional: true
  },
  last: {
    type: String,
    optional: true
  },
  telephone: {
    type: String,
    optional: true
  },
  email: {
    type: String,
    optional: true
  },
  motto : {
    type: String,
    optional: true
  },
  miscellaneous: {
    type: String,
    optional: true
  }
});
/*
 * Create the schema for Users
 */
export const UserDataSchema= new SimpleSchema({
  username: {
    type: String,
    // For accounts-password, either emails or username is required, but not both. It is OK to make this
    // optional here because the accounts-password package does its own validation.
    // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
    optional: true
  },
  emails: {
    type: Array,
    // For accounts-password, either emails or username is required, but not both. It is OK to make this
    // optional here because the accounts-password package does its own validation.
    // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
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
  /*
  // Add `roles` to your schema if you use the meteor-roles package.
  // Option 1: Object type
  // If you specify that type as Object, you must also specify the
  // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
  // Example:
  // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
  // You can't mix and match adding with and without a group since
  // you will fail validation in some cases.
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
  */
  // In order to avoid an 'Exception in setInterval callback' from Meteor
  heartbeat: {
    type: Date,
    optional: true
  }
});

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
  }
});

ListOfEvents.attachSchema(EventsSchema);

/**
 * Create the schema for Tickets
 */
/*
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
    type: ListOfEvents,
    type: String,
    optional: true,
  },
});
*/

export const TicketSchema = new SimpleSchema({
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
  eventName: {
    label: 'Event',
    type: String,
  },
});
Ticket.attachSchema(TicketSchema);