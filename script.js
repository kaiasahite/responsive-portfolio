$(document).ready(function () {
  $(window).on("load", function () {
    $(".funPics").hide();
    // $(".embed").hide();
    $("#planner").hide();
    $("#homeWork").hide();
    $("#whatsnotapp").hide();
    $(".project1").hide();
    $(".project2").hide();
    $(".homeWork1").hide();
    $(".homeWork2").hide();
    $(".homeWork3").hide();
  });

  $(".pictures").on("click", () => {
    $(".funPics").toggle();
    $(".embed").hide();
    $("#planner").hide();
    $("#whatsnotapp").hide();
    $("#homeWork").hide();
    $(".project1").hide();
    $(".project2").hide();
    $(".homeWork1").hide();
    $(".homeWork2").hide();
    $(".homeWork3").hide();
  });

  $(".resume").on("click", () => {
    $(".embed").toggle();
    $(".funPics").hide();
    $("#planner").hide();
    $("#whatsnotapp").hide();
    $("#homeWork").hide();
    $(".project1").hide();
    $(".project2").hide();
    $(".homeWork1").hide();
    $(".homeWork2").hide();
    $(".homeWork3").hide();
  });

  $(".project").on("click", () => {
    $("#planner").toggle();
    $("#whatsnotapp").toggle();
    $(".funPics").hide();
    $(".embed").hide();
    $("#homeWork").hide();
    $(".project1").toggle();
    $(".project2").toggle();
    $(".homeWork1").hide();
    $(".homeWork2").hide();
    $(".homeWork3").hide();
  });

  $(".homeWork").on("click", () => {
    $("#homeWork").toggle();
    $(".homeWork1").toggle();
    $(".homeWork2").toggle();
    $(".homeWork3").toggle();
    $(".funPics").hide();
    $(".embed").hide();
    $("#planner").hide();
    $("#whatsnotapp").hide();
    $(".project1").hide();
    $(".project2").hide();
  });

  $(".project1").on("click", () => {
    window.open("https://github.com/kaiasahite/FamilyPlanner");
  });

  $(".project2").on("click", () => {
    window.open("https://github.com/kaiasahite/whatsnotapp-messaging");
  });

  $(".homeWork1").on("click", () => {
    window.open("https://github.com/kaiasahite/day-planner");
  });

  $(".homeWork2").on("click", () => {
    window.open("https://github.com/kaiasahite/skateboard-quiz");
  });

  $(".homeWork3").on("click", () => {
    window.open("https://github.com/kaiasahite/password-generator");
  });
});
