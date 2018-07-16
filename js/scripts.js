<<<<<<< HEAD
//User Inteface

$(document).ready(function(){
    $("form#PingPong").submit(function (event) {
        event.preventDefault();

      Ping = parseInt($("input#ping").val());
        $("#result").text(" "); 
        react();
        $("input#ping").val();
=======
$().ready(function(){
    $("form#PingPong").submit(function (event) {
        event.preventDefault();

        var ping=parseInt($("input#ping").val());
        var result=PingPong(ping);
        $("#result").text(result);
>>>>>>> 09ff1e6552af9035773b9889cd41af188ea113ed

        

    });

});

<<<<<<< HEAD
//Business Logic
var Ping;
function react(){
    for(var x =1; x <= Ping; x++ ){
    if ((x % 3) === 0 && (x % 5) === 0) {
        $("#result").append("<li>Ping Pong</li>");
    }
     else if ((x % 3) === 0){
        $("#result").append("<li>Ping</li>");
    }
    else if (( x % 5) === 0){
        $("#result").append("<li>Pong</li>");
    }

    else{
        $("#result").append("<li>"+ x +"</li>");
    }
   
} 
   
}
=======

var PingPong =function(ping){
    
    
    if ((ping % 3) === 0 && (ping % 5) === 0) {
        return "Ping Pong"
    }
     else if ((ping% 3) === 0){
        return "ping"
    }
    else if (( ping % 5) === 0){
        return "Pong"
    }

    else{
        return ping;
    }
   
   
};
>>>>>>> 09ff1e6552af9035773b9889cd41af188ea113ed
