import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Members, MembersSchema } from '../../api/schema/members.js';
import { Ticket, TicketSchema, ListOfEvents } from '../../api/schema/schemas.js';
import {Inboxmessages} from '../../api/schema/inboxmessages.js';
import {Messages} from '../../api/schema/messages.js';

Template.Temp_Page.helpers({
  listOfUsers(){

    return Members.find();
  },

  listOfTickets(){
    return Ticket.find();
  },
  listOfInboxusers(fieldName){

    return Messages.find({'reciever': Members.findOne({'uid': Meteor.userId()}).username});
  },
});

Template.Temp_Page.events({


});