'use strict';
module.exports = function(app) {
  var story = require('../controllers/storyController');
  app.route('/add_story')
    .post(story.add_story);
  app.route('/delete_story')
    .post(story.delete_story);
  app.route('/get_all_story')
    .get(story.get_all_story);
  app.route('/update_story')
    .post(story.update_story);
  app.route('/get_story_by_assignee')
    .post(story.get_story_by_assignee);
}
