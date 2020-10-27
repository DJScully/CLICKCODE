document.addEventListener("readystatechange", cargarEventos, false);


function cargarEventos(evento) {
	if(document.readyState == "interactive") {
        document.getElementById("boton").addEventListener("click", openNav, false);
        var total = document.getElementsByClassName("link");
        total[0].addEventListener("click",closeNav,true);
        total[1].addEventListener("click",closeNav,true);
        total[2].addEventListener("click",closeNav,true);
        total[3].addEventListener("click",closeNav,true);
        total[4].addEventListener("click",closeNav,true);
        total[5].addEventListener("click",closeNav,true);
        total[6].addEventListener("click",closeNav,true);
        total[7].addEventListener("click",closeNav,true);
        total[8].addEventListener("click",closeNav,true);
        total[9].addEventListener("click",closeNav,true);
        total[10].addEventListener("click",closeNav,true);
        total[11].addEventListener("click",closeNav,true);
	}
}


function openNav() {
    if(document.getElementsByClassName("fullWidth")[0].offsetWidth < 1299){
        document.getElementById("boton").style.display = "none";
        document.getElementById("lista").style.display = "inline";
        document.getElementById("list").style.display = "inline";
        document.getElementById("list").style.right = "0";
    }else {
        document.getElementById("boton").style.display = "none";
        document.getElementById("lista").style.display = "initial";
        document.getElementById("lista").style.height = "-30%";
    }
  
}
function closeNav() {


    if (document.getElementById("boton").style.display == "none") {    
        var options = document.getElementsByClassName("desplegable")[0].getElementsByClassName("lista")[0].getElementsByClassName("listado");
            if(document.getElementsByClassName("fullWidth")[0].offsetWidth < 1299){
                for (let index = 0; index < options.length; index++) {
                
                
                    if (index <= 6 ) {
                        document.getElementById("lista").style.height = "0";
                        document.getElementById("boton").style.display = "inline";
                        document.getElementById("lista").style.display = "none";
                        document.getElementById("list").style.right = "-30%";
                    } else {
                        document.getElementById("lista").style.height = "0";
                        document.getElementById("boton").style.display = "initial";
                        document.getElementById("lista").style.display = "none";
                        document.getElementById("list").style.right = "-30%";
                    }
                
                 }

            }
    }

}

