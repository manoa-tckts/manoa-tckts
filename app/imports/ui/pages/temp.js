import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Members, MembersSchema } from '../../api/schema/members.js';
import {Checkboxes, CheckboxesSchema} from '../../api/schema/checkboxes.js';
import {Emails} from '../../api/schema/emails.js';
import {Phonenumbers} from '../../api/schema/phonenumbers.js';

Template.Temp_Page.helpers({
listOfUsers(){
  console.log(Meteor.userId());
  return Members.find();
}
});

Template.Temp_Page.events({


});