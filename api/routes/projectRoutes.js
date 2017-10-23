'use strict';
module.exports = function(app) {
  var project = require('../controllers/projectController');

  app.route('/add_a_project')
    .post(project.add_project);
  app.route('/get_all_project')
    .get(project.get_all_project);
  app.route('/get_project_details_by_id')
    .post(project.get_project_details_by_id);
  app.route('/add_user_to_project')
    .post(project.add_user_to_project);
  app.route('/get_project_details_by_user')
    .post(project.get_project_details_by_user);
  app.route('/delete_a_project')
    .post(project.delete_a_project);
  app.route('/remove_user_from_project')
    .post(project.remove_user_from_project);

};
