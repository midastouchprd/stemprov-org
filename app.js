$(function () {
  $('#showMailChimp').click(() => {
    $('.form-overlay').fadeIn(400);

    $('#mc-embedded-subscribe').click(() => {
      $('.form-overlay').fadeOut(400);
    })
  })
});
