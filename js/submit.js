$(document).ready(function() {
    $("#submit").click(function() {
        var date = $("#dateInput").val();
        var injury = $("#injuryInput").val();
        var description = $("descriptionInput").val();
        var location = $("locationInput").val();

        $.post("submit.php", {

        });

    });
});