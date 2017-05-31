$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $("ul#webpage").children("li").first().click(function(){
      $(this).remove();
    });

  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#salad").click(function() {
    $("ul#user").prepend("<li>lettuce</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").prepend("<li>Tomato</li>");
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });
  $("h1").click(function() {
    $("body").addClass("green-background");
    $("body").removeClass("white-background");
  });
  $("p").click(function() {
    $("body").addClass("white-background");
  });
});
