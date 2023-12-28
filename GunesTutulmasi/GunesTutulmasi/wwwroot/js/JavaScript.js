$(function () {
    $(".ay").draggable({
        drag: function (event, ui) {
            var sol = ui.position.left;
            var ust = ui.position.top;

            if (sol > 200 && sol < 600 && ust > 200 && ust < 600) {
                if ((sol > 200 && sol < 225) || (sol < 600 && sol > 575)) {
                    $("body").css("background-color", "#3aa2c4");
                } else if ((sol > 225 && sol < 250) || (sol < 575 && sol > 550)) {
                    $("body").css("background-color", "#348fad");
                } else if ((sol > 250 && sol < 275) || (sol < 550 && sol > 525)) {
                    $("body").css("background-color", "#286f87");
                    $(".ay").css("background-color", "#529baf");
                } else if ((sol > 275 && sol < 300) || (sol < 525 && sol > 500)) {
                    $("body").css("background-color", "#215d72");
                    $(".ay").css("background-color", "#468799");
                } else if ((sol > 300 && sol < 325) || (sol < 500 && sol > 475)) {
                    $("body").css("background-color", "#352172");
                    $(".ay").css("background-color", "#3b7687");
                } else if ((sol > 325 && sol < 350) || (sol < 475 && sol > 450)) {
                    $("body").css("background-color", "#2d1b63");
                    $(".ay").css("background-color", "#2f6170");
                } else if ((sol > 350 && sol < 375) || (sol < 450 && sol > 425)) {
                    $("body").css("background-color", "#21134c");
                    $(".ay").css("background-color", "#264f5b");
                } else if ((sol > 375 && sol < 385) || (sol < 425 && sol > 415)) {
                    $("body").css("background-color", "#2F0921");
                    $(".ay").css("background-color", "#1b3b44");
                } else if ((sol > 385 && sol < 400) || (sol < 415 && sol > 400)) {
                    $("body").css("background-color", "#000");
                    $(".ay").css("background-color", "#0d1e23");
                } else {
                    $("body").css("background-color", "#45B5DA");
                }
            }
        }
    });
});
