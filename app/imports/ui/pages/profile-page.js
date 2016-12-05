/**
 * Created by Jordan on 10/27/16.
 */
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { UserData, ListOfEvents, Ticket, UserDataSchema, EventsSchema, TicketSchema } from '../../api/schema/schemas.js';

/* eslint-disable object-shorthand */

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
