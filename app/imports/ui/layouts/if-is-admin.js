import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Members, MembersSchema } from '../../api/people-buying-tickets/members.js';

/* eslint-disable object-shorthand */

Template.If_Is_Admin.helpers({
  /**
   * @returns {*} True if Meteor is in the process of logging in.
   */
  isAdmin: function isAdmin() {
    return Members.findOne({'uid':Meteor.userId()}).role == 'owner' || Members.findOne({'uid':Meteor.userId()}).role == 'admin';
  },
});
