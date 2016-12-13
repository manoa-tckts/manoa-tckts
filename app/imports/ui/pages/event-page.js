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
import { Members, MembersSchema } from '../../api/schema/members.js';

/* eslint-disable object-shorthand */

Template.Event_Page.helpers({

  event() {
    const eventData = ListOfEvents.findOne(FlowRouter.getParam('_id'));
    // See https://dweldon.silvrback.com/guards to understand '&&' in next line.
    return eventData;
  },

  listOfTickets(){
    const eventData = ListOfEvents.findOne(FlowRouter.getParam('_id'));
    const eventName = eventData.event;
    const tickets = Ticket.find({eventName});
    return tickets;

  },

  findusername(){
    return Members.findOne({uid: Meteor.userId()}).username;
  },

  findOwner: function(ticket){
    const owner = Members.findOne({uid: ticket.owner}).username;
    return owner;
  },
  checknewuser: function(){
    if(Members.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
      const uid = Meteor.userId();
      const username = Meteor.user().profile.name;
      const first = '';
      const last = '';
      const phone = '';
      const email = '';
      const motto = '';
      const miscellaneous = '';
      const picture = '';
      const role = 'owner';
      const banned = false;
      const profile = {uid, username, first, last, phone, email, motto, miscellaneous, picture, role, banned};
      MembersSchema.clean(profile);
      Members.insert(profile);
    }
    if(Phonenumbers.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
      const uid = Meteor.userId();
      const username = Meteor.user().profile.name;
      const phone = '';
      const numbers = {uid, username, phone};
      PhonenumbersSchema.clean(numbers);
      Phonenumbers.insert(numbers);
    }
    if(Emails.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
      const uid = Meteor.userId();
      const username = Meteor.user().profile.name;
      const email = '';
      const mails = {uid, username, email};
      EmailsSchema.clean(mails);
      Emails.insert(mails);
    }
    if(Usercheckboxes.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
      const uid = Meteor.userId();
      const username = Meteor.user().profile.name;
      const phonecheckbox = false;
      const emailcheckbox = false;
      const boxes = {uid, username, phonecheckbox, emailcheckbox};
      UsercheckboxesSchema.clean(boxes);
      Usercheckboxes.insert(boxes);
    }
  }

});

Template.Event_Page.events({


});


