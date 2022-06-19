var totalItems = $('.item').length;
var currentIndex = $('div.active').index() + 1;

$('.num').html('' + currentIndex + '/' + totalItems + '');

$('#mainSlider').on('slid.bs.carousel', function () {
    currentIndex = $('div.active').index() + 1;
    $('.num').html('' + currentIndex + '/' + totalItems + '');
});

function scrolldiv(divId) {
    window.scrollTo(0,
        findPosition(document.getElementById(divId)));
}
function findPosition(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
        do {
            currenttop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return [currenttop];
    }
}