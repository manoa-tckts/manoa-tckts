/**
 * Created by Jordan on 11/28/16.
 */
import {ListOfEvents} from '../../api/schema/schemas.js';
import {Ticket} from '../../api/schema/schemas.js';
import {_} from 'meteor/underscore';

const ticketSeeds = [
  { eventName: 'Haunted Wonderland',
    status: 'sell',
    date: 'October 29 2016',
    price: '85',
    owner: 'bchun',
    event: 'Haunted Wonderland'
  },
  { eventName: 'Haunted Wonderland',
    status: 'buy',
    date: 'October 29 2016',
    price: '75',
    owner: 'dumlaoj',
    event: 'Haunted Wonderland'
  },
  { eventName: 'Miguel Migs',
    status: 'buy',
    date: 'October 29 2016',
    price: '50',
    owner: 'nunogawa',
    event: 'Miguel Migs'
  },
  { eventName: 'Miguel Migs',
    status: 'sell',
    date: 'October 29 2016',
    price: '40',
    owner: 'kylebali',
    event: 'Miguel Migs'
  },
  { eventName: 'Adventure Club',
    status: 'buy',
    date: 'October 29 2016',
    price: '70',
    owner: 'nunogawa',
    event: 'Adventure Club'
  },
  { eventName: 'Adventure Club',
    status: 'sell',
    date: 'October 29 2016',
    price: '70',
    owner: 'kylebali',
    event: 'Adventure Club'
  },
  { eventName: 'Adventure Club',
    status: 'buy',
    date: 'October 29 2016',
    price: '70',
    owner: 'bchun',
    event: 'Adventure Club'
  },
  { eventName: 'Third Eye Blind',
    status: 'sell',
    date: 'October 29 2016',
    price: '45',
    owner: 'dumlaoj',
    event: 'Third Eye Blind'
  },
  { eventName: 'Yellowcard',
    status: 'buy',
    date: 'October 29 2016',
    price: '55',
    owner: 'bchun',
    event: 'Yellowcard'
  },
  { eventName: 'Yellowcard',
    status: 'sell',
    date: 'October 29 2016',
    price: '56',
    owner: 'kylebali',
    event: 'Yellowcard'
  },
  { eventName: 'Yellowcard',
    status: 'buy',
    date: 'October 29 2016',
    price: '58',
    owner: 'nunogawa',
    event: 'Yellowcard'
  },

];

/*

if (Ticket.find().count() === 0) {
  _.each(ticketSeeds, function seedTicket(ticket) {
    Ticket.insert(ticket);
  });
}
    */