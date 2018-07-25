
var pWinCount = 0,cWinCount = 0;
var pLoseCount = 0,cLoseCount = 0;

$(document).ready(function(){
    
    $("#btn").click(function(){
        var option = Number($("#rps").val());
        switch (option) {
            case 1:
                $("#user").text("You chose ROCK");
                game();
                break;
            case 2:
                $("#user").text("You chose PAPER");
                game();
                break;
            case 3:
                $("#user").text("You chose SCISSORS");
                game();
                break;
            default:
                alert("Error Occured");
        }
    function game(){
        var compOpt;
        compOpt = Math.floor(Math.random() * 3) + 1;
        switch(compOpt) {
            case 1:
                $("#computer").text("Computer chose ROCK");
                if(option === 1) {
                    $("#result").text("You DRAW");
                }else if(option === 2) {
                    $("#result").text("You WIN");
                    pWinCount++;
                    cLoseCount++;
                }else {
                    $("#result").text("You LOSE");
                    pLoseCount++;
                    cWinCount++;
                }
                break;
            case 2:
                $("#computer").text("Computer chose PAPER");
                if(option === 1) {
                    $("#result").text("You LOSE");
                    pLoseCount++;
                    cWinCount++;
                }else if(option === 2) {
                    $("#result").text("You DRAW");
                }else {
                    $("#result").text("You WIN");
                    pWinCount++;
                    cLoseCount++;
                }
                break;
            case 3:
                $("#computer").text("Computer chose SCISSORS");
                if(option === 1) {
                    $("#result").text("You WIN");
                    pWinCount++;
                    cLoseCount++;
                }else if(option === 2) {
                    $("#result").text("You LOSE");
                    pLoseCount++;
                    cWinCount++;
                }else {
                    $("#result").text("You DRAW");
                }
                break;
            default:
                alert("Error Occured");
            }
            $("#pWinCount").text(pWinCount);
            
            $("#cWinCount").text(cWinCount);
            
        }        
    });
});