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
  'submit form'(e, instance) {
    e.preventDefault();
    // Get name (text field)
    const event = e.target.event.value;
    const location = e.target.location.value;
    const date = e.target.date.value;
    const image = e.target.image.value;

    const newEvent = { event, date, location , image };
    // Clear out any old validation errors.
    //instance.context.resetValidation();
    // Invoke clean so that newStudentData reflects what will be inserted.
    //TicketSchema.clean(newTicket);
    // Determine validity.
    /*instance.context.validate(newTicket);
     if (instance.context.isValid()) {
     Ticket.insert(newTicket);
     FlowRouter.go('Profile_Page');
     } else {
     FlowRouter.go('Sell_Tickets_Page');
     }
     */
    ListOfEvents.insert(newEvent);
    FlowRouter.go('Events_Page');
  },
});

Template.anEvent.helpers({

  listOfEvents: function(){
    return ListOfEvents.find();
  },

  numTickets: function(event){
    return Ticket.find({eventId: event._id}).count();

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
    const id=this.event._id;
    const eventName = this.event.event;
     let currentUser = Members.findOne({uid: Meteor.userId()});
     if(!currentUser.admin){
     alert("You are not authorized!");
     }
     if(confirm("Are you sure you wish to delete?")){

       Ticket.find({eventId: id}).forEach(function (doc) {
         Ticket.remove({_id: doc._id});
       });
       ListOfEvents.remove(id);
       alert("Event removed");
       FlowRouter.go('Edit_Event_Page');
     }

  }
});