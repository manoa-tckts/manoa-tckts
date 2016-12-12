import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Members, MembersSchema } from '../../api/schema/members.js';
import {Checkboxes, CheckboxesSchema} from '../../api/schema/checkboxes.js';

/* eslint-disable object-shorthand */

/*
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
    Meteor.users.update(Meteor.userId(), {$set: {profile: updatedProfile}});

    FlowRouter.go('Profile_Page');
  },
});
*/
/**
 * Created by Jordan on 10/25/16.
 */


/* eslint-disable object-shorthand */

Template.Edit_Profile_Page.helpers({


  first: function() {
    /*
    console.log(Members.find({uid: Meteor.userId()}, {limit: 1}).count() > 0);
     console.log(Meteor.userId());
     console.log(Members.findOne({'first': 'Brent'}));
     */

    if(Members.find({uid: Meteor.userId()}, {limit: 1}).count() > 0){return Members.findOne({'uid': Meteor.userId()}).first;}
    else {return '';}
  },
  last: function() {
    if(Members.find({uid: Meteor.userId()}, {limit: 1}).count() > 0){return Members.findOne({'uid': Meteor.userId()}).last;}
    else {return '';}
  },
  telephone: function() {
    if(Members.find({uid: Meteor.userId()}, {limit: 1}).count() > 0){return Members.findOne({'uid': Meteor.userId()}).phone;}
    else {return '';}
  },
  email: function() {
    if(Members.find({uid: Meteor.userId()}, {limit: 1}).count() > 0){return Members.findOne({'uid': Meteor.userId()}).email;}
    else {return '';}
  },
  motto: function() {
    if(Members.find({uid: Meteor.userId()}, {limit: 1}).count() > 0){return Members.findOne({'uid': Meteor.userId()}).motto;}
    else {return '';}
  },
  miscellaneous: function() {
    if(Members.find({uid: Meteor.userId()}, {limit: 1}).count() > 0){return Members.findOne({'uid': Meteor.userId()}).miscellaneous;}
    else {return '';}
  },
  picture: function() {
    if(Members.find({uid: Meteor.userId()}, {limit: 1}).count() > 0){return Members.findOne({'uid': Meteor.userId()}).picture;}
    else {return '';}
  },

});

Template.Edit_Profile_Page.events({
  'submit .edit-profile'(event, instance) {
    event.preventDefault()

    if(Members.find({uid: Meteor.userId()}, {limit: 1}).count() > 0){
      /*console.log(Members.findOne({'uid':Meteor.userId()}).first);
       console.log(Members.findOne({'uid':Meteor.userId()})); */
      const uid = Meteor.userId();
      const username = Meteor.user().profile.name;
      const first = event.target.first.value;
      const last = event.target.last.value;
      const phone = event.target.telephone.value;
      const email = event.target.email.value;
      const motto = event.target.motto.value;
      const miscellaneous = event.target.miscellaneous.value;
      const picture = event.target.picture.value;
      const role = 'owner';
      const banned = false;
      const phonecheckbox = false;
      const emailcheckbox = false;
      console.log(Meteor.user().profile.name);
      if(Checkboxes.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
        console.log('Checkboxes collection is being created');
        const data = {uid, username, phonecheckbox, emailcheckbox};
        console.log(data);
        CheckboxesSchema.clean(data);
        Checkboxes.insert(data);
        console.log('in Checkboxes collection:');
        console.log(Checkboxes.findOne({uid: Meteor.userId()}));
      }
      const profile = {uid, username, first, last, phone, email, motto, miscellaneous, picture, role, banned};
      Members.update(Members.findOne({'uid': Meteor.userId()})._id, { $set: profile});
      console.log('in Members collection:');
      console.log(Members.findOne({uid: Meteor.userId()}));
      FlowRouter.go('Profile_Page');
    }
    else{
      const uid = Meteor.userId();
      const username = Meteor.user().profile.name;
      const first = event.target.first.value;
      const last = event.target.last.value;
      const phone = event.target.telephone.value;
      const email = event.target.email.value;
      const motto = event.target.motto.value;
      const miscellaneous = event.target.miscellaneous.value;
      const picture = event.target.picture.value;
      const role = 'owner';
      const banned = false;
      const profile = {uid, username, first, last, phone, email, motto, miscellaneous, picture, role, banned};
      console.log('testing false');
      console.log(profile);
      MembersSchema.clean(profile);
      Members.insert(profile);
      console.log('test');
      console.log(Members.findOne({uid: Meteor.userId()}));
      console.log('test');
      FlowRouter.go('Profile_Page');
    }
    /* console.log(_.size(Members));
     console.log(Meteor.userId());
     console.log(Members.findOne({uid: Meteor.userId()}));
     console.log(Members); */

    /* const name = Meteor.user().profile.name;
     const first = event.target.first.value;
     const last = event.target.last.value;
     const telephone = event.target.telephone.value;
     const email = event.target.email.value;
     const motto = event.target.motto.value;
     const miscellaneous = event.target.miscellaneous.value;
     const picture = event.target.picture.value;

     const updatedProfile = {picture, name, first, last,telephone, email, motto, miscellaneous};
     Meteor.users.update(Meteor.userId(), {$set: {profile: updatedProfile}});


     FlowRouter.go('Profile_Page');*/
  },
});
