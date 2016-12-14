import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/edit', {
  name: 'Edit_Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Profile_Page' });
  },
});

FlowRouter.route('/events', {
  name: 'Events_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Events_Page' });
  },
});

FlowRouter.route('/event/:_id', {
  name: 'Event_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Event_Page' });
  },
});

FlowRouter.route('/sell', {
  name: 'Sell_Tickets_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Sell_Tickets_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};

FlowRouter.route('/profile', {
  name: 'Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Profile_Page' });
  },
});

FlowRouter.route('/editevent', {
  name: 'Edit_Event_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Event_Page' });
  },
});

FlowRouter.route('/temp', {
  name: 'Temp_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Temp_Page' });
  },
});

FlowRouter.route('/profile/:_id', {
  name: 'Profile_User_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Profile_User_Page' });
  },
});


FlowRouter.route('/users', {
  name: 'Users_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Users_Page' });
  },
});