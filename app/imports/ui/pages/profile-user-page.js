/**
 * Created by Jordan on 10/27/16.
 */

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Members } from '../../api/schema/members.js';
import { PeopleBuyingTickets } from '../../api/people-buying-tickets/list-of-people-buying-tickets.js';
import { UserData, ListOfEvents, Ticket, UserDataSchema, EventsSchema, TicketSchema } from '../../api/schema/schemas.js';

/* eslint-disable object-shorthand */


Template.Profile_User_Page.helpers({
  memberField(fieldName) {
    const member = Members.findOne(FlowRouter.getParam('_id'));
    // See https://dweldon.silvrback.com/guards to understand '&&' in next line.
    return member && member[fieldName];
  },
  ticketField() {
    const owner = Members.findOne(FlowRouter.getParam('_id')).uid;
    const tickets = Ticket.find({owner: owner});
    return tickets;
  },
});

Template.Profile_Page.events({


});
