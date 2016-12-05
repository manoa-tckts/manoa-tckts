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

      /* delay for the redirect */
      var delay = 2; /* time is in seconds */
      var redirectDelay = setInterval(function () {
        delay = delay - 1;

        if (delay <= 0) {
          clearInterval(redirectDelay);
          FlowRouter.go('Events_Page');
        }
      }, 1000);
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

      bottomWindow = bottomWindow + 100;
      /* lower the number for longer delay */

      if (bottomWindow > bottomObject) {
        $(this).animate({ opacity: 1 }, 500);
        /* larger number = longer duration of the animation */
      }

    });
  });
});

$(function () {
  $(window).scroll(function () {
    $('.fadeInSixth').each(function () {
      var bottomObject = $(this).position().top + $(this).outerHeight();
      var bottomWindow = $(window).scrollTop() + $(window).height();

      bottomWindow = bottomWindow + 300;
      /* lower the number for longer delay */

      if (bottomWindow > bottomObject) {
        $(this).animate({ opacity: 1 }, 500);
        /* larger number = longer duration of the animation */
      }

    });
  });
});

$(function () {
  $(window).scroll(function () {
    $('.slideLeft').each(function () {
      var bottomObject = $(this).position().top + $(this).outerHeight();
      var bottomWindow = $(window).scrollTop() + $(window).height();

      bottomWindow = bottomWindow + 100;

      if (bottomWindow > bottomObject) {
        $(this).animate({ left: ($(window).innerWidth() / 20) + "px", opacity: 1 }, 800);
      }
    });
  });
});

/*
 $(function () {
 $(window).scroll(function () {
 $('.slideUp').each(function () {
 var bottomObject = $(this).position().top + $(this).outerHeight();
 var bottomWindow = $(window).scrollTop() + $(window).height();

 bottomWindow = bottomWindow + 300;

 if (bottomWindow > bottomObject) {
 $(this).animate({ bottom: '300px', opacity: 1 }, 2000);
 }
 });
 });
 });*/
