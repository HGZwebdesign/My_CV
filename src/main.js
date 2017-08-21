$(document).ready(() => {
  console.log("JS ready...");

  const nav = $('.nav');
  const hamburger = $('.hamburger');
  const project = $('.project');
  const plus_link = $('.plus_link');

  // Event: Scroll to links

  $(document).on("click", ".nav a", function (event) {
    event.preventDefault();
    nav.addClass('hidden')
    setTimeout(() => {
      $('html, body').animate({
        scrollTop: $('.' + $(this).attr('href')).offset().top - 25
      }, 1000);
    }, 1);
  });

  // Functions: add/remove class hidden of navbar sections

  $(document).on("click", ".hamburger a", function (event) {
    event.preventDefault();
    nav.toggleClass('hidden');
  });

  // Functions: add/remove class hidden of board elements

  $(document).on("mouseover", ".project", function (event) {
    event.preventDefault();
    $(this).find(".board").removeClass('hidden');
  });

  $(document).on("mouseleave", ".project", function (event) {
    event.preventDefault();
    $(this).find(".board").addClass('hidden').find('.link').addClass('hidden').parent().find('.plus_link').removeClass('hidden');
  });

  $(document).on("click", ".plus_link a", function (event) {
    event.preventDefault();
    $(this).parent().addClass('hidden').parent().find('.link').not('.plus_link').removeClass('hidden');
  });

})
