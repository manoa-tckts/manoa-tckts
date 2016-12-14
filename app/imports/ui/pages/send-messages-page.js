import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Members } from '../../api/schema/members.js';
import { PeopleBuyingTickets } from '../../api/people-buying-tickets/list-of-people-buying-tickets.js';
import { UserData, ListOfEvents, Ticket, UserDataSchema, EventsSchema, TicketSchema } from '../../api/schema/schemas.js';
import {Messages} from '../../api/schema/messages.js';


Template.Send_Messages_Page.helpers({

  recipient: function() {
    const owner = Ticket.findOne(FlowRouter.getParam('_id'));
    return Members.findOne({'uid': owner.owner}).username;
  },
  subject: function() {
    const subject = Ticket.findOne(FlowRouter.getParam('_id'));
    const message = "Interested in " + subject.eventName + " ticket";
    console.log('subject line: ');
    console.log(message);
    return message;
  },
  message: function() {
    const subject = Ticket.findOne(FlowRouter.getParam('_id'));
    const message = "Hi, I'm interested in buying the ticket for the event " + subject.eventName + " occuring at  " + subject.date + " please reply back";
    console.log('message');
    console.log(message);
    return message;
  },
  ticketField(fieldName) {
    const ticket = Ticket.findOne(FlowRouter.getParam('_id'));

    return ticket && ticket[fieldName];
  },
});

Template.Send_Messages_Page.events({
  'submit .send-messages'(event, instance) {
    const sender = Members.findOne({uid: Meteor.userId()}).username;
    const reciever = event.target.ToField.value;
    const chatid = sender + ',' + reciever;
    const subject = event.target.subject.value;
    const message = event.target.message.value;
    const isRead = false;;
    const date = new Date();
    const newmessage = {sender, reciever, subject, message, isRead, date};
    console.log(chatid);
    if(Inboxmessages.find({chatid: chatid}, {limit: 1}).count() <= 0){
      console.log('nothing here');
    }
    /*
    Inboxmessages.messages.push(Messages.insert(newmessage));
    Polls.update({ _id: id },{ $push: { already_voted: ip }})
    */
    FlowRouter.go('Events_Page');
  },

});
