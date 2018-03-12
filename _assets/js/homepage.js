$(document).ready(function() {
  $('.welcomeSide').click(function() {
    $(this).hide();
    $('.mainSide').show();
  });

  $('.mainSide__close').click(function() {
    $('.mainSide').hide();
    $('.welcomeSide').show();
  });

  var withoutText = $('.withoutText');
  var withoutText__link = $('.withoutText__link');

  $(withoutText).hover(function() {
    $(withoutText__link).hover(function() {
      var index = $(this).index();
      addIconText(index);
    });
  });

  $(withoutText).mouseleave(function() {
    $(this).removeClass('visited');
    $('#withoutText__link__text').html('');
    $('#withoutText__link__text').css('display', 'none');
    $(withoutText__link).removeClass('visited');
  });

  function addIconText (index) {
    $(withoutText).addClass('visited');
    $(withoutText__link).removeClass('visited');
    var currentItem = $(withoutText__link)[index];
    $(currentItem).addClass('visited');
    $link = $(currentItem).attr('data-link');
    $('#withoutText__link__text').html($link);
    $('#withoutText__link__text').attr('href', $link);
    $('#withoutText__link__text').attr('title', $link);
    $('#withoutText__link__text').css('display', 'block');
  }
});

