/**
 * Created by Kyle on 12/4/16.
 */
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Members, MembersSchema } from '../../api/schema/members.js';

Template.Cas_Login_Button.helpers({
  /**
   * @returns {String} Returns the user who's logged in
   */
  user: function user() {
    return Meteor.user() ? Meteor.user().profile.name : 'No logged in user';
  },
});

Template.Cas_Login_Button.events({
  /**
   * Handle the click on the login link.
   * @param event The click event.
   * @returns {boolean} False.
   */
  'click .cas-login': function casLogin(event, instance) {
    event.preventDefault();
    const callback = function loginCallback(error) {
      if (error) {
        console.log(error);
      }
    };

    if (!Meteor.user()) {
      Meteor.loginWithCas(callback);
      FlowRouter.go('Profile_Page');
    }
/*

    if (Meteor.userId()) {
      setTimeout(function() {

      }, 3000);
    }
*/

    return false;
  },

  /**
   * Handle the click on the logout link.
   * @param event The click event.
   * @returns {boolean} False.
   */
  'click .cas-logout': function casLogout(event) {
    FlowRouter.go('Home_Page');
    event.preventDefault();
    Meteor.logout();
    return false;
  },

});