document.addEventListener("readystatechange", cargarEventos, false);


function cargarEventos(evento) {
	if(document.readyState == "interactive") {
        document.getElementById("boton").addEventListener("click", openNav, false);
        document.getElementsByClassName("desplegable")[0].addEventListener("click", closeNav, true);
	}
}


function openNav() {
  document.getElementById("boton").style.display = "none";
  document.getElementById("lista").style.display = "flex";
  document.getElementById("lista").style.height = "250px";
}

function closeNav() {
    if (document.getElementById("boton").style.display == "none") {    
        var options = document.getElementsByClassName("desplegable")[0].getElementsByClassName("lista")[0].getElementsByClassName("listado");

                for (let index = 0; index < options.length; index++) {
                
                
                if (index <= 6 ) {
                    document.getElementById("lista").style.height = "0";
                    document.getElementById("boton").style.display = "inline";
                    document.getElementById("lista").style.display = "none";
                }
                
            }


    }

}
