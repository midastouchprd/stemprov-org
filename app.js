$(function () {
  $('#showMailChimp').click(() => {
    $('.form-overlay').fadeIn(400);

    $('#mc-embedded-subscribe').click(() => {
      $('.form-overlay').fadeOut(400);
    })
  })

  $(window).scroll((event) => {
    $('.background-image img').css('transform', `translateY(${-(($(document).scrollTop()) / 10)}px)`)
  })
});
