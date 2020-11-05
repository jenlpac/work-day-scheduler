// Add today's date
var today = moment().format('dddd, MMMM Do, YYYY');
$("#currentDay").html(today);

// Save event data on button click
$(document).ready(function() {
    
    // Save button was clicked
    $(".saveBtn").click(function () {
        // Get event and time values
        var event = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        console.log(event);
        console.log(time);

        // Save event and time values
        localStorage.setItem(event, time);
    })


})