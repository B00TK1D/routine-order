
$(document).ready(function() {
    var templateScript = Handlebars.compile($('#template').html());
    $('#template').remove();
    $.ajax({
        cache: false,
        url: "data.json",
        dataType: "json",
        success: function(data) {
            $(document.body).append(templateScript(data));
        }
    });
});