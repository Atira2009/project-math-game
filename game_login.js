function login(){
    player1_name = document.getElementById("player1name").value;
    player2_name = document.getElementById("player2name").value;
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    window.location ="game_page.html"
}

player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;

function send() {
    number1 = document.getElementById("word1").value;
    number2 = document.getElementById("word2").value;
    aa = parseInt(number1) * parseInt(number2);
    qn = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='icb'>";
    cb = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = qn + input_box + cb;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word1").value = "";
    document.getElementById("word2").value = "";
}
qt = "player1";
at = "player2";
function check(){
    get_answer = document.getElementById("icb").value;
    answer = get_answer.toLowerCase();
    if(answer == aa){
        setTimeout(function () {document.getElementById('gtw').style.display='none'}, 5000);
        document.getElementById("gtw").innerHTML = "You guessed it right!!!";
        document.getElementById("gtw").style.color = "green";
        if(at == "player1name"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    else{
        setTimeout(function () {document.getElementById('gtw').style.display='none'}, 5000);
        document.getElementById("gtw").innerHTML = "You guessed it wrong";
        document.getElementById("gtw").style.color = "red";
    }
    if(qt == "player1name"){
        qt = "player2name"
        document.getElementById("player_question").innerHTML = "Question turn - " + player2_name;
    }
    else{
        qt = "player1name"
        document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
    }
    if(at == "player1name"){
        at = "player2name"
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;
    }
    else{
        at = "player1name"
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}
