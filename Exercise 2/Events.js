$(document).ready(function () {
  $("#fourthdiv2").hide();
  $("#thirdtext").hide();
  $("span").text("Welcome to this page!");

  $("#two").css("background-color", "yellow");
  $("#three").css("background-color", "yellow");

  $("#seconddiv").click(function () {
    $("#firsttext").toggle()
  });

  $("#thirddiv").click(function () {
    $("#secondtext").toggle()
  });

  $("#fourthdiv").click(function () {
    $("#thirdtext").show()
    $("#fourthdiv").hide();
    $("#fourthdiv2").show();
  });

  $("#fourthdiv2").click(function () {
    $("#thirdtext").hide()
    $("#fourthdiv2").hide();
    $("#fourthdiv").show();
  });

})
