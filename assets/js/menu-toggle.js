$(document).ready(function ($) {
    $(".toggle-item").click(function () {
        $(".secondary", this).toggle();
    });
});