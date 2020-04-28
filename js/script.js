function validar(){
    var num = document.getElementById("number").value;
    localStorage.setItem("num", num)
    window.location = "../game.html"
    }