$(".goal").text("Your goal: ");

var goal=0;
var currentScore=0;
var wins=0;
var losses=0;
var mushArray=[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgnYiZ1lmS2wZDTnha-zi3OraUQmOqFWH-QN8r1ApcO18qAzQR",
    "https://www.fieldandstream.com/sites/fieldandstream.com/files/styles/1000_1x_/public/images/2017/02/morelhome.jpg?itok=aX9etVsU&fc=50,50",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-If2Nl-Qw9bZja6K0601cUrEKkwZfUNIp396g-XUjL0q173JZ",
    "https://i.ebayimg.com/images/i/301813128761-0-1/s-l1000.jpg"
];
var target = 0;
var mushies;
var points=0;
var value=0;

function start() {
    
    target=0;
    currentScore=0;
    target = Math.floor(Math.random()*101) + 19;
    console.log(target);
    $('.goal').text("Your goal:  " + target + " mushies");
    $('.current').text("Your score:  " +currentScore+ " mushies")
    $('.wins').text("Wins: " + wins);

    $('.losses').text("Losses:" + losses);
    // $('.mushies').empty();

    for(var i=0 ; i<4; i++) {
        
    value = (Math.floor(Math.random() * 11 + 1));    
       
        console.log(value);
        
        

        mushies = $('<div>');
        
        mushies.css({
            "background-image":"url(" + mushArray[i] + ")",
            "background-size": "cover",
        })
        mushies.attr({
            
            "class": "clickable", 
            "val": value});

        

        $('.mushies').append(mushies);
        }
    



    $('.clickable').on('click', function() {
        
        points = parseInt(($(this).attr("val")));
        currentScore += points;
        console.log(currentScore);
        $('.current').text("Your score:  " +currentScore+ " mushies")

        if (currentScore === target) {
            alert("You win!");
            wins++;
            $(".mushies").empty()
            start();
        }

        if (currentScore > target) {
            alert("You lose!");
            losses++;
            $(".mushies").empty();
            start();
            
        }
        
    })
}

start();