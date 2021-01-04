// from data.js
//Am I using tableData or just data as the argument in all this?


var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
//console.log(data);

// Step 1: Loop Through `data` and console.log each UFO report object 

// data.forEach(function(data) {
//        console.log(data);
//  });

// // Step 2:  Use d3 to append one table row `tr` for each UFO report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
// data.forEach(function(data) {
//   console.log(data);
//   var row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to console.log each UFO report value
// data.forEach(function(data) {
//   console.log(data);
//   var row = tbody.append("tr");

//   Object.entries(data).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Step 4: Use d3 to append 1 cell per UFO report value (date/time, city, state, country, shape, and comment)
// data.forEach(function(data) {
//   console.log(data);
//   var row = tbody.append("tr");

//   Object.entries(data).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the UFO report object
//     var cell = row.append("td");
//   });
// });

// // Step 5: Use d3 to update each cell's text with
// // UFO report values (date/time, city, state, country, shape, and comment)
data.forEach(function(data) {
  console.log(data);
  var row = tbody.append("tr");
  Object.entries(data).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the UFO report object
    var cell = row.append("td");
    cell.text(value);
  });
});

// BONUS: Refactor to use Arrow Functions!
data.forEach((data) => {
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });



function eventTracker(){
    // Sets value property of the the input tag 
    var input = d3.select("input").property("value"); 
    //var text = document.querySelector("input"); 

    //Checks to see if the data in each row is the same as the input. If it is, it goes into the "result" bucket. 
    if (input === "") {
        var result = data;        
    } else {
        var result = data.filter(d => d.datetime === input );
    };
    
    var placeholder="1/11/2011"

    var reset = data.filter(d => d.datetime === placeholder );
    //This clears out the previous cache of rows of data/sightings so that only the new ones freshly in the "result" 
    //bucket can be displayed on the page. If we don't do this, then the "result" bucket returns will just append
    //on to the bottom of the list, not in their own list. It has to be inside the eventTracker function or else
    //it will empty out all the tbody data and the page display will be empty, too.
    tbody.html("");

//This is a function that populates the "results" bucket returns into the freshly-emptied "tbody" and sends it
//to populate the web page. 
    result.forEach(function(result) {
        
        var row = tbody.append("tr");
        Object.entries(result).forEach(function([key, value]) {
        
          // Append a cell to the row for each value
          // in the UFO report object
          var cell = row.append("td");
          cell.text(value);
        });
        
      });
      };
    

d3.selectAll("#filter-btn").on("click", eventTracker);



   