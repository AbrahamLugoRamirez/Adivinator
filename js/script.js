

console.log("Conect")
function validar(){
var num = document.getElementById("number").value;
localStorage.setItem("num", num)
window.location = "../game.html"
}
var cont = 0;
var val = false;
var vall = false;

function he(opc){
    if(vall == true){
        otras(opc);
    }
    if(val == true){
        otra(opc);
    }
    if(cont < 4){
        var bt = opc;
        console.log(opc)
        document.getElementById(opc).disabled=true;
        cont += 1;
        mitad();
    }
    
    console.log(cont);    
}
console.log(cont)

function mitad(){
    if(cont == 4){
        var a = localStorage.getItem("num");       
        if(document.getElementById("h"+a).disabled == true){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se mantendran los que selecionaste',
            showConfirmButton: false,
            timer: 1500
          })
        }else{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Se eliminaran los selecionados, escoge dos mas',
                showConfirmButton: false,
                timer: 1500
              })
              val = true;

        }       
    }
}
function otra(opc){
    if(cont < 6){
        var bt = opc;
        console.log(opc)
        document.getElementById(opc).disabled=true;
        cont += 1;
        mitadd();        
    }
}

function mitadd(){
    if(cont == 6){
        var a = localStorage.getItem("num");       
        if(document.getElementById("h"+a).disabled == true){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se mantendran los que selecionaste',
            showConfirmButton: false,
            timer: 1500
          })



          

        }else{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Se eliminaran los selecionados, escoge dos mas',
                showConfirmButton: false,
                timer: 1500
              }) 
              vall = true;            

        }
       
    }
}
function otras(opc){
    if(cont < 7){
        var bt = opc;
        console.log(opc)
        document.getElementById(opc).disabled=true;
        cont += 1;
        final();      
    }
}

function final(){
    var a = localStorage.getItem("num");       
        if(document.getElementById("h"+a).disabled == true){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El numero es el que selecionaste: ' + a,
            showConfirmButton: false,
            timer: 1500
          })

        }else{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El numero es el ' + a,
                showConfirmButton: false,
                timer: 1500
              }) 
              vall = true;


            }
        }