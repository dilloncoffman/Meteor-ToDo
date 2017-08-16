import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
  //uses usernames instead of emails
  passwordSignupFields: 'USERNAME ONLY',
});