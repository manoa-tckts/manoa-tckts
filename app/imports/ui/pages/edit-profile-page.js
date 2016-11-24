/**
 * Created by Jordan on 10/25/16.
 */
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

/* eslint-disable object-shorthand */

Template.Edit_Profile_Page.helpers({
  user: function user() {
    return Meteor.user() ? Meteor.user().profile.name : 'No logged in user';
  },
  first: function() {
    return Meteor.user().profile.first;
  },
  last: function() {
    return Meteor.user().profile.last;
  },
  telephone: function() {
    return Meteor.user().profile.telephone;
  },
  email: function() {
    return Meteor.user().profile.email;
  },
  motto: function() {
    return Meteor.user().profile.motto;
  },
  miscellaneous: function() {
    return Meteor.user().profile.miscellaneous;
  },
  picture: function() {
    return Meteor.user().profile.picture;
  },

});

Template.Edit_Profile_Page.events({
  'submit .edit-profile'(event, instance) {
    event.preventDefault();
    const name = Meteor.user().profile.name;
    const first = event.target.first.value;
    const last = event.target.last.value;
    const telephone = event.target.telephone.value;
    const email = event.target.email.value;
    const motto = event.target.motto.value;
    const miscellaneous = event.target.miscellaneous.value;
    const picture = event.target.picture.value;

    const updatedProfile = {picture, name, first, last,telephone, email, motto, miscellaneous};
    console.log(Meteor.user().profile);
    Meteor.users.update(Meteor.userId(), {$set: {profile: updatedProfile}});


    FlowRouter.go('Profile_Page');
  },
});
