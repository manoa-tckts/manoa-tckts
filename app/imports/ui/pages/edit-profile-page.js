import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Members, MembersSchema } from '../../api/schema/members.js';
import { Phonenumbers, PhonenumbersSchema } from '../../api/schema/phonenumbers.js';
import { Emails, EmailsSchema } from '../../api/schema/emails.js';
import {Usercheckboxes, UsercheckboxesSchema} from '../../api/schema/usercheckboxes.js';

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
    if(Phonenumbers.find({uid: Meteor.userId()}, {limit: 1}).count() > 0){return Phonenumbers.findOne({'uid': Meteor.userId()}).phone;}
    else {return '';}
  },
  email: function() {
    if(Emails.find({uid: Meteor.userId()}, {limit: 1}).count() > 0){return Members.findOne({'uid': Meteor.userId()}).email;}
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
      console.log('Members database has been created');
      console.log('initializing variables');
      const uid = Meteor.userId();
      const username = Meteor.user().profile.name;
      const first = event.target.first.value;
      const last = event.target.last.value;
      var phone = event.target.telephone.value;
      var email = event.target.email.value;
      const motto = event.target.motto.value;
      const miscellaneous = event.target.miscellaneous.value;
      const picture = event.target.picture.value;
      const role = 'owner';
      const banned = false;
      console.log('finished initializing variables');
      console.log('checking and creating databases');
      if(Phonenumbers.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
        const phonenumbers = {uid, username, phone};
        console.log('creating phonenumbers database');
        console.log('insterting phone numbers');
        console.log(phonenumbers);
        Phonenumbers.insert(phonenumbers);
        console.log(Phonenumbers.findOne({'uid': Meteor.userId()}));
      }
      console.log('phonenumbers data base exists:');
      console.log(Phonenumbers.findOne({'uid': Meteor.userId()}));
      if(Emails.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
        const emaildata = {uid, username, email};
        console.log('creating emails database');
        console.log('insterting email');
        console.log(emaildata);
        Emails.insert(emaildata);
        console.log(Emails.findOne({'uid': Meteor.userId()}));
      }
      console.log('email data base exists:');
      console.log(Emails.findOne({'uid': Meteor.userId()}));
      /* Problem */
      if(Usercheckboxes.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
        const emailvalue = 'false';
        const phonevalue = 'false';
        const usercheckboxdata = { uid, username, emailvalue, phonevalue };
        console.log('creating usercheckbox database');
        console.log('insterting usercheckbox');
        console.log(usercheckboxdata);
        Usercheckboxes.insert(usercheckboxdata);
        console.log(Usercheckboxes.findOne({'uid': Meteor.userId()}));
      }
/* end Problem*/  
      console.log('finiished checking and creating databases');
    }
    else{
      const uid = Meteor.userId();
      const username = Meteor.user().profile.name;
      const first = event.target.first.value;
      const last = event.target.last.value;
      var phone = event.target.telephone.value;
      var email = event.target.email.value;
      const motto = event.target.motto.value;
      const miscellaneous = event.target.miscellaneous.value;
      const picture = event.target.picture.value;
      const role = 'owner';
      const banned = false;
      if(Phonenumbers.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
        const phonenumbers = {uid, username, phone};
        console.log('insterting phone numbers');
        console.log(phonenumbers);
        Phonenumbers.insert(phonenumbers);
        console.log(Phonenumbers.findOne({'uid': Meteor.userId()}));
      }
      if(Emails.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
        const emails = {uid, username, email};
        console.log('insterting emails');
        console.log(emails);
        Emails.insert(emails);
        console.log(Emails.findOne({'uid': Meteor.userId()}));
      }
      if(Usercheckboxes.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
        const phonecheckbox = false;
        const emailcheckbox = false;
        const usercheckboxes = {uid, username, phonecheckbox, emailcheckbox};
        Usercheckboxes.insert(usercheckboxes);
        console.log('inside of usercheckboxes');
        console.log(Usercheckboxes.findOne({'uid': Meteor.userId()}));
      }
      Phonenumbers.findOne({'uid': Meteor.userId()}).phone.update(phone);
      console.log('phone number: ');
      console.log(Phonenumbers.findOne({'uid': Meteor.userId()}).phone);
      if (Usercheckboxes.findOne({'uid': Meteor.userId()}).phone === true){
        phone = Phonenumbers.findOne({'uid': Meteor.userId()}).phone;
      }
      else {
        phone = 'N/A';
      }
      Emails.findOne({'uid': Meteor.userId()}).email.update(email);
      if (Usercheckboxes.findOne({'uid': Meteor.userId()}).emamil === true){
        email = Emails.findOne({'uid': Meteor.userId()}).email;
      }
      else {
        email = 'N/A';
      }
      const profile = {uid, username, first, last, phone, email, motto, miscellaneous, picture, role, banned};
      console.log(profile);
      MembersSchema.clean(profile);
      Members.insert(profile);
      console.log(Members.findOne({uid: Meteor.userId()}));
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
  'change .emailcheckbox'(event, instance){

  },
  'change .phonecheckbox'(event, instance){

  },
});
