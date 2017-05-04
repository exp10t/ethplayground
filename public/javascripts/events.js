$(document).ready(function () {
    setInterval(function () {
        $.get("testfunc", function (result) {
            $('#foksu').val(result.message);
        })
    }, 1000);


});


