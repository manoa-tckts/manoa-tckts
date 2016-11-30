/**
 * Created by Jordan on 10/27/16.
 */
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Members } from '../../api/people-buying-tickets/members.js';
import { PeopleBuyingTickets } from '../../api/people-buying-tickets/list-of-people-buying-tickets.js';

/* eslint-disable object-shorthand */

Template.Profile_Page.helpers({

  user: function user() {
    return Meteor.user() ? Meteor.user().profile.name : 'No logged in user';
  },
  first: function() {
    return Members.findOne({'uid':Meteor.userId()}).first;
  },
  last: function() {
    return Members.findOne({'uid':Meteor.userId()}).last;
  },
  telephone: function() {
    return Members.findOne({'uid':Meteor.userId()}).phone;
  },
  email: function() {
    return Members.findOne({'uid':Meteor.userId()}).email;
  },
  motto: function() {
    return Members.findOne({'uid':Meteor.userId()}).motto;
  },
  miscellaneous: function() {
    return Members.findOne({'uid':Meteor.userId()}).miscellaneous;
  },
  picture: function() {
    return Members.findOne({'uid':Meteor.userId()}).picture;
  },
  ticketList() {
    return PeopleBuyingTickets.find();
  },
});

Template.Profile_Page.events({


});
