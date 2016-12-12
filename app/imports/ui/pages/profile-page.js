/**
 * Created by Jordan on 10/27/16.
 */

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { UserData, ListOfEvents, Ticket, UserDataSchema, EventsSchema, TicketSchema } from '../../api/schema/schemas.js';
import { Members, MembersSchema } from '../../api/schema/members.js';
import {Phonenumbers, PhonenumbersSchema} from '../../api/schema/phonenumbers.js';
import {Emails, EmailsSchema} from '../../api/schema/phonenumbers.js';
import {Usercheckboxes, UsercheckboxesSchema} from '../../api/schema/usercheckboxes.js';
import { PeopleBuyingTickets } from '../../api/people-buying-tickets/list-of-people-buying-tickets.js';

/* eslint-disable object-shorthand */

/*
Template.Profile_Page.helpers({

  user: function user() {
    return Meteor.user() ? Meteor.user().profile.name : 'No logged in user';
  },
  first: function() {
    return Meteor.user().profile.first;
  },
  last: function() {
    return Meteor.user().profile.last;
  },
  telephone: function() {
    return Meteor.user().profile.telephone;
  },
  email: function() {
    return Meteor.user().profile.email;
  },
  motto: function() {
    return Meteor.user().profile.motto;
  },
  miscellaneous: function() {
    return Meteor.user().profile.miscellaneous;
  },
  picture: function() {
    return Meteor.user().profile.picture;
  },
  listOfTickets: function(){
    //const eventName = eventData.event;
    return Ticket.find();
    //return tickets;
  },
  findOwner: function(ticket){
    const owner = Meteor.users.findOne({_id: ticket.owner}).profile.name;
    return owner;
  }
});

Template.Profile_Page.events({


});
*/

Template.Profile_Page.helpers({

  user: function user() {
    return Meteor.user() ? Meteor.user().profile.name : 'No logged in user';
  },
  first: function() {
    if(Members.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
      return('Please edit your profile');
    }
    else {return Members.findOne({'uid':Meteor.userId()}).first;}
  },
  last: function() {
    if(Members.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
      return('Please edit your profile');
    }
    else {return Members.findOne({'uid':Meteor.userId()}).last;}
  },
  telephone: function() {
    if(Members.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
      return('Please edit your profile');
    }
    else {return Members.findOne({'uid':Meteor.userId()}).phone;}
  },
  email: function() {
    if(Members.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
      return('Please edit your profile');
    }
    else {return Members.findOne({'uid':Meteor.userId()}).email;}
  },
  motto: function() {
    if(Members.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
      return('Please edit your profile');
    }
    else {return Members.findOne({'uid':Meteor.userId()}).motto;}
  },
  miscellaneous: function() {
    if(Members.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
      return('Please edit your profile');
    }
    else {return Members.findOne({'uid':Meteor.userId()}).miscellaneous;}
  },
  picture: function() {
    if(Members.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
      return('http://m.memegen.com/fdt0u5.jpg');
    }
    else{return Members.findOne({'uid':Meteor.userId()}).picture;}
  },
  ticketList() {
    return PeopleBuyingTickets.find();
  },
  listOfTickets(){
    //const eventData = ListOfEvents.findOne(FlowRouter.getParam('_id'));
    const owner = Meteor.userId({});
    const tickets = Ticket.find({owner: owner});
    return tickets;

  },

  findOwner: function(ticket){
    const owner = Members.findOne({uid: ticket.owner}).username;
    return owner;
  }
});

Template.Profile_Page.events({


});
