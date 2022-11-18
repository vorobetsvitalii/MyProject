$(document).ready(function () {
    $('.clearvisa').click(function () {
        if (this.classList.contains('click')) {
            $('.cardnumber').hide(1000)
            $('.cardinformation').hide(1000)
            $('.smallcardtext').hide(1000)
            $(this).removeClass('click');
        }
        else{
            $('.cardnumber').show(1000)
            $('.cardinformation').show(1000)
            $('.smallcardtext').show(1000)
            $(this).addClass('click');
        }
    })
})