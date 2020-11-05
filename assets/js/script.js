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
    $("#8-am .description").val(localStorage.getItem("8-am"));
    $("#9-am .description").val(localStorage.getItem("9-am"));
    $("#10-am .description").val(localStorage.getItem("10-am"));
    $("#11-am .description").val(localStorage.getItem("11-am"));
    $("#12-pm .description").val(localStorage.getItem("12-pm"));
    $("#1-pm .description").val(localStorage.getItem("1-pm"));
    $("#2-pm .description").val(localStorage.getItem("2-pm"));
    $("#3-pm .description").val(localStorage.getItem("3-pm"));
    $("#4-pm .description").val(localStorage.getItem("4-pm"));
    $("#5-pm .description").val(localStorage.getItem("5-pm"));

    // Audit time to update section styling
    function auditTime() {
        // Set current time
        var now = moment().hour();
        console.log(now);

        // Loop through time blocks
        $(".time-block").each(function () {
            // Set variable for each time block
            var timeBlock = parseInt($(this).attr("id").split(".")[1]);
            
                if(timeBlock < now) {
                    // Style variable time block for past
                    
                    // Style variable time block for present

                    // Style variable time block for future
                }
            
        })

        
    }

    auditTime();
})