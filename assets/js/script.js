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
    $("#08-hund .description").val(localStorage.getItem("08-hund"));
    $("#09-hund .description").val(localStorage.getItem("09-hund"));
    $("#10-hund .description").val(localStorage.getItem("10-hund"));
    $("#11-hund .description").val(localStorage.getItem("11-hund"));
    $("#12-hund .description").val(localStorage.getItem("12-hund"));
    $("#13-hund .description").val(localStorage.getItem("13-hund"));
    $("#14-hund .description").val(localStorage.getItem("14-hund"));
    $("#15-hund .description").val(localStorage.getItem("15-hund"));
    $("#16-hund .description").val(localStorage.getItem("16-hund"));
    $("#17-hund .description").val(localStorage.getItem("17-hund"));

    // Audit time to update section styling
    function auditTime() {
        // Set current time
        var nowTime = moment().hours();
        // console.log(nowTime);
        // Loop through time blocks
        $(".time-block").each(function() {
            // Set variable for each time block
            var timeBlock = parseInt($(this).attr("id").split("-")[0]);
            // console.log(timeBlock);
            
            if (timeBlock < nowTime) {
                // Style variable time block for past
                $(this).children(".description").removeClass("future");
                $(this).children(".description").removeClass("present");
                $(this).children(".description").addClass("past");
            }
            else if (timeBlock === nowTime) {
                // Style variable time block for present
                $(this).children(".description").removeClass("past");
                $(this).children(".description").removeClass("future");
                $(this).children(".description").addClass("present");
            }
            else {
                // Style variable time block for future
                $(this).children(".description").removeClass("past");
                $(this).children(".description").removeClass("present");
                $(this).children(".description").addClass("future");
            }
        });
    }

    auditTime();

    var interval = setInterval(auditTime, (1000 * 60) * 10);
})