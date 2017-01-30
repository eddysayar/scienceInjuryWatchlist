$(document).ready(function() {
    $("#submit").on("click", function(e) {

        e.preventDefault();

        var date = $("#dateInput").val();
        var injury = $("#injuryInput").val();
        var description = $("#descriptionInput").val();
        console.log("running POST method.");

        $.ajax({
            type: "POST",
            url: "../php/submit.php",
            dataType: "json",
            data: { type: "input", dateInput: date, injuryInput: injury, descriptionInput: description },
            success: function(response) {
                alert(JSON.stringify(response));
            },
            error: function(err) {
                alert(JSON.stringify(err));
            }
        });

    });
});