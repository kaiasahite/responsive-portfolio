$(document).ready(function () {
  $(window).on("load", function () {
    $(".funPics").hide();
    // $(".embed").hide();
    $("#planner").hide();
    $("#homeWork").hide();
    $(".project1").hide();
    $(".homeWork1").hide();
    $(".homeWork2").hide();
  });

  $(".pictures").on("click", () => {
    $(".funPics").toggle();
    $(".embed").hide();
    $("#planner").hide();
    $("#homeWork").hide();
    $(".project1").hide();
    $(".homeWork1").hide();
    $(".homeWork2").hide();
  });

  $(".resume").on("click", () => {
    $(".embed").toggle();
    $(".funPics").hide();
    $("#planner").hide();
    $("#homeWork").hide();
    $(".project1").hide();
    $(".homeWork1").hide();
    $(".homeWork2").hide();
  });

  $(".project").on("click", () => {
    $("#planner").toggle();
    $(".funPics").hide();
    $(".embed").hide();
    $("#homeWork").hide();
    $(".project1").toggle();
    $(".homeWork1").hide();
    $(".homeWork2").hide();
  });

  $(".homeWork").on("click", () => {
    $("#homeWork").toggle();
    $(".homeWork1").toggle();
    $(".homeWork2").toggle();
    $(".funPics").hide();
    $(".embed").hide();
    $("#planner").hide();
    $(".project1").hide();
  });

  $(".project1").on("click", () => {
    window.open("https://github.com/JonDnv/FamilyPlanner");
  });

  $(".homeWork1").on("click", () => {
    window.open("https://github.com/kaiasahite/day-planner");
  });

  $(".homeWork2").on("click", () => {
    window.open("https://github.com/kaiasahite/skateboard-quiz");
  });
});
