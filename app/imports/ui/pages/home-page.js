import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

/* eslint-disable object-shorthand */

Template.Home_Page.helpers({
  /**
   * @returns {String} Returns the user who's logged in
   */
  user: function user() {
    return Meteor.user() ? Meteor.user().profile.name : 'No logged in user';
  },
});

Template.Home_Page.events({
  /*
   *
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
    }
    return false;
  },

});






/*
 * Javascript for animations
 */
$(function () {
  $(window).scroll(function () {
    $('.fadeInFourth').each(function () {
      var bottomObject = $(this).position().top + $(this).outerHeight();
      var bottomWindow = $(window).scrollTop() + $(window).height();

      bottomWindow = bottomWindow + 100; /* lower the number for longer delay */

      if (bottomWindow > bottomObject) {
        $(this).animate({ opacity: 1 }, 600); /* larger number = longer duration of the animation */
      }

    });
  });
});

$(function () {
  $(window).scroll(function () {
    $('.fadeInFifth').each(function () {
      var bottomObject = $(this).position().top + $(this).outerHeight();
      var bottomWindow = $(window).scrollTop() + $(window).height();

      bottomWindow = bottomWindow + 100; /* lower the number for longer delay */

      if (bottomWindow > bottomObject) {
        $(this).animate({ opacity: 1 }, 600); /* larger number = longer duration of the animation */
      }

    });
  });
});

$(function () {
  $(window).scroll(function () {
    $('.fadeInSixth').each(function () {
      var bottomObject = $(this).position().top + $(this).outerHeight();
      var bottomWindow = $(window).scrollTop() + $(window).height();

      bottomWindow = bottomWindow + 200; /* lower the number for longer delay */

      if (bottomWindow > bottomObject) {
        $(this).animate({ opacity: 1 }, 500); /* larger number = longer duration of the animation */
      }

    });
  });
});

/*$(function () {
 $(window).scroll(function () {
 $('.slideRight').each(function () {
 var bottomObject = $(this).position().top + $(this).outerHeight();
 var bottomWindow = $(window).scrollTop() + $(window).height();
 var centerWidth = $(window).innerWidth() / 2 + "px";

 bottomWindow = bottomWindow + 200;

 if (bottomWindow > bottomObject) {
 $(this).animate({ left: center_of_width, opacity: "show" }, 1500);
 }
 });
 });
 });*/
