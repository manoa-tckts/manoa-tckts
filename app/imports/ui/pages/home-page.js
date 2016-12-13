import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

/* eslint-disable object-shorthand */

Template.Home_Page.onRendered(function () {

  $('#titleFadeRight')
      .transition('hide')
      .transition('fade right', '2.5s')
  ;

  $('#subtitleFadeLeft')
      .transition('hide')
      .transition('fade left', '2.5s')
  ;

  $('#buttonFade')
      .transition('hide')
      .transition('fade', '2.5s')
  ;

  $(function () {
    $(window).scroll(function () {
      $('.fadeInFourth').each(function () {
        let bottomObject = $(this).position().top + $(this).outerHeight();
        let bottomWindow = $(window).scrollTop() + $(window).height();

        bottomWindow = bottomWindow + 100;

        if (bottomWindow > bottomObject) {
          $(this).animate({ opacity: 1 }, 500);
        }
      });
    });
  });

  $(function () {
    $(window).scroll(function () {
      $('.fadeInFifth').each(function () {
        let bottomObject = $(this).position().top + $(this).outerHeight();
        let bottomWindow = $(window).scrollTop() + $(window).height();

        bottomWindow = bottomWindow + 100;

        if (bottomWindow > bottomObject) {
          $(this).animate({ opacity: 1 }, 500);
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

        if (bottomWindow > bottomObject) {
          $(this).animate({ opacity: 1 }, 500);
        }
      });
    });
  });

  $('.special.cards .image').dimmer({
    on: 'hover'
  });

});
