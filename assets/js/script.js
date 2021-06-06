$(document).ready(function () {

  
    // crate var to display current date
   var today = moment().format("MM dddd YYYY hh:mm");
    
    //use momnet and jquery for today date in header
    // format date for #currentDay
    $("#currentDay").text(today);
  // storage task to storage
    // function for save button 
    $(".row").on("click", "button", function () {
    var saveTask = $(this).siblings("textarea").val();
    var taskID = $(this).siblings("textarea").attr("id");
    localStorage.setItem(taskID, saveTask);
      console.log(taskID, saveTask);
    });
  

  // load,  dave and call data from local storage
    var hour = moment().hours()

    $(".description").each(function(){
      var colHour=parseInt(
        $(this).attr("id")
      )
      if(colHour < hour){
        $(this).addClass("past");
      } else if 
      (colHour === hour) {
      $(this).addClass("present");
      } else{
        $(this).addClass("future")
      }

    })
    // get from storage all items
    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));



  // load tasks
 // loadTasks();
});