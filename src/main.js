$(() => {
  console.log("JS ready...");

  const navbar = $('.navbar');
  const navbarLink = $('.nav a');
  const hamburgerLink = $('.hamburger a');
  const project = $('.project');
  const plusLink = $('.plus-link a');
  const toFadeIn = $('.toFadeIn');

  let lastScrollTop = 0;
  let step = 0;

  /**
 * -----------------------------------------------------------------------
 *                          Event: Scroll to links
 * -----------------------------------------------------------------------
 */

  navbarLink.on("click", function (e) {
    e.preventDefault();
    navbarLink.parent().addClass('hidden')
    setTimeout(() => {
      $('html, body').animate({
        scrollTop: $('.' + $(this).attr('href')).offset().top - 25
      }, 1000);
    }, 1);
  });

  /**
 * -----------------------------------------------------------------------
 *                  Event: Navbar hiding on scrolling down
 * -----------------------------------------------------------------------
 */

  $(window).on('scroll', function (e) {
    currentScrollTop = $(this).scrollTop();
    let lastPosition = Number(navbar.css('top').replace('px', ''));
    let newPosition = (lastPosition - step / 4);

    if (currentScrollTop < lastScrollTop) {
      // console.log('scroll up');
      newPosition = (newPosition < 0)
        ? newPosition
        : 0;

    } else {
      // console.log('scroll down');
      navbarLink.parent().addClass('hidden');
      newPosition = (-newPosition < navbar.outerHeight())
        ? newPosition
        : -navbar.outerHeight();
    }

    if ($(window).scrollTop() < 150) {
      // console.log('top of the page area');
      newPosition = 0;
    }

    navbar.css('top', newPosition + 'px');
    step = currentScrollTop - lastScrollTop;
    lastScrollTop = currentScrollTop;
  });

  /**
 * -----------------------------------------------------------------------
 *            Events: add/remove class hidden of navbar sections
 * -----------------------------------------------------------------------
 */

  hamburgerLink.on("click", function (e) {
    e.preventDefault();
    navbarLink.parent().toggleClass('hidden');
  });

  /**
 * -----------------------------------------------------------------------
 *            Events: add/remove class hidden of board elements
 * -----------------------------------------------------------------------
 */

  project.on("mouseover", function (e) {
    e.preventDefault();
    $(this).find(".board").removeClass('hidden');
  });

  project.on("mouseleave", function (e) {
    e.preventDefault();
    $(this).find(".board").addClass('hidden').find('.link').addClass('hidden').parent().find('.plus-link').removeClass('hidden');
  });

  plusLink.on("click", function (e) {
    e.preventDefault();
    $(this).parent().addClass('hidden').parent().find('.link').not('.plus-link').removeClass('hidden');
  });

  /**
 * -----------------------------------------------------------------------
 *                  Event: elements fadeIn on scrolling down
 * -----------------------------------------------------------------------
 */

  $(window).scroll(() => {

    toFadeIn.each(function (i) {
      let bottom_of_window = $(window).scrollTop() + $(window).height();
      let bottom_of_object = $(this).offset().top + $(this).outerHeight();

      if (bottom_of_window > bottom_of_object - 150) {
        $(this).animate({
          'opacity': '1'
        }, 1500);
      }
    });
  });

})
