# LIMBER DB ROUTES
## User Routes
1. ###### add_an_user - POST
```sh
{
  "tasks": [],
  "stories": [],
  "sprints": [],
  "projects": [],
  "show_offline": false,
  "name" : "Soumitra Kar123",
  "email_id" : "soumitrakar123@gmail.com",
  "initials" : "SK"
}
```
2. ###### get_all_users - GET
3. ###### get_user_details_by_email - POST
```sh
{
"email_id" : "sksoumitrakar@gmail.com"
}
```
4. ###### update_an_user - POST
```sh
{
  "show_offline": false,
  "name" : "Soumitra Kar123",
  "email_id" : "soumitrakar123@gmail.com",
  "initials" : "SK"
}
```
5. ###### delete_an_user - POST
```sh
{
"email_id" : "sksoumitrakar@gmail.com"
}
```
6. ###### add_project_to_user - POST
```sh
{
  "user_id" : "59bfc16fe233431e28526833",
  "project_id" : "59bfc0490bbdab1c1ceb2bd1"
}
```

## Project Routes

1. ###### add_a_project - POST
```sh
{
  "name": "Project 2",
  "description": "String 2",
  "ScrumMaster": "59bfc108e233431e28526831",
  "memberList": [
  	"59bfc16fe233431e28526833", "59bfbf8c5854da09bcee77c8"
  	]
}
```
2. ###### get_project_details_by_name - POST
```sh
{
"name" : "Project 0"
}
```
3. ###### add_user_to_project - POST
```sh
{
  "user_id" : "59bfc16fe233431e28526833",
  "project_id" : "59bfc0490bbdab1c1ceb2bd1"
}
```
4. ###### get_project_details_by_user - POST (User can either be member or scrum master)
```sh
{
"user_id" : "59bfc108e233431e28526831"
}
```
4. ###### delete_a_project - POST
```sh
{
  "project_id" : "59bfc0a2e233431e28526830"
}
```

Edited by suing https://dillinger.io/