$(document).ready(() => {
  console.log("JS ready...");

  const navbarLink = $('.nav a');
  const hamburgerLink = $('.hamburger a');
  const project = $('.project');
  const plusLink = $('.plus-link a');
  const myPhoto = $('.image img');

  // $(window).scroll(() => {
  //   let height = $(window).scrollTop();
  //   // console.log(height);
  //   if (height > 150) {
  //     myPhoto.fadeIn('slow');
  //   } else {
  //     myPhoto.fadeOut();
  //   }
  // });

  // Event: Scroll to links

  navbarLink.on("click", function (e) {
    e.preventDefault();
    navbarLink.parent().addClass('hidden')
    setTimeout(() => {
      $('html, body').animate({
        scrollTop: $('.' + $(this).attr('href')).offset().top - 25
      }, 1000);
    }, 1);
  });

  console.log('dfsdf');

  // Functions: add/remove class hidden of navbar sections

  hamburgerLink.on("click", function (e) {
    e.preventDefault();
    navbarLink.parent().toggleClass('hidden');
  });

  // Functions: add/remove class hidden of board elements

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

})
