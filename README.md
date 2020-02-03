# Day-Planner
Homework 05

See the deployed app here:
https://ryanellingson.github.io/Day-Planner/

# Project Description

![Screenshot of day planner](https://github.com/RyanEllingson/Day-Planner/blob/master/assets/images/screenshot.JPG)

This app displays a schedule for a typical work day, with 1-hour blocks from 9 AM to 5 PM.  The user may click on any of the fields and type a note in the text box describing a meeting or reminder for that hour, then click on the save button on the right.  The save button will record the note and save it in local storage, so if the user refreshes the page or closes and reloads it, the note will still be in the planner.

The planner displays the current date on the top of the page, and the 1-hour blocks on the planner render in different colors depending on the current time of day - blocks in the past are gray, the current hour is red, and blocks in the future are colored green.

# Techniques and Technologies Used

This app uses dynamically-generated HTML to display the time blocks and their corresponding notes, as well as to efficiently program the functionality of the save buttons on each of the time blocks.  The app also utilizes Moment.js to retrieve the current date and time when the app is loaded.