import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Members } from '../../api/schema/members.js';
import { PeopleBuyingTickets } from '../../api/people-buying-tickets/list-of-people-buying-tickets.js';
import { UserData, ListOfEvents, Ticket, UserDataSchema, EventsSchema, TicketSchema } from '../../api/schema/schemas.js';
import {Messages} from '../../api/schema/messages.js';


Template.Send_Messages_Page.helpers({
  memberField(fieldName) {
    const member = Members.findOne(FlowRouter.getParam('_id'));
    // See https://dweldon.silvrback.com/guards to understand '&&' in next line.
    return member && member[fieldName];
  },
  ticketField(fieldName) {
    const ticket = Ticket.findOne(FlowRouter.getParam('_id'));

    return ticket && ticket[fieldName];
  },
});

Template.Send_Messages_Page.events({


});
