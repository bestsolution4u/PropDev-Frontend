$(document).ready(function () {
    $(".close-popup").on("click", function () {
        $("body").addClass("hidden-popup");
    });
    $(".open-popup").on("click", function () {
        $("body").removeClass("hidden-popup");
    });

    $(".add-action").on("click", function () {
        $("body").removeClass("hidden-popup");
    });
});