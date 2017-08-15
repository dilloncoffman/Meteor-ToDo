import { Template } from 'meteor/templating';

import './body.html'

Template.body.helpers({
  tasks: [
    { text: 'Wash dishes' },
    { text: 'Work out' },
    { text: 'Learn some code' },
    { text: 'Task 4' }
  ],
});