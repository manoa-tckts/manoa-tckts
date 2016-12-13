/**
 * Created by Jordan on 10/25/16.
 */
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { UserData, ListOfEvents, Tickets, UserDataSchema, EventsSchema, TicketSchema } from '../../api/schema/schemas.js';



/* eslint-disable object-shorthand */

Template.Events_Page.helpers({
  eventsList() {
    return ListOfEvents.find();
  },
  shortDescription(description) {
    return description.split(" ").splice(0, 20).join(" ") + "...";
  },
  inDollars(cents) {
    return (cents / 100).toFixed(2);
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

Template.Events_Page.events({


});

Template.Events_Page.rendered = function() {
  $('#carousel').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
  });
}

