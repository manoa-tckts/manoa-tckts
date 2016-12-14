import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { UserData, ListOfEvents, Ticket, UserDataSchema, EventsSchema, TicketSchema } from '../../api/schema/schemas.js';
import { Members } from '../../api/schema/members.js';


Template.Edit_Event_Page.helpers({


  listOfEvents: function(){
    return ListOfEvents.find();
  }});

Template.Edit_Event_Page.events({

});

Template.anEvent.helpers({

  listOfEvents: function(){
    return ListOfEvents.find();
  },

  numTickets: function(event){
    return Ticket.find({eventName: event.event}).count();

  },

  checkExpired: function(event){
    const currentDate = new Date();
    const eventDate = event.date;
    return eventDate < currentDate;
  },

  findOwner: function(ticket){
    //const owner = Meteor.users.findOne({_id: ticket.owner}).profile.first;
    const owner = Members.findOne({uid: ticket.owner}).first;
    return owner;
  }

});

Template.anEvent.events({

  'click .delete': function(){
    console.log(this.event._id);

     let currentUser = Members.findOne({uid: Meteor.userId()});
     if(currentUser.role !== "admin"){
     alert("You are not authorized!");
     }
     console.log(currentUser.role);
     if(confirm("Are you sure you wish to delete?")){
       ListOfEvents.remove(this.event._id);
     alert("Event removed");
     FlowRouter.go('Edit_Event_Page');
     }

  }
});