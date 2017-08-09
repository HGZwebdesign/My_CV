document.addEventListener("DOMContentLoaded", () => {
  console.log("JS ready...");

  const nav = $('.nav');
  const hamburger = $('.hamburger');

  // Event: Scroll to links

  $(document).on("click", ".nav a", function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $('.' + $(this).attr('href')).offset().top
    }, 1000);

  });

  // Functions: add/remove classes of navbar sections

  $(document).on("click", ".hamburger", function (event) {

    nav.toggleClass('hidden');
  });

})
