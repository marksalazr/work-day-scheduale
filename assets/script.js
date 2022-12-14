// Add code to display the current date in the header of the page
var todaysDate = dayjs().format('dddd ' + 'MMM D, YYYY');
$('#currentDay').text(todaysDate);


var saveBtn = $('.saveBtn');


$(document).ready(function () {

// Add a listener for click events on the save button.
  $('.saveBtn').on('click', function () {
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr("id");

// save input in local storage
    localStorage.setItem(time, text);
  })

})

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));

// Add code to apply the past, present, or future class to each 
// time block by comparing the id to the current hour

var present = dayjs().hour();
var timeBlock = $('.time-block');

function updateClasses() {
  $('.time-block').each(function () {
    var timeInBlock = parseInt($(this).attr('id').split('-')[1]);

    if (timeInBlock < present) {
      $(this).addClass('past');
    }
    else if (timeInBlock === present) {
      $(this).addClass('present');
    }
    else {
      $(this).addClass('future');

    }
  }

  );


}

updateClasses();

