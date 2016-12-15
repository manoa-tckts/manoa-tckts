/**
 * Created by Jordan on 10/25/16.
 */
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { UserData, ListOfEvents, Ticket, UserDataSchema, EventsSchema, TicketSchema } from '../../api/schema/schemas.js';
import { Members } from '../../api/schema/members.js';


/* eslint-disable object-shorthand */

Template.Event_Page.helpers({

  event() {
    const eventData = ListOfEvents.findOne(FlowRouter.getParam('_id'));
    // See https://dweldon.silvrback.com/guards to understand '&&' in next line.
    return eventData;
  },

  listOfTickets(){
    const eventData = ListOfEvents.findOne(FlowRouter.getParam('_id'));
    const eventId = eventData._id;
    const tickets = Ticket.find({eventId: eventId});
    return tickets;

  },

  findOwner: function(ticket){
    //const owner = Meteor.users.findOne({_id: ticket.owner}).profile.first;
    const owner = Members.findOne({uid: ticket.owner}).username;
    return owner;
  },

  contactByPhone: function(ticket){
    const owner = Members.findOne({uid: ticket.owner});
    return owner.phonecheckbox ? owner.email : "N/A";
  },

  contactByEmail: function(ticket){
    const owner = Members.findOne({uid: ticket.owner});
    return owner.emailcheckbox ? owner.phone : "N/A";
  }

});

Template.Event_Page.events({


});


