var log = console.log;

var scoreCounter = 0;
var questionCounter = -1;
var questionTime = 15;
var timer = 15;
var correct = false;
var clear;
var answer = 0;
var TIMER;
var TRANSIT;
var transCount;
var transCounter=0;

//On-click assignments.  Decided to answer based within the 
//answer's click function.  Was a bad decision I think because transition page was
//very hard.  If I built this again would have more separate functions to call
$(document).ready(function() {
    loadTitle();
    //Click Start
    $(".start").click(function(){
        scoreCounter=0;
        timer=15;
        questionCounter = -1;
        transCounter=0;
        clearInterval(TIMER);
    $(".start").hide();
    $(".container").show()
    $(".countdown").html(timer);
    loadQuestion();
    
   })
   //When an aswer is clicked
   $(".opt").on("click", function(){
        
        transCounter=0;
        clearInterval(TRANSIT);
        TRANSIT = setInterval(transit,1000);
        
        clearInterval(TIMER);
        timer=15
    
        var value = $(this).attr("value");
        var currentQuestion = questions[questionCounter];
        if ((currentQuestion.answer) === parseInt(value)) {
            scoreCounter++;
            clearInterval(TIMER);
            
            setTimeout(loadQuestion,3000);
        } else {

    
            clearInterval(TIMER);
            
            setTimeout(loadQuestion,3000);
        };

    
   })

   $(".restart").click(function(){
       reload();
   })

})

function gradeAnswer(){                   
    var value = $(this).attr("value");
    var currentQuestion = questions[questionCounter];
    if ((currentQuestion.answer) === parseInt(value)) {
        scoreCounter++;
        
        
        // questionCounter++;
        
        clearInterval(TIMER);

        // transCount = setInterval(transition,1000);
        loadQuestion();
    } else {
        
        // questionCounter++;

        clearInterval(TIMER);
        // transCount = setInterval(transition,1000);
        loadQuestion();
    };
    // loadQuestion();
    // questionCounter++;
}

function loadTitle() {
    $(".title h1").text(questionsTitle);
}

function loadQuestion(){
    questionCounter ++;
    $(".countdown").removeClass("countdownUrgent")
    $(".trans").hide()
    $(".container").show()
    $(".countdown").html(timer);
    clearInterval(TIMER);
    clearInterval(TRANSIT);
    timer=15;
    transCounter=0;
    // TIMER = setInterval(count,1000);
    // transCounter=0;
    
    if (questionCounter >= questions.length) {
        $(".container").hide();
        $(".results").show();
        $(".restart").show();
        showSummary();

    } else {
        TIMER = setInterval(count,1000);
            let question = questions[questionCounter];
                $(".question").text(question.question);
                $(".option1").text(question.opt1);
                $(".option2").text(question.opt2);
                $(".option3").text(question.opt3);
                $(".option4").text(question.opt4);    
    }// questionCounter++;
}
function count(){
    $(".countdown").html(timer);
    if (timer>0) {
        
        timer--;
        if (timer<5) {
        $(".countdown").addClass("countdownUrgent")
        } 
    } else {
        transCounter=0;
        clearInterval(TRANSIT);// transition();
        TRANSIT = setInterval(transit,1000)// questionCounter++;
        clearInterval(TIMER);
        
        setTimeout(loadQuestion,3000);
        
        // questionCounter++;
        
    }
} 
function reload() {
    $(".restart").hide();
    $(".results").hide();
    $(".start").show();
    // clearInterval(TIMER);
}
function showSummary() {
    $(".results").text("You answered " + scoreCounter + " out of "
     + questions.length + " correctly."); 
}

function transit() {
    if(transCounter<3)  { 
        $(".container").hide();
        $(".trans").show();
        $(".trans").text("The correct answer was " + questions[questionCounter].answerString);
        transCounter++;
    }   
}
function transition() {

    setInterval(transit,1000);
    
    // if(transCounter<3)  { 
    //     $(".container").hide();
    //     $(".trans").show();
    //     $(".trans").text("The correct answer was " + questions[questionCounter].answerString);
    //     transCounter++;
    // } 
    // else {
    //     $(".container").show();
    //     $(".trans").hide();
    //     // loadQuestion();
    // }
    
    // else if(transCounter>4) {
    //     $(".container").show();
    //     $(".trans").hide();
    //     loadQuestion();
    // }
    
    // };
    
};

