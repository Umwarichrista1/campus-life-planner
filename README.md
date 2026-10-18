what planner needs to record in table
 id | have to be unique 
 title|name of task
 dueDate | year-month-day(YYYY-MM-DD) 
 duration|time needed in minutes
 tag | Category: study | (letters, spaces, hyphens)
 createdAt| when you added info
 updatedAt | when you changed data

 ,,Accessibility plan

Skip link: a "Skip to content" link is the first thing a keyboard user reaches.
Visible focus:every button, link and input shows a clear outline when selected with Tab.
 Labels: every form field has a label connected to its input.
Live messages:form errors and the weekly cap message are announced to screen readers (polite when under the cap, assertive when over it).
Keyboard only: every feature (add, edit, delete, search, sort, import, export) works without a mouse.
Colour contrast: text and background colours are checked with the WebAIM Contrast Checker.


#Campus lifer planner
this is for planning task of campus life, all it does is as person you add your task as title,due date, duration and tag then this be stored in the where is easy to sort and track the task.
this App is Built with HTML,CSS,Javascript and json to store data 

live site : https://umwarichrista1.github.io/campus-life-planner/
demo video:https://youtu.be/fsXT3WwH_Pc
Github : https://github.com/Umwarichrista1/campus-life-planner

#features
we have first have dashboard with totals , top tag and 7 days chart
 -form that checks regex and error messages

- Add,edit and delete tasks
-live regex that searchn with highlights matches
-sort by title,date or duration
-weekly cap with live message
-minutes or hours display
-saved in localStorage
with also JSON Export and import

#by example of Regex rules

title : have to start with letter that means that you can't start with space 
due date : it acceptable example (year-month-day)
duration : it accept numbers only but you cant start with 0 . e.g(1.6 or 20)
Tag : accepts words without numbers e.g(web) 
Repeated word : truck double words and warn about wrong typo

#keyboard
with out mouse we use tab and shift tab for backward this are for moving through the page
and Enter/space to press button
arrow keys for change a dropdown

#Accessibility
this app works with keyboard with skip the links,provides live message , you can edit and delete. 

#run the tests 
Use Liver server then open tests.html it checks and show pass or fail for each check then also open live server with index.html this direct you to user interface 