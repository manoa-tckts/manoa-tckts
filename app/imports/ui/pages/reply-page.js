import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Members } from '../../api/schema/members.js';
import { PeopleBuyingTickets } from '../../api/people-buying-tickets/list-of-people-buying-tickets.js';
import { UserData, ListOfEvents, Ticket, UserDataSchema, EventsSchema, TicketSchema } from '../../api/schema/schemas.js';
import {Messages} from '../../api/schema/messages.js';


Template.Reply_Page.helpers({

  recipient: function() {
    const owner = Messages.findOne(FlowRouter.getParam('_id')).reciever;
    return owner;
  },
  subject: function() {
    const subject = Messages.findOne(FlowRouter.getParam('_id')).subject;
    const message = "Re: " + subject;
    return message;
  },

});

Template.Reply_Page.events({
  'submit .reply-messages'(event, instance) {
    const sender = Members.findOne({uid: Meteor.userId()}).username;
    const reciever = event.target.ToField.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;
    const isRead = false;;
    const date = new Date();
    const newmessage = {sender, reciever, subject, message, isRead, date};
    Messages.insert(newmessage);

    FlowRouter.go('Inbox');
  },

});
