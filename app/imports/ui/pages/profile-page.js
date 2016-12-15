/**
 * Created by Jordan on 10/27/16.
 */

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Members } from '../../api/schema/members.js';
import { PeopleBuyingTickets } from '../../api/people-buying-tickets/list-of-people-buying-tickets.js';
import { UserData, ListOfEvents, Ticket, UserDataSchema, EventsSchema, TicketSchema } from '../../api/schema/schemas.js';

/* eslint-disable object-shorthand */

Template.Profile_Page.helpers({

  displayId: function(){
    alert(Members.findOne({uid: Meteor.userId()}).first);
    alert(Meteor.userId());
  },
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
  emailchecked: function() {
    if(Members.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
      //return('http://m.memegen.com/fdt0u5.jpg');
    }
    else{
      return  Members.findOne({'uid':Meteor.userId()}).emailcheckbox ?  "yes" : "no"
    }
  },
  phonechecked: function() {
    if(Members.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
      //return('http://m.memegen.com/fdt0u5.jpg');
    }
    else{
      return  Members.findOne({'uid':Meteor.userId()}).phonecheckbox ?  "yes" : "no"
    }
  },
  ticketList() {
    return PeopleBuyingTickets.find();
  },

  listOfTickets(){
    const owner = Meteor.userId();
    const tickets = Ticket.find({owner: owner});
    return tickets;

  },

  role: function() {
    if(Members.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
      return('http://m.memegen.com/fdt0u5.jpg');
    }
    else{return Members.findOne({'uid':Meteor.userId()}).admin ? "admin" : "not admin";}
  },
  superuser: function() {
    if (Members.find({ uid: Meteor.userId() }, { limit: 1 }).count() <= 0) {
      //return('http://m.memegen.com/fdt0u5.jpg');
    }
    else {
      return Members.findOne({ 'uid': Meteor.userId() }).superuser ? "superuser" : "not superuser"
    }
  }
});

Template.Profile_Page.events({


});



Template.aTicket.helpers({

});

Template.aTicket.events({
  'click .delete': function() {
    if (confirm("Are you sure you wish to delete?")) {
        Ticket.remove(this.ticket._id);
      alert("Ticket removed");
      FlowRouter.go('Profile_Page');
    }
  }
});
