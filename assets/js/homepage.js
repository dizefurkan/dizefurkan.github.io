$(document).ready(function() {
  var windowHeight = $( document ).height();
  var maxHeight = 500;

  renderSocialMediaItems();

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

function renderSocialMediaItems() {
  const container = $('#withoutText__link__container');
  socialmedia.forEach(function(media) {
    const div = document.createElement("div");
    const icon = document.createElement("i");
    div.setAttribute('class', 'withoutText__link linkHover');
    div.setAttribute('title', media.title);
    div.setAttribute('data-link', media.link);

    const iconClass = 'withoutText__link__icon ' + media.icon;
    icon.setAttribute('class', iconClass);

    div.appendChild(icon);
    container.append(div);
  });
}

const socialmedia = [
  {
    title: 'eyeem.com/u/dizefurkan',
    link: 'https://www.eyeem.com/u/dizefurkan',
    icon: 'fas fa-camera',
  },
  {
    title: 'instagram/dizefurkan',
    link: 'https://instagram.com/dizefurkan',
    icon: 'fab fa-instagram',
  },
  {
    title: 'dizefurkan@gmail.com',
    link: 'mailto:dizefurkan@gmail.com',
    icon: 'fas fa-envelope',
  },
  {
    title: 'medium.com/@dizefurkan',
    link: 'https://medium.com/@dizefurkan',
    icon: 'fab fa-medium-m',
  },
  {
    title: 'soundcloud.com/dizefurkan',
    link: 'https://soundcloud.com/dizefurkan',
    icon: 'fab fa-soundcloud',
  },
  {
    title: 'spotify.com/user/dizefurkan',
    link: 'https://open.spotify.com/user/dizefurkan',
    icon: 'fab fa-spotify',
  },
  {
    title: 'pinterest.com/dizefurkan',
    link: 'https://pinterest.com/dizefurkan',
    icon: 'fab fa-pinterest-p',
  },
  {
    title: 'twitter.com/dizefurkan',
    link: 'https://twitter.com/dizefurkan',
    icon: 'fab fa-twitter',
  },
  {
    title: 'unsplash.com/dizefurkan',
    link: 'https://www.unsplash.com/dizefurkan',
    icon: 'fas fa-camera-retro',
  },
];
