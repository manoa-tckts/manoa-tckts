import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const PeopleBuyingTickets = new Mongo.Collection('PeopleBuyingTickets');

/**
 * Create the schema for Stuff
 */
export const PeopleBuyingTicketsSchema = new SimpleSchema({
  event: {
    label: 'event',
    type: String,
    optional: false,
    max: 2000,
  },
  date: {
    label: 'date',
    type: String,
    optional: false,
    max: 20,
  },
  location: {
    label: 'location',
    type: String,
    optional: false,
    max: 2000,
  },
  price: {
    label: 'price',
    type: String,
    optional: false,
    max: 200,
  },
  negotiable: {
    label: 'negotiable',
    type: String,
    optional: true,
    max: 200,
  },
});

PeopleBuyingTickets.attachSchema(PeopleBuyingTicketsSchema);
