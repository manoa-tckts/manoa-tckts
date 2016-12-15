import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Members, MembersSchema } from '../../api/schema/members.js';

/* eslint-disable object-shorthand */

Template.If_New_User.helpers({
  /**
   * @returns {*} True if Meteor is in the process of logging in.
   */
  isNewUser: function() {
    if(!Members.findOne({uid: Meteor.userId()})){
      alert("You are a first time user. You will be directed to the edit profile page");
      FlowRouter.go('Edit_Profile_Page');
    }else{
      return true;
    }
  },
});
