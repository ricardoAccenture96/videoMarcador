// PUNTUACIONES

function sumarPuntosDracs(){
    let puntos = parseInt(document.getElementById("scoreDracs").innerHTML);
    console.log(puntos);
    puntos = puntos+1;
    document.getElementById("scoreDracs").innerHTML = puntos;
}
function restarPuntosDracs(){
    let puntos = parseInt(document.getElementById("scoreDracs").innerHTML);
    console.log(puntos);
    puntos = puntos-1;
    document.getElementById("scoreDracs").innerHTML = puntos;
}

function sumarPuntosVisitor(){
    let puntos = parseInt(document.getElementById("scoreVisitor").innerHTML);
    console.log(puntos);
    puntos = puntos+1;
    document.getElementById("scoreVisitor").innerHTML = puntos;
}
function restarPuntosVisitor(){
    let puntos = parseInt(document.getElementById("scoreVisitor").innerHTML);
    console.log(puntos);
    puntos = puntos-1;
    document.getElementById("scoreVisitor").innerHTML = puntos;
}

// TIMEOUTS

let timeoutsDracs = 3;
let timeoutsVisitor = 3;

function gastarTimeoutDracs(){
    
    
    if(timeoutsDracs == 1){
        document.getElementById("timeDracs1").setAttribute("class", "timeoutOff");
        timeoutsDracs = timeoutsDracs -1;
    }
    if(timeoutsDracs == 2){
        document.getElementById("timeDracs2").setAttribute("class", "timeoutOff");
        timeoutsDracs = timeoutsDracs -1;
    }
    if(timeoutsDracs == 3){
        document.getElementById("timeDracs3").setAttribute("class", "timeoutOff");
        timeoutsDracs = timeoutsDracs -1;
    }
}
function reiniciarTimeoutDracs(){
    timeoutsDracs = 3;
    document.getElementById("timeDracs1").setAttribute("class", "timeoutOn");
    document.getElementById("timeDracs2").setAttribute("class", "timeoutOn");
    document.getElementById("timeDracs3").setAttribute("class", "timeoutOn");
}

function gastarTimeoutVisitor(){
    
    
    if(timeoutsVisitor == 1){
        document.getElementById("timeVisitor1").setAttribute("class", "timeoutOff");
        timeoutsVisitor = timeoutsVisitor -1;
    }
    if(timeoutsVisitor == 2){
        document.getElementById("timeVisitor2").setAttribute("class", "timeoutOff");
        timeoutsVisitor = timeoutsVisitor -1;
    }
    if(timeoutsVisitor == 3){
        document.getElementById("timeVisitor3").setAttribute("class", "timeoutOff");
        timeoutsVisitor = timeoutsVisitor -1;
    }
}
function reiniciarTimeoutVisitor(){
    timeoutsVisitor = 3;
    document.getElementById("timeVisitor1").setAttribute("class", "timeoutOn");
    document.getElementById("timeVisitor2").setAttribute("class", "timeoutOn");
    document.getElementById("timeVisitor3").setAttribute("class", "timeoutOn");
}

//CLOCK
let marchaParo = false;
let oMinutos = document.getElementById("minutos")
let oSegundos = document.getElementById("segundos");
let clock= setInterval(()=>{
    if (marchaParo == true){
        if(oSegundos.innerHTML <= 0){
            oMinutos.innerHTML = oMinutos.innerHTML-1;
            oSegundos.innerHTML = 59;
        }else{
            oSegundos.innerHTML=oSegundos.innerHTML-1
        }
        if(oSegundos.innerHTML <= 0 && oMinutos <= 0){
            marchaParo = false;
        }
    }

    
}, 1000);

function sumarMinutos(){
    let puntos = parseInt(oMinutos.innerHTML);
    console.log(puntos);
    puntos = puntos+1;
    oMinutos.innerHTML = puntos;
}

function restarMinutos(){
    let puntos = parseInt(oMinutos.innerHTML);
    console.log(puntos);
    puntos = puntos-1;
    oMinutos.innerHTML = puntos;
}

//GAMECLOCK

let marchaParo2 = true;
let playClock = document.getElementById("playClock");

setInterval(()=>{
    if(marchaParo2 == true){
        playClock.innerHTML = playClock.innerHTML-1;

        if(playClock.innerHTML == 0){
            marchaParo2 = false;
        }
    }
}, 1000);

//CUARTOS 

let cuarto= ["1st", "2nd", "3rd", "4th", "OT"];
let quarterMarker = 0;
let oCuarto = document.getElementById("quarterMarker");

function subirCuarto(){
    quarterMarker = quarterMarker+1;
    oCuarto.innerHTML = cuarto[quarterMarker];
}

//DOWNS

let down = ["1st & ", "2nd & ", "3rd & ", "4th & "];
let downMarker = 0;
let oDown = document.getElementById("down");

function subirDown(){
    
    downMarker = downMarker+1;
    oDown.innerHTML = down[downMarker];
}

let oYard = document.getElementById("yard");

function subirYarda(){
    oYard.innerHTML=parseInt(oYard.innerHTML)+1
}
function bajarYarda(){
    oYard.innerHTML=parseInt(oYard.innerHTML)-1
}
document.addEventListener('keydown', (event) => {
    var keyValue = event.key;
    var codeValue = event.code;
   
    console.log("keydown event, keyValue: " + keyValue);
    console.log("keydown event, codeValue: " + codeValue);

    // EVENTOS o INTRUCIONES

    //EVENTOS DE PUNTOS

    if(keyValue == "q"){//sumar puntos a dracs
        sumarPuntosDracs();
    }
    if(keyValue == "w"){// restar puntos a dracs
        restarPuntosDracs();
    }

    if(keyValue == "a"){//sumar puntos al visitante
        sumarPuntosVisitor();
    }
    if(keyValue == "s"){// restar puntos al visitante
        restarPuntosVisitor();
    }

    //EVENTOS DE TIMEOUTS

    if(keyValue == "e"){ // gastar timeout Dracs
        gastarTimeoutDracs();
    }
    if(keyValue == "r"){// reiniciar timeout Dracs
        reiniciarTimeoutDracs();
    }
    if(keyValue == "d"){ // gastar timeout Dracs
        gastarTimeoutVisitor();
    }
    if(keyValue == "f"){// reiniciar timeout Dracs
        reiniciarTimeoutVisitor();
    }

    //EVENTOS DEL RELOG
    if(keyValue == "z"){// iniciar relog

        marchaParo = true;
    }
    if(keyValue == "x"){// parar relog

        marchaParo = false;
    }
    if(keyValue == "c"){//sumar minutos
        sumarMinutos();
    }
    if(keyValue == "v"){//restar minutos
        restarMinutos();
    }
    if(keyValue == "b"){//reiniciar playclock
        playClock.innerHTML = 40;
        marchaParo2 = true;
    }
    if(keyValue == "n"){//subir de cuarto
        subirCuarto();
    }
    if(keyValue == "m"){//volver al primer cuarto
        quarterMarker = 0;

        oCuarto.innerHTML= cuarto[quarterMarker];
    }
    if(keyValue == "ArrowUp"){//subir down
        subirDown();
    }
    if(keyValue == "p"){//volver al primer cuarto
        downMarker = 0;
        oDown.innerHTML = down[downMarker];
        oYard.innerHTML = 10;
    }
    if(keyValue == "ArrowLeft"){//volver al primer cuarto
        subirYarda();
    }
    if(keyValue == "ArrowRight"){//volver al primer cuarto
        bajarYarda();
    }



   
  }, false);
