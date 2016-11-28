import {ListOfEvents} from '../../api/schema/schemas.js';
import {_} from 'meteor/underscore';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const eventSeeds = [
  { event: 'Haunted Wonderland',
    image: 'haunted-wonderland.jpg',
    date: 'October 29 2016',
    location: 'Hawaii Country Club',
    price: '69',
    numTickets: '300'
  },
  { event: 'Miguel Migs',
    image: 'miguel-migs.jpg',
    date: ' November 5 2016',
    location: 'The Republik',
    price: '69',
    numTickets: '65'
  },
  { event: 'Made in Tyo',
    image: 'madeintyo.jpg',
    date: 'November 17 2016',
    location: 'The Republik',
    price: '69',
    numTickets: '65'
  },
  { event: 'Adventure Club',
    image: 'adventure-club.jpg',
    date: 'November 26 2016',
    location: 'The Republik',
    price: '69',
    numTickets: '40'
  },
  { event: 'Third Eye Blind',
    image: 'third-eye-blind.jpg',
    date: 'November 20 2016',
    location: 'The Republik',
    price: '69',
    numTickets: '115'
  },
  { event: 'Atmosphere',
    image: 'atmosphere.jpg',
    date: 'December 3 2016',
    location: 'The Republik',
    price: '69',
    numTickets: '27'
  },
  { event: 'Dim Mak Anniversary',
    image: 'dim-mak.jpg',
    date: 'December 9 2016',
    location: 'Hawaii Country Club',
    price: '69',
    numTickets: '115'
  },
  { event: 'Yellowcard',
    image: 'yellowcard.jpg',
    date: 'February 5 2016',
    location: 'The Republik',
    price: '69',
    numTickets: '115'
  },

];

if (ListOfEvents.find().count() === 0) {
  _.each(eventSeeds, function seedEvent(event) {
    ListOfEvents.insert(event);
  });
}