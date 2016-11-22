/**
 * Created by Jordan on 10/25/16.
 * Edited by Brandon on 11/14/16.
 */


import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { PeopleBuyingTickets } from '../../api/people-buying-tickets/list-of-people-buying-tickets.js';


Template.Sell_Tickets_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('PeopleBuyingTickets');
  });
});

Template.Sell_Tickets_Page.helpers({
  pbtList() {
    return PeopleBuyingTickets.find();
  },
});

/*Template.Sell_Tickets_Page.events({
  'submit .ticket-data-form'(event, instance) {
    event.preventDefault();
    // Get name (text field)
    const newevent = event.target.event.value;
    const date = event.target.date.value;
    const location = event.target.location.value;
    const price = event.target.price.value;
    const negotiable = event.target.negotiable.value;

    const newTicket = { newevent, date, location, price, negotiable };
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newStudentData reflects what will be inserted.
    PBTSchema.clean(newTicket);
    // Determine validity.
    instance.context.validate(newTicket);
    if (instance.context.isValid()) {
      PeopleBuyingTickets.insert(newTicket);
      FlowRouter.go('Profile_Page');
    } else {
      FlowRouter.go('Sell_Tickets_Page');
    }
  },

});
*/
