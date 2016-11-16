/**
 * Created by Jordan on 10/25/16.
 */
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ListOfEvents, EventsSchema } from '../../api/events/list-of-events.js';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';

/* eslint-disable object-shorthand */

Template.Events_Page.helpers({
  eventsList() {        // returns entire recipe list
    return ListOfEvents.find();
  },
  shortDescription(description) {
    return description.split(" ").splice(0, 20).join(" ") + "...";
  },
  inDollars(cents) {
    return (cents / 100).toFixed(2);
  },

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

