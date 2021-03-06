import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Members, MembersSchema } from '../../api/schema/members.js';
import {Messages} from '../../api/schema/messages.js';

/**
 * Created by Jordan on 10/25/16.
 */


/* eslint-disable object-shorthand */
Template.Edit_Profile_Page.helpers({


  first: function() {

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

      const uid = Meteor.userId();
      const username = Meteor.user().profile.name;
      const first = event.target.first.value;
      const last = event.target.last.value;
      var phone = event.target.telephone.value;
      var email = event.target.email.value;
      const motto = event.target.motto.value;
      const miscellaneous = event.target.miscellaneous.value;
      const picture = event.target.picture.value;
      const banned = false;
      const phonecheckbox = event.target.contactphone.checked;
      const emailcheckbox = event.target.contactemail.checked;

      const profile = {uid, username, first, last, phone, email, motto, miscellaneous, picture, role, banned, phonecheckbox, emailcheckbox};
      Members.update(Members.findOne({'uid': Meteor.userId()})._id, { $set: profile});
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
      const superuser = Meteor.user().profile.name == "dumlaoj";
      const admin = Meteor.user().profile.name == "dumlaoj";
      const banned = false;
      const phonecheckbox = event.target.contactphone.checked;
      const emailcheckbox = event.target.contactemail.checked;

      const profile = {uid, username, first, last, phone, email, motto, miscellaneous, picture, role, banned, phonecheckbox, emailcheckbox, superuser, admin};
      MembersSchema.clean(profile);
      Members.insert(profile);
      FlowRouter.go('Profile_Page');
    }
  },

});

/*

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

});*/
