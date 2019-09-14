// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
// Build a table every time we call the table
// Clear out table first every time is called
function masterTable(Data1) {
   tbody.html("");
   Data1.forEach((ufoRow) => {
       var row = tbody.append("tr");
       // only need value since we already have the keys set-up
       Object.values(ufoRow).forEach((value) => {
           var cell = row.append("td");
           cell.text(value);
       })
   })
}

masterTable(tableData);

var press = d3.select("#filter-btn");

press.on("click", function() {
   d3.event.preventDefault();
   var date = d3.select("#datetime").property("value");
   var state = d3.select("#state").property("value");
   
   
   alert(date);
   alert(state);
   
   
   
   var filteredData = tableData
   
   if(date) {
    filteredData = filteredData.filter(row => row.datetime === date);
   }
   if(state) {
    filteredData = filteredData.filter(row => row.state === state);
   }
   
   alert(filteredData)
   
   masterTable(filteredData)
})