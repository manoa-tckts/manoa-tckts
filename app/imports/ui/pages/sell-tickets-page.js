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
import { Members, MembersSchema } from '../../api/schema/members.js';


Template.Sell_Tickets_Page.helpers({

  events: function(){
    return ListOfEvents.find();
  },
});

Template.Sell_Tickets_Page.events({
  'submit form'(event, instance) {
    event.preventDefault();
    // Get name (text field)
    const eventId = event.target.eventId.value;
    const eventName = ListOfEvents.findOne({_id: eventId}).event;
    const date = new Date();
    const status = 'sell';
    const price = event.target.price.value;
    const owner = Meteor.userId();

    const newTicket = { eventName, date, price , owner, eventId };
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
    Ticket.insert(newTicket);
    FlowRouter.go('Profile_Page');
  },

});
