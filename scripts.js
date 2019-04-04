const instance = new TypeIt('#intro-typewriter', {
    speed: 25,
    waitUntilVisible: true,
  }).go();

  // The twpewriter is currently broken. Is it because of the timeout?  Or maybe it's that it is rendered
  // above the location in the viewport at which the elements that are hidden?

// Implement a feature so that when someone reloads the projects/home page, they see that final state in which 
// the intro content is static and deprioritized relative to the projects list.

// Set a timeout feature such that the typewriter bit transitions into a bio blurb, revealing and making 
// way for the projects page beneath it. Work on the transition animation. The point is that 
// the home page is currently just a fancy container for the typewriter, not worth really having a page for that. 
// treat the twpewriter as an intro transition antimation that leads directly to projects
// $("#main-content-after-twpewriter").hide();
// $("#static-intro-text").hide();

// setTimeout(function () {
//   $("#intro-typewriter").fadeOut();
//   $("#main-content-after-twpewriter").fadeIn();
//   $("#static-intro-text").fadeIn();
// }, 1800);