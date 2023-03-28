var all_images = ["apple", "aubergine", "avocado", "bagel", "baguette", "banana", "birthday-cake", "broccoli", "cake", "candy", "carrot", "cheese", 
"cherries", "chocolate-bar", "cookie", "corn", "croissant", "cucumber", "doughnut", "french-fries", "fried-egg", "grapes", "hamburger", "hotdog", "kiwi", 
"lollipop", "orange", "pancakes", "pear", "pepper", "pie", "pineapple", "pizza", "popcorn", "potato", "pretzel", "salad", "sandwich", "strawberry", "tinned-tomatoes", 
"watermelon"];

var started = false;
var score = 0;
var correct_answer = "";
var user_answer = "";
var game_over = false;
var counter;
var interval;

$(document).keypress(function() {
  if (!started) {
    clearTimeout(interval);
    document.getElementById("counter").innerHTML = "Time remaining: 60 seconds";
    score = 0;
    $(".images-hidden").removeClass("images-hidden");
    $(".card-back").removeClass("card-back");
    $(".card-back-text").addClass("card-back-text-hidden");
    $("h2").text("Score: " + score);
    $("#counter").removeClass("counter-hidden");
    startCountdown(60);
    generate_cards();
    started = true;
    console.log(correct_answer);
  }
});

    $("img").click(function() {

        if(!game_over){

        var user_answer = $(this).attr("src");
    
        if(user_answer == "images/" + correct_answer + ".png"){
            score++;
            $("h2").text("Score: " + score);
            generate_cards();
        }}
    });

function randomize(values) {
    let index = values.length, randomIndex;
      
        // While there remain elements to shuffle.
        while (index != 0) {
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * index);
          index--;
      
          // And swap it with the current element.
          [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
        }
      
        return values;
      }

function generate_cards() {
    
    randomize(all_images);

    let selected_images = [];

    for (let i=0; i<16; i++) {selected_images.push(all_images[i])}

    for (let i=0; i<16; i++) {document.querySelector(".img-" + (i+1)).setAttribute("src", "images/" + selected_images[i] + ".png")};

  

    var duplicate_card = selected_images[Math.floor(Math.random()*8)];

    document.querySelector(".img-" + (Math.floor(Math.random()*8)+9)).setAttribute("src", "images/" + duplicate_card + ".png")
    correct_answer = duplicate_card

};

function startCountdown(seconds) {
 
    counter = seconds;

    interval = setInterval(() => {
      console.log(counter);
      document.getElementById("counter").innerHTML = "Time remaining: " + counter + " seconds";
      counter--;
        
      if (counter < 0)  {
       game_over = true;
       resetGame();
       showGameOverScreen();
      }
    }, 1000);
  }

function showGameOverScreen() {
    $("h2").text("Game over. Your final score is " + score + ". Press any key to restart.");
    $("#counter").addClass("counter-hidden");
    
}

function resetGame() {
    counter = 60;
    started = false;
    game_over = false;
   


}





    