$(".goal").text("Your goal: ");

var goal=0;
var currentScore=0;
var wins=0;
var losses=0;
var mushArray=[];

function start() {
    

    var target = Math.floor(Math.random()*101) + 19;
    console.log(target);
    $('.goal').append(target + " mushies");

    for(var i=0 ; i<4; i++) {
        
        var value = Math.floor(Math.random() * 11 + 1);
    console.log(value);
        
        var mushies = $('<div>');
        $('.mushies').append(mushies);
        mushies.attr({
            "class": "clickable", 
            "data-value": value});

        }


    }

start();

    $(".mushies").on('click', function() {
        console.log($(this).attr("data-value"));
    })