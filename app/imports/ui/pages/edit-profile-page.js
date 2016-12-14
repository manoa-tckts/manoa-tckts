import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Members, MembersSchema } from '../../api/schema/members.js';
import {Checkboxes, CheckboxesSchema} from '../../api/schema/checkboxes.js';
import {Emails} from '../../api/schema/emails.js';
import {Phonenumbers} from '../../api/schema/phonenumbers.js';

/* eslint-disable object-shorthand */

/*
 Template.Edit_Profile_Page.helpers({
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
  emailchecked: function() {
    return Members.findOne({'uid': Meteor.userId()}).emailcheckbox;
  },
  phonechecked: function() {
    return Members.findOne({'uid': Meteor.userId()}).phonecheckbox;
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
      var phone = event.target.telephone.value;
      var email = event.target.email.value;
      const motto = event.target.motto.value;
      const miscellaneous = event.target.miscellaneous.value;
      const picture = event.target.picture.value;
      var role = 'regular';
      const banned = false;
      const phonecheckbox = event.target.contactphone.checked;
      const emailcheckbox = event.target.contactemail.checked;
      console.log(Meteor.user().profile.name);

      if(event.target.admin.checked){
        role = 'admin'
      }

      /*
      if(Checkboxes.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
        console.log('Checkboxes collection is being created');
        const data = {uid, username, phonecheckbox, emailcheckbox};
        console.log(data);
        CheckboxesSchema.clean(data);
        Checkboxes.insert(data);
        console.log('in Checkboxes collection:');
        console.log(Checkboxes.findOne({uid: Meteor.userId()}));
      }
      if(Emails.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
        const emails = {uid, username, email};
        console.log('creating Emails database');
        console.log('insterting emails');
        console.log(emails);
        Emails.insert(emails);
        console.log(Emails.findOne({'uid': Meteor.userId()}));
      }
      if(Phonenumbers.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
        const phonenumbers = {uid, username, phone};
        console.log('creating phonenumbers database');
        console.log('insterting phone numbers');
        console.log(phonenumbers);
        Phonenumbers.insert(phonenumbers);
        console.log(Phonenumbers.findOne({'uid': Meteor.userId()}));
      }
      console.log('finiished checking and creating databases');
      const phonedata = {uid, username, phone};
      Phonenumbers.update(Phonenumbers.findOne({'uid':Meteor.userId()})._id, { $set: phonedata});
      console.log('phone number: ');
      console.log(Phonenumbers.findOne({'uid': Meteor.userId()}))
      if (Checkboxes.findOne({'uid': Meteor.userId()}).phonecheckbox === true){
        phone = Phonenumbers.findOne({'uid': Meteor.userId()}).phone;
      }
      else {
        phone = 'N/A';
      }
      const emaildata = {uid, username, email};
      Emails.update(Emails.findOne({'uid':Meteor.userId()})._id, { $set: emaildata});
      if (Checkboxes.findOne({'uid': Meteor.userId()}).emailcheckbox === true){
        email = Emails.findOne({'uid': Meteor.userId()}).email;
      }
      else {
        email = 'N/A';
      }

      */
      const profile = {uid, username, first, last, phone, email, motto, miscellaneous, picture, role, banned, phonecheckbox, emailcheckbox};
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
      var phone = event.target.telephone.value;
      var email = event.target.email.value;
      const motto = event.target.motto.value;
      const miscellaneous = event.target.miscellaneous.value;
      const picture = event.target.picture.value;
      var role = 'regular';
      const banned = false;
      const phonecheckbox = event.target.contactphone.checked;
      const emailcheckbox = event.target.contactemail.checked;
      console.log(Meteor.user().profile.name);

      if(event.target.admin.checked){
        role = 'admin'
      }

      /*
      if(Checkboxes.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
        console.log('Checkboxes collection is being created');
        const data = {uid, username, phonecheckbox, emailcheckbox};
        console.log(data);
        CheckboxesSchema.clean(data);
        Checkboxes.insert(data);
        console.log('in Checkboxes collection:');
        console.log(Checkboxes.findOne({uid: Meteor.userId()}));
      }
      if(Emails.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
        const emails = {uid, username, email};
        console.log('creating Emails database');
        console.log('insterting emails');
        console.log(emails);
        Emails.insert(emails);
        console.log(Emails.findOne({'uid': Meteor.userId()}));
      }
      if(Phonenumbers.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
        const phonenumbers = {uid, username, phone};
        console.log('creating phonenumbers database');
        console.log('insterting phone numbers');
        console.log(phonenumbers);
        Phonenumbers.insert(phonenumbers);
        console.log(Phonenumbers.findOne({'uid': Meteor.userId()}));
      }
      console.log('finiished checking and creating databases');
      const phonedata = {uid, username, phone};
      Phonenumbers.update(Phonenumbers.findOne({'uid':Meteor.userId()})._id, { $set: phonedata});
      console.log('phone number: ');
      console.log(Phonenumbers.findOne({'uid': Meteor.userId()}))
      if (Checkboxes.findOne({'uid': Meteor.userId()}).phonecheckbox === true){
        phone = Phonenumbers.findOne({'uid': Meteor.userId()}).phone;
      }
      else {
        phone = 'N/A';
      }
      const emaildata = {uid, username, email};
      Emails.update(Emails.findOne({'uid':Meteor.userId()})._id, { $set: emaildata});
      if (Checkboxes.findOne({'uid': Meteor.userId()}).emailcheckbox === true){
        email = Emails.findOne({'uid': Meteor.userId()}).email;
      }
      else {
        email = 'N/A';
      }

      */
      const profile = {uid, username, first, last, phone, email, motto, miscellaneous, picture, role, banned, phonecheckbox, emailcheckbox};
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
      /*
  'change .emailchkbox'(event, instance){
    console.log('emailcheckbox changed: ');
    console.log(event.target.checked);
    const uid = Meteor.userId();
    const username = Meteor.user().profile.name;
    var phonecheckbox = false;
    var emailcheckbox = false;
    var data = {uid, username, phonecheckbox, emailcheckbox};
    if(Checkboxes.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
      console.log('Checkboxes collection is being created');
      console.log(data);
      CheckboxesSchema.clean(data);
      Checkboxes.insert(data);
      console.log('in Checkboxes collection:');
      console.log(Checkboxes.findOne({uid: Meteor.userId()}));
    }
    else{
      console.log('else');
      phonecheckbox = Checkboxes.findOne({uid: Meteor.userId()}).phonecheckbox;
      emailcheckbox = event.target.checked;
      data = {uid, username, phonecheckbox, emailcheckbox};
      console.log(data);
      Checkboxes.update(Checkboxes.findOne({'uid': Meteor.userId()})._id, { $set: data});
      console.log(Checkboxes.findOne({uid: Meteor.userId()}));
    }
  },


  'change .phonechkbox'(event, instance){
    console.log('phonecheckbox changed: ');
    console.log(event.target.checked);
    const uid = Meteor.userId();
    const username = Meteor.user().profile.name;
    var phonecheckbox = false;
    var emailcheckbox = false;
    var data = {uid, username, phonecheckbox, emailcheckbox};
    if(Checkboxes.find({uid: Meteor.userId()}, {limit: 1}).count() <= 0){
      console.log('Checkboxes collection is being created');
      console.log(data);
      CheckboxesSchema.clean(data);
      Checkboxes.insert(data);
      console.log('in Checkboxes collection:');
      console.log(Checkboxes.findOne({uid: Meteor.userId()}));
    }
    else{
      console.log('else');
      phonecheckbox = event.target.checked;
      emailcheckbox = Checkboxes.findOne({uid: Meteor.userId()}).emailcheckbox;
      data = {uid, username, phonecheckbox, emailcheckbox};
      console.log(data);
      Checkboxes.update(Checkboxes.findOne({'uid': Meteor.userId()})._id, { $set: data});
      console.log();
      console.log(Checkboxes.findOne({uid: Meteor.userId()}));
    }
  },
  */

});


Template.Edit_Profile_Page.onRendered(function () {
  $('.menu .item')
      .tab()
  ;

  $('.tabular.menu .item').tab();

  $('.menu .item').on('click', function() {
    $('.menu .item').removeClass('active');
    $(this).addClass('active');
  });

  $('.right .dropdown')
      .dropdown({
        direction: 'right'
      })
  ;

});