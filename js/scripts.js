$().ready(function(){
    $("form#PingPong").submit(function (event) {
        event.preventDefault();

        var ping=parseInt($("input#ping").val());
        var result=PingPong(ping);
        $("#result").text(result);

        

    });

});


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
