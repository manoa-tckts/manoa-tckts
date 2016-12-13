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
  },
  checknewuser: function(){
    if(Members.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
      const uid = Meteor.userId();
      const username = Meteor.user().profile.name;
      const first = '';
      const last = '';
      const phone = '';
      const email = '';
      const motto = '';
      const miscellaneous = '';
      const picture = '';
      const role = 'owner';
      const banned = false;
      const profile = {uid, username, first, last, phone, email, motto, miscellaneous, picture, role, banned};
      MembersSchema.clean(profile);
      Members.insert(profile);
    }
    if(Phonenumbers.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
      const uid = Meteor.userId();
      const username = Meteor.user().profile.name;
      const phone = '';
      const numbers = {uid, username, phone};
      PhonenumbersSchema.clean(numbers);
      Phonenumbers.insert(numbers);
    }
    if(Emails.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
      const uid = Meteor.userId();
      const username = Meteor.user().profile.name;
      const email = '';
      const mails = {uid, username, email};
      EmailsSchema.clean(mails);
      Emails.insert(mails);
    }
    if(Checkboxes.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
      const uid = Meteor.userId();
      const username = Meteor.user().profile.name;
      const phonecheckbox = false;
      const emailcheckbox = false;
      const boxes = {uid, username, phonecheckbox, emailcheckbox};
      CheckboxesSchema.clean(boxes);
      Checkboxes.insert(boxes);
    }
  },
});

Template.Sell_Tickets_Page.events({
  'submit form'(event, instance) {
    event.preventDefault();
    // Get name (text field)
    const eventName = event.target.eventName.value;
    const date = new Date();
    const status = 'sell';
    const price = event.target.price.value;
    const negotiable = event.target.negotiable.value;
    const owner = Meteor.userId();

    const newTicket = { eventName, date, price , owner };
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
