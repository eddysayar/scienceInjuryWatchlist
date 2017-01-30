$("#dataForm").submit(function(event) {
    event.preventDefault();
    submitForm();
});

function submitForm() {
    var date = $("#dateInput").val();
    var injury = $("#injuryInput").val();
    var description = $("#descriptionInput").val();

    $ajax({
        type: "POST",
        url: "server.js",
        dataType: "json",
        data: { type: "input", dateInput: date, injuryInput: injury, descriptionInput: description },
        success: function(response) {
            alert(JSON.stringify(response));
        },
        error: function(err) {
            alert(JSON.stringify(err));
        }
    });
}

function formSuccess() {

}