// Add today's date
var today = moment().format('dddd, MMMM Do, YYYY');
$("#currentDay").html(today);

// Save event data on button click
$(document).ready(function() {

    // Save button was clicked
    $(".saveBtn").click(function () {
        // Get event and time data
        var time = $(this).parent().attr("id");
        var event = $(this).siblings(".description").val();
        console.log(time);
        console.log(event);

        // Save event and time data
        localStorage.setItem(time, event);
    })

    // Get data from localStorage
    $("#8am .description").val(localStorage.getItem("8am"));
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));

    // Audit time to update section styling
    function auditTime() {
        // Set current time

        // Loop through time blocks

        // Set variable for each time block

        // Style variable time block for past

        // Style variable time block for present

        // Style variable time block for future
    }
})