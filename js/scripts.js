//Business Logic//
 var pingpong = function(ping){
   for (var i = 0; i <= input1; i++) {
        if ( (ping% 3 === 0)){
            console.log("ping");
        }
        else if (( ping % 5) === 0){
            console.log("Pong");
        }
    
        else if ((ping % 3) === 0 && (ping % 5 === 0)) {
            console.log("Ping Pong");
        }
       
       }
    }
    

    

$().ready(function(){
    $("form#btn1").submit(function (event) {
        event.preventDefault();

        var Number=parseInt($("#input1").val());
        var result=pingpong(ping);
        $("#result").text(result)

        console.log("#input1");

    })

})