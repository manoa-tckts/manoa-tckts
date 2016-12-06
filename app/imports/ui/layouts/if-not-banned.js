import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Members, MembersSchema } from '../../api/schema/members.js';

/* eslint-disable object-shorthand */

Template.If_Not_Banned.helpers({
  /**
   * @returns {*} True if Meteor is in the process of logging in.
   */
  Banned: function Banned() {
    return Members.findOne({'uid':Meteor.userId()}).banned;
  },
});
