import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

/* eslint-disable object-shorthand */

/*
Template.Home_Page.helpers({
  /!**
   * @returns {String} Returns the user who's logged in
   *!/
  user: function user() {
    return Meteor.user() ? Meteor.user().profile.name : 'No logged in user';
  },
});*/


/*
Template.Home_Page.events({
  /!*
   *
   *!/

  'click .cas-login': function casLogin(event, instance) {
    event.preventDefault();
    const callback = function loginCallback(error) {
      if (error) {
        console.log(error);
      }
    };

    if (!Meteor.user()) {
      Meteor.loginWithCas(callback);
      /!* delay for the redirect *!/
    }
    return false;

    var delay = 2;
    var redirectDelay = setInterval(function () {
      delay = delay - 1;

      if (delay <= 0) {
        clearInterval(redirectDelay);
        FlowRouter.go('Events_Page');
      }
    }, 1000);

  },

  'click .cas-logout': function casLogout(event) {
    FlowRouter.go('Home_Page');
    event.preventDefault();
    Meteor.logout();
    return false;
  },

});
*/

/*
 * Javascript for animations
 */
$(function () {
  $(window).scroll(function () {
    $('.fadeInFourth').each(function () {
      let bottomObject = $(this).position().top + $(this).outerHeight();
      let bottomWindow = $(window).scrollTop() + $(window).height();

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
      let bottomObject = $(this).position().top + $(this).outerHeight();
      let bottomWindow = $(window).scrollTop() + $(window).height();

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
      let bottomObject = $(this).position().top + $(this).outerHeight();
      let bottomWindow = $(window).scrollTop() + $(window).height();

      bottomWindow = bottomWindow + 100;

      if (bottomWindow > bottomObject) {
        $(this).animate({ left: ($(window).innerWidth() / 20) + "px", opacity: 1 }, 800);
      }
    });
  });
});
