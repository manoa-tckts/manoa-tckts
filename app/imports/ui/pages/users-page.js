import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { UserData, ListOfEvents, Ticket, UserDataSchema, EventsSchema, TicketSchema } from '../../api/schema/schemas.js';
import { Members } from '../../api/schema/members.js';


Template.Users_Page.helpers({

  listOfUsers: function(){
    return Members.find();
  }});

Template.Users_Page.events({

});

Template.anUser.helpers({

});

Template.anUser.events({
  'click .ban': function() {
    const id = this.user._id;
    let currentUser = Members.findOne({uid: Meteor.userId()});
    if (currentUser.role !== "admin") {
      alert("You are not authorized!");
    }
    if (confirm("Are you sure you wish to ban?")) {
      Members.update( this.user._id, {$set: {banned: ! this.user.banned}});
      console.log(this.user.banned);
    }
  }
});
