$(function () {
    $('#burgerButtonShow').on('click', function () {
        $('.header__top__burger-content-box').addClass('active');
    });
    $('#burgerButtonEscape').on('click', function () {
        $('.header__top__burger-content-box').removeClass('active');
    });
});