$(document).ready(function() {
  var windowHeight = $( document ).height();
  var maxHeight = 500;
  $('.welcomeSide').click(function() {
    $(this).hide();
    if (windowHeight <= maxHeight) {
      $('body').toggleClass('resize');
    }
    $('.mainSide').show();
  });

  $('.mainSide__close').click(function() {
    $('.mainSide').hide();
    if (windowHeight <= maxHeight) {
      $('body').toggleClass('resize');
    }
    $('.welcomeSide').show();
  });

  var withoutText = $('.withoutText');
  var withoutText__link = $('.withoutText__link');

  $(withoutText__link).hover(function() {
    var index = $(this).index();
    addIconText(index);
  });

  $(withoutText).mouseleave(function() {
    $(withoutText).removeClass('visited');
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
    $linkTitle = $(currentItem).attr('title');
    $('#withoutText__link__text').html($linkTitle);
    $('#withoutText__link__text').attr('href', $link);
    $('#withoutText__link__text').attr('title', $linkTitle);
    $('#withoutText__link__text').attr('target', '_blank');
    $('#withoutText__link__text').css('display', 'block');
  }
});

