'use strict';
module.exports = function(app) {
  var sprint = require('../controllers/sprintController');
  app.route('/add_sprint')
    .post(sprint.add_sprint);
  app.route('/delete_sprint')
    .post(sprint.delete_sprint);
  app.route('/get_all_sprint')
    .get(sprint.get_all_sprint);
  app.route('/update_sprint')
    .post(sprint.update_sprint);
  app.route('/get_current_sprint_of_project')
    .post(sprint.get_current_sprint_of_project);
}
