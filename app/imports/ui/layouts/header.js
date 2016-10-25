import { Template } from 'meteor/templating';

Template.Header.onCreated(function appBodyOnCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.Header.helpers({
  // placeholder: if you display dynamic data in your layout, you will put your template helpers here.
  isHome: function isHome() {
    return Meteor.Router.current().route.getName()  === 'Home_Page';
  },
});

Template.Header.events({
  // placeholder: if you add a form to this top-level layout, handle the associated events here.
});

