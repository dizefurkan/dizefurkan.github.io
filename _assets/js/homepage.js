$(document).ready(function() {
  $('.welcomeSide').click(function() {
    $(this).hide();
    $('.mainSide').show();
  });

  $('.mainSide__close').click(function() {
    $('.mainSide').hide();
    $('.welcomeSide').show();
  });
});

