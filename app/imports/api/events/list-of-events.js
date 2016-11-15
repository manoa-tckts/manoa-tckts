import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const ListOfEvents = new Mongo.Collection('ListOfEvents');

/**
 * Create the schema for Stuff
 */
export const EventsSchema = new SimpleSchema({
  event: {
    label: 'event',
    type: String,
    optional: false,
    max: 2000,
  },
  image: {
    label: 'image',
    type: String,
    optional: false,
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
  tickets: {
    label: 'tickets',
    type: String,
    optional: true,
    max: 200,
  },
});

ListOfEvents.attachSchema(EventsSchema);