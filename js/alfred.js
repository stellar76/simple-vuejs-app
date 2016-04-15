// run some alfred functions
$(function() {
    $('.togglenav').on('click', function() {
        $('wrap').toggleClass('toggled');
        $('navbar ul').toggleClass('toggled');
    });
    $('.togglesearch').on('click', function() {
        $('#sr').on('click', function() {
            $(this).toggleClass('toggled');
        });
    });
});
$(document).ready(function() {});
