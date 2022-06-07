
var totalItems = $('.item').length;
console.log(totalItems)
var currentIndex = $('div.active').index() + 1;

$('.num').html('' + currentIndex + '/' + totalItems + '');

$('#mainSlider').on('slid.bs.carousel', function () {
    currentIndex = $('div.active').index() + 1;
    $('.num').html('' + currentIndex + '/' + totalItems + '');
});
