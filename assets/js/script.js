$(document).ready(function () {
    // crate var to display current date
    var dateEl = document.querySelector("#currentDay");
    var today = moment();
    // format date for #currentDay
    dateEl.textContent = today.format("MMM-dddd-YYYY hh:mm");
  
    $(".row").on("click", "button", function () {
      console.log("<button> was clicked");
    });
  // function for save button 
  
  // function to update hour .add and .remove class
  
  // load,  dave and call data from local storage
  
  
  
  });