Aliens-R-Real! An exploration of html and js to display information on a webpage.

Aliens R Real and so is this javascript code! ("The category is...UFO Realness!")

This project presents data about UFO sighting and display them on a webpage in a table that can be filtered according to date of sighting. I started out by using js to loop through the data and append rows for each sighting to the nascent table, using d3 to do so. After that, I looped through again to add the actual data to the row that was appended for it in the previous step.  The html document sources this js code and presents it in a webpage format. 

The filter function for this project sets up a user-input. When input is entered the event of a "filter table" button click happens, the code searches through the data table and check to see if the input information matches the table record. If it does, it goes into the results bucket and is then displayed in the webpage. The 'tbody=""' variable had to be placed outside the call of the function because if it's inside, then it resets with each iteration and only displays the final matching entry in the data table. 

My particular pride in this project is writing the function to reset and display the entire table is no input is entered. Thus, if the user wants to filter by a certain parameter, she can do so and then, when she wants to see the whole table again to figure out what other parameters to search by, she can return to the "placeholder" or null entry and see the whole table again. 
