import {Ticket} from '../../api/schema/schemas.js';
import {_} from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const ticketSeeds = [
  { eventName: 'testevent1',
    date: '10-12-2016',
    price: '69',
    status: 'buy',
    negotiable: 'yes',
    owner: Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username})._id,
  },
  { eventName: 'testevent2',
    date: '10-12-2016',
    price: '69',
    status: 'buy',
    negotiable: 'yes',
    owner: Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username})._id,
  },
  { eventName: 'testevent3',
    date: '10-12-2016',
    price: '69',
    status: 'buy',
    negotiable: 'yes',
    owner: Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username})._id,
  },
];

 if (Ticket.find().count() === 0) {
     _.each(ticketSeeds, function seedTicket(stuff) {
    Ticket.insert(stuff);
  });
 }