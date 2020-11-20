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
        document.getElementsByClassName("fullWidth")[1].addEventListener("click",menu,false);
        window.addEventListener("resize",reload,false);
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
    

 //   alert(document.getElementsByClassName("header")[0].offsetHeight);

    if (contador % 2 == 0) {
        var altura =  document.getElementsByClassName("header")[0].offsetHeight;
        b[0].style.position = "fixed";
        document.getElementById("boton").style.zIndex = 0;
        document.getElementById("busca").style.zIndex = 1;
        b[0].style.height = altura+"px";
        b[0].style.display = "flex";
        b[0].style.transition = ".3s"
        document.getElementById("lupa").focus();
        c.className = "buscador superior active";
        contador +=1;
    } else {
        b[0].style.position = "relative";
        document.getElementById("boton").style.zIndex = 1;
        document.getElementById("busca").style.zIndex = 0;
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
        b[0].style.position = "relative";
        document.getElementById("boton").style.zIndex = 1;
        document.getElementById("busca").style.zIndex = 0;
        b[0].style.display = "none";
        c.className = "buscador superior desactivated";
        contador +=1;
    }
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
        var altura =  document.getElementsByClassName("header")[0].offsetHeight;
        document.getElementById("boton").style.transition = ".3s";
        document.getElementsByClassName("nope")[0].style.marginTop = altura+"px";
        document.getElementsByClassName("nope")[0].style.position = "fixed"
       // alert( a);
      //  document.getElementsByClassName("nope")[0].style.width = a + "px";
        document.getElementById("boton").innerHTML = "X"
        cont +=1;

     
    } else {
        document.getElementsByClassName("nope")[0].style.marginTop = "-100%";
        document.getElementById("boton").innerHTML = "☰";
        document.getElementsByClassName("nope")[0].style.position = "relative"
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
        document.getElementsByClassName("shift")[0].style.paddingTop = document.getElementsByClassName("fullWidth")[0].offsetHeight+"px";
    }
}


function reload(){
   
   var ancho = document.getElementsByClassName("fullWidth")[1].offsetWidth;
    if(ancho <= 1325 && ancho >1185 ){
        window.location.reload();
        var alt = document.getElementsByClassName("tabla")[0].offsetHeight;
     //   alert(document.getElementsByClassName("tabla")[0].offsetHeight)
        document.getElementsByClassName("desactivated")[0].style.height = alt+"px";
       }
       

       if(ancho <= 1185 && ancho > 700 ){
        window.location.reload();
      //  alert(document.getElementsByClassName("tabla")[0].offsetHeight)
        document.getElementsByClassName("desactivated")[0].style.height = alt+"px";
       }

       if(ancho <= 700 ){
        window.location.reload();
      //  alert(document.getElementsByClassName("tabla")[0].offsetHeight + " " + document.getElementsByClassName("desactivated")[0].height);
        document.getElementsByClassName("desactivated")[0].style.height = alt+"px";
       }
    
}

