/**
 * Created by Jordan on 10/25/16.
 * Edited by Brandon on 11/14/16.
 */
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Ticket, TicketSchema, ListOfEvents } from '../../api/schema/schemas.js';
import { Meteor } from 'meteor/meteor';


Template.Sell_Tickets_Page.helpers({

  events: function(){
      return ListOfEvents.find();
  }
});

Template.Sell_Tickets_Page.events({
  'submit form'(event, instance) {
    event.preventDefault();
    // Get name (text field)
    //const eventName = event.target.eventName.value;
    const eventName = event.target.eventName.value;
    const date = new Date();
    //const status = 'sell';
    const price = event.target.price.value;
    //const negotiable = event.target.negotiable.value;
    const owner = Meteor.userId();

    const newTicket = { date, price, owner, eventName};
    // Clear out any old validation errors.
    //instance.context.resetValidation();
    // Invoke clean so that newStudentData reflects what will be inserted.
    //TicketSchema.clean(newTicket);
    // Determine validity.
    //instance.context.validate(newTicket);
    //if (instance.context.isValid()) {
      Ticket.insert(newTicket);
      FlowRouter.go('Profile_Page');
    //} else {
     // FlowRouter.go('Sell_Tickets_Page');
    //}
  },

});
