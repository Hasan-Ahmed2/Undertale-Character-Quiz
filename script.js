var counter = 0;


$(".button1").click(function () {
      counter = counter + 1;
    $(".counting").text("Button clicked " + counter + " times");
    
    var number = $(".number").val();
    var agreement = $(".agreement").val();
    
    if (number <=5 && agreement.toLowerCase() === "yes") {
       $(".result").text("You are Asgore!");
       $(".character-image").append("<img src=https://lh3.googleusercontent.com/proxy/AQDOBt-RZHuGKZM_613ZcI2vovpA11N0wjA1o_ZIUjN2gQMUBt_CvsL3MlxO9Z2-MGGfYcZpA_4chbb0N8wPzYOXTbb0HhLR>");
    }
    else if (number <=5 && agreement.toLowerCase() === "no") {
       $(".result").text("You are Toriel!");
       $(".character-image").append("<img src=https://p.kindpng.com/picc/s/183-1835563_undertale-toriel-overworld-sprite-hd-png-download.png>");
    }
    else if (number >=6 && agreement.toLowerCase() === "yes") {
       $(".result").text("You are Undyne!");
       $(".character-image").append("<img src=https://i.pinimg.com/originals/6b/70/a0/6b70a04447721e02f8af6b8dceeb30ef.jpg>");
    }
    else if (number >=6 && agreement.toLowerCase() === "no") {
       $(".result").text("You are Flowey!");
       $(".character-image").append("<img src=https://assets.puzzlefactory.pl/puzzle/220/983/original.jpg>");
    }
  
    
    
});

