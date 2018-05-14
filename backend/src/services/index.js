const users = require('./users/users.service.js');
const profiles = require('./profiles/profiles.service.js');
const uploads = require('./uploads/uploads.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(profiles);
  app.configure(uploads);
};
