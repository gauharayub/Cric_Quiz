//array to store questions.......
var ques = ["Which Indian bowler has taken 10 wickets in a Test match ?",
     "Which country hosted the ICC Champions Trophy 2006 ?",
     "Who is Mr. Cricket ?",
     "Against which country did India score their highest total at the World Cup ?",
     "Where did India played its first one day international match ? ",
     "Who has been appointed ICC Cricket Committee  chairman for second time ?",
     "Which cricketer had scored highest individual score in ODI cricket ?"
];

//array to store options of questions.....
//answer with id 'j' is the corrrect answer.....
var answer = ['<div class="option"><div class="sel" id="i">Ravi Ashwin</div> <div class="sel" id="j">Anil Kumble</div><div class="sel" id="k">Zaheer Khan</div></div>',
        '<div class="option"><div class="sel" id="j">India</div> <div class="sel" id="i">Australia</div><div class="sel" id="k">South Africa</div></div>',
        '<div class="option"><div class="sel" id="i">Sachin Tendulkar</div><div class="sel" id="j">Michael Hussey</div><div class="sel" id="k">Kumar Sangakkara</div></div>',
        '<div class="option"><div class="sel" id="i">West Indies</div> <div class="sel" id="k">Sri Lanka</div><div class="sel" id="j">Bermuda</div></div>',
        '<div class="option"><div class="sel" id="i">Lords</div> <div class="sel" id="k">Oval</div><div class="sel" id="j">Headingley</div></div>',
        '<div class="option"><div class="sel" id="i">Rahul Dravid</div><div class="sel" id="j">Anil Kumble</div><div class="sel" id="k">Mahela Jayawardene</div></div>',
        '<div class="option"><div class="sel" id="j">Rohit Sharma</div> <div class="sel" id="k">Chris Gayle</div><div class="sel" id="i">Martin Guptill</div></div>'
];
var questionNo = 0;
var score=0;
var content = $('.container');
var totalques = ques.length;
var correct=0;
var wrong=0;

//start function will display questions alongwith options...
function start(questionNo){
content.html('<div class="ques">'+ques[questionNo]+'</div>'+answer[questionNo]);
content.append('<div><button class="next" onclick="loadnext();">NEXT</button></div>');

$('#j').click(function(){
        correct++;
        score+=10;
});

$('.sel').click(function(){
        $(this).css('background-color','green');
        var x = $(this).attr('id');
        var y = $(this);
        var z = $('.sel');
        if(x !='j'){
                wrong++;
        }
        $('.sel').off('click');
});
}

function loadnext(){
        //on clicking right answer correct counter and score counter will get updated......
        questionNo++;
        if(questionNo<totalques-1){
                start(questionNo);
        }
        if(questionNo==totalques-1){
                start(questionNo);
                $('.next').text('FINISH');
        }
        if(questionNo==totalques){
                content.html('<div class="finish">YOUR SCORE</div><div class="score">'+score+'</div>');
                content.append('<div class="result">CORRECT : '+correct+'</div><div class="result">WRONG :  '+wrong+'</div>');
        }
      
}

//event handler for start button... 
$('.start').click(function(){
        start(questionNo);
});
