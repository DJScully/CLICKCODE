document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
    if(document.readyState == "interactive") {
        document.getElementById("busca").addEventListener("click",buscar,false);
        for (let index = 1; index < document.getElementsByClassName("fullWidth").length; index++) {
         
            document.getElementsByClassName("fullWidth")[index].addEventListener("click",salir,true);
        }
        
       // document.getElementById("busca").addEventListener("click",cerrar,true);
        document.getElementsByClassName("marquee")[0].addEventListener("mouseover",stop,false);
        document.getElementsByClassName("marquee")[0].addEventListener("mouseout",start,false);
        document.getElementsByClassName("fullWidth")[1].addEventListener("resize",menu,false);
        document.getElementById("boton").addEventListener("click",openNav,true);

        for (let index = 0; index <  document.getElementsByClassName("elemento").length; index++) {
            document.getElementsByClassName("elemento")[index].addEventListener("click",closeNav,false);
            
        }
    }
}
var contador = 0;

function buscar(){

    
  
    var b = document.getElementsByClassName("barra");
    var c = document.getElementById("busca");

    if (contador % 2 == 0) {
     
        b[0].style.display = "flex";
        b[0].style.transition = ".3s"
        document.getElementById("lupa").focus();
        c.className = "buscador superior active";
        contador +=1;
    } else {
      
        b[0].style.display = "none";
        c.className = "buscador superior desactivated";
        contador +=1;
    }
}

function salir(){

    var a = document.getElementsByClassName("list");
    var b = document.getElementsByClassName("barra");
    var c = document.getElementById("busca");
    if(contador % 2 != 0) {
        a[0].style.display = "flex";
        b[0].style.display = "none";
        c.className = "buscador superior desactivated";
        contador +=1;
    }

    //evento.stopPropagation();
}

function stop(){

    var a = document.getElementsByClassName("marquee");
        a[0].stop();

}

function start(){
    var a = document.getElementsByClassName("marquee");
    a[0].start();

}

var cont = 0

function openNav() {
    var a = document.getElementsByClassName("fullWidth")[0].offsetWidth;
    
    if( a < 1324 && cont %2 == 0){
        document.getElementById("boton").style.transition = ".3s";
        document.getElementsByClassName("nope")[0].style.marginTop = "0";
        document.getElementById("boton").innerHTML = "X"
        cont +=1;

     
    } else {
        document.getElementsByClassName("nope")[0].style.marginTop = "-100%";
        document.getElementById("boton").innerHTML = "☰";
        cont +=1;
    }

   /* document.getElementById("boton").removeEventListener("click", closeBtn);
    document.getElementById("boton").addEventListener("click",openNav,false);*/
}


function closeNav() {

    var a = document.getElementsByClassName("fullWidth")[0].offsetWidth;
    if( a < 1324 ){

            document.getElementsByClassName("nope")[0].style.marginTop = "-100%";
            document.getElementById("boton").innerHTML = "☰";
           
           
    } 
    
   
    alert("cerrar menu");
}


/*function closeBtn() {

var a = document.getElementsByClassName("fullWidth")[0].offsetWidth;
if( a < 1324){
    document.getElementsByClassName("nope")[0].style.marginTop = "-100%";
    document.getElementById("boton").innerHTML = "☰";
}

    document.getElementById("boton").removeEventListener("click", closeBtn);
    document.getElementById("boton").addEventListener("click",openNav,false);

    alert("cerrar button");

}
*/

function menu(){
    if(document.getElementsByClassName("fullWidth")[0].offsetWidth <1325 ){
        document.getElementsByClassName("shift")[0].style.paddingTop = document.getElementsByClassName("fullWidth")[0].offsetHeight;
    }
}


function menu(){
    if(document.getElementsByClassName("fullWidth")[0].offsetWidth <1325 ){
        window.location.reload();
    }
}

