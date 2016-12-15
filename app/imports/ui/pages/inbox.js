import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Members, MembersSchema } from '../../api/schema/members.js';
import {Checkboxes, CheckboxesSchema} from '../../api/schema/checkboxes.js';
import {Emails} from '../../api/schema/emails.js';
import {Phonenumbers} from '../../api/schema/phonenumbers.js';
import { Ticket, TicketSchema, ListOfEvents } from '../../api/schema/schemas.js';
import {Inboxmessages} from '../../api/schema/inboxmessages.js';
import {Messages} from '../../api/schema/messages.js';

Template.Inbox.helpers({
  listOfInboxusers(fieldName){

    return Messages.find({'reciever': Members.findOne({'uid': Meteor.userId()}).username});
  },
});

Template.Inbox.events({

  'click .delete'(event, instance){
    event.preventDefault();
    Messages.remove(FlowRouter.getParam('_id'));
    FlowRouter.go('Inbox');
  },
});