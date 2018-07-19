
//User Inteface

$(document).ready(function(){
    $("form#PingPong").submit(function (event) {
        event.preventDefault();

      Ping = parseInt($("input#ping").val());
        $("#result").text(" ");
        react();
        $("input#ping").val();

    });

});


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
