import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const UserData = new Mongo.Collection('UserData');
export const ListOfEvents = new Mongo.Collection('ListOfEvents');
export const Ticket = new Mongo.Collection('Ticket');

/*
 * Create the schema for Users
 */
export const UserDataSchema = new SimpleSchema({
  username: {
    label: 'Username',
    type: String,
    max: 10,
  },
  first: {
    label: 'First',
    type: String,
    max: 50,
  },
  last: {
    label: 'Last',
    type: String,
    max: 50,
  },
  email: {
    label: 'Email',
    type: String,
    defaultValue: '',
    max: 25,
  },
  phone: {
    label: 'Phone',
    type: String,
  },
  status: {
    label: 'Status',
    type: String,
  },
});

UserData.attachSchema(UserDataSchema);

/**
 * Create the schema for Events
 */
export const EventsSchema = new SimpleSchema({
  event: {
    label: 'Event',
    type: String,
    optional: false,
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
  // event: {
  //   label: 'Event',
  //   type: String,
  //   optional: false,
  //   max: 2000,
  // },
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
    type: String,
    optional: true,
  },

});

Ticket.attachSchema(TicketSchema);