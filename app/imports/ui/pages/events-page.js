/**
 * Created by Jordan on 10/25/16.
 */
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

/* eslint-disable object-shorthand */

Template.Events_Page.helpers({

});

Template.Events_Page.events({


});

Template.Events_Page.rendered = function() {
  $('#carousel').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
  });
}
