import {PeopleBuyingTickets} from '../../api/people-buying-tickets/list-of-people-buying-tickets.js';
import {_} from 'meteor/underscore';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const pbtSeeds = [
  { event: 'testevent1',
    date: '10-12-2016',
    location: '1238 Dole Street',
    price: '69',
    image: 'imgsrc'
  },
  { event: 'testevent2',
    date: '10-12-2016',
    location: '1238 Dole Street',
    price: '69',
    image: 'imgsrc'
  },
  { event: 'testevent3',
    date: '10-12-2016',
    location: '1238 Dole Street',
    price: '69',
    image: 'imgsrc'
  },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (PeopleBuyingTickets.find().count() === 0) {
  _.each(pbtSeeds, function seedPeopleBuyingTickets(pbtSeeds) {
    PeopleBuyingTickets.insert(pbtSeeds);
  });
}
