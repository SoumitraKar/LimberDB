'use strict';
module.exports = function(app) {
  console.log("IN USER ROUT");
  var user = require('../controllers/userController');

  app.route('/add_an_user')
    .post(user.add_an_user);
  app.route('/get_all_users')
    .get(user.get_all_users);
  app.route('/get_user_details_by_email')
    .post(user.get_user_details_by_email);
  app.route('/update_an_user')
    .post(user.update_an_user)
  app.route('/delete_an_user')
    .post(user.delete_an_user);
  app.route('/add_project_to_user')
    .post(user.add_project_to_user);
    /**
  app.route('/add_users_based_on_sprint')
    .post(user.add_users_based_on_sprint)
  app.route('/delete_user')
    .post(user.delete_user)
  app.route('/add_user_to_project')
    .post(user.add_user_to_project)
  app.route('/add_user_to_sprint')
    .post(user.add_user_to_sprint)
  app.route('/add_user_to_story')
    .post(user.add_user_to_story)
  app.route('/add_user_to_task')
    .post(user.add_user_to_task);
    */

  // app.route('/users/:email_id')
  //   .get(todoList.read_a_task)
  //   .put(todoList.update_a_task)
  //   .delete(todoList.delete_a_task);
};
