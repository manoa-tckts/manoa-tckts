/**
 * Created by Jordan on 10/27/16.
 */

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Members } from '../../api/schema/members.js';
import { PeopleBuyingTickets } from '../../api/people-buying-tickets/list-of-people-buying-tickets.js';
import { UserData, ListOfEvents, Ticket, UserDataSchema, EventsSchema, TicketSchema } from '../../api/schema/schemas.js';

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
 });

 Template.Profile_Page.events({


 });
 */

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
