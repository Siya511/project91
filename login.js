function addUser()
{
    number1_name = document.getElementById("player1_name_input").value;
    number2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("number1",number1_name);
    localStorage.setItem("number2",number2_name);

    window.location = "game.html";

}