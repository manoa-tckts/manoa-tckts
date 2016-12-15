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
  }

});

Template.Users_Page.events({

});

Template.anUser.helpers({
  superUser: function(){
    return Members.findOne({'uid': Meteor.userId()}).superuser;
  },
  notSelf: function(){
    const id = this.user;
    return !(id.uid == Meteor.userId());
  },
  notSelf: function(){
    const id = this.user;
    return !(Members.findOne({'uid': id.uid}).admin);
  },
  color: function(){
    const id = this.user._id;
    return this.user.banned ? "positive" : "negative";
  },
  banText: function(){
    const id = this.user._id;
    return this.user.banned ? "unban" : "ban";
  },
  adminColor: function(){
    const id = this.user._id;
    return this.user.admin ? "negative" : "positive";
  },
  adminText: function(){
    const id = this.user._id;
    return this.user.admin ? "revoke admin" : "make admin";
  }
});

Template.anUser.events({
  'click .ban': function() {
    const id = this.user._id;
    let currentUser = Members.findOne({uid: Meteor.userId()});
    if (!currentUser.admin) {
      alert("You are not authorized!");
    }else if (confirm(this.user.banned ? "Are you sure you with to unban?" : "Are you sure you wish to ban?")) {
      Members.update( this.user._id, {$set: {banned: ! this.user.banned}});
      alert(this.user.banned ? "user is no longer banned" : "user is banned");
    }
  },

  'click .admin': function() {
    const id = this.user._id;
    let currentUser = Members.findOne({uid: Meteor.userId()});
    if (!currentUser.admin) {
      alert("You are not authorized!");
    }else if (confirm(this.user.admin ? "Revoke admin?" : "Make admin?")) {
      Members.update( this.user._id, {$set: {admin: ! this.user.admin}});
      alert(this.user.admin ? "User no longer admin" : "User is now an admin");
    }
  }
});
