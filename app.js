$(function () {
  $('#showMailChimp').click(() => {
    $('.form-overlay').fadeIn(400);

    $('#mc-embedded-subscribe').click(() => {
      $('.form-overlay').fadeOut(400);
    })
  })

  $(window).scroll((event) => {
    let scrollPos = $(document).scrollTop();
    console.log(scrollPos);

    let bgimg = $('.background-image img');
    let newY = scrollPos / 10;

    bgimg.css('transform', `translateY(${-(newY)}px)`)
  })
});
