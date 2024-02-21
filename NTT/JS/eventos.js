document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
	if(document.readyState == "interactive") {
       		// Asigna el evento 'click' a todos los elementos con la clase "menu"
		document.querySelectorAll('.menu').forEach(item => {
		    item.addEventListener('click', closeNav, true);
		});
		
		// Asigna el evento 'click' a los elementos con la clase "nope"
		document.querySelectorAll('.nope').forEach(item => {
		    item.addEventListener('click', closeNav, true);
		});
		
		// Asigna los eventos 'mouseover' y 'mouseout' a los elementos con la clase "listado"
		const listados = document.querySelectorAll('.listado');
		
		listados[0].addEventListener('mouseover', move1, false);
		listados[1].addEventListener('mouseover', move2, false);
		listados[3].addEventListener('mouseover', move3, false);
		listados[5].addEventListener('mouseover', move4, false);
		listados[6].addEventListener('mouseover', move5, false);
		
		listados[0].addEventListener('mouseout', out1, false);
		listados[1].addEventListener('mouseout', out2, false);
		listados[3].addEventListener('mouseout', out3, false);
		listados[5].addEventListener('mouseout', out4, false);
		listados[6].addEventListener('mouseout', out5, false);
	       /* for (let index = 0; index < array.length; index++) {
	            document.getElementsByClassName("sub")[index].addEventListener("mouseover",move,false)
	          
	        }  */
	}
}
//alert(document.getElementsByClassName("sub")[0].style.right);

//alert(document.getElementsByClassName("sub").length);
function res() {
    alert(window.outerWidth);
    if ( window.outerWidth >= 1228) {
        for (let index = 0; index < document.getElementsByClassName("sub").length; index++) {
            document.getElementsByClassName("sub")[index].style.right= "auto";
            
        }
    }
}

function move1(){
    
    var id = document.getElementsByClassName("sub")[0];
    if( window.outerWidth < 1228){
     
        id.style.display = "block";
        id.style.top = "0";
        id.style.left = "0";
        id.style.zIndex = "1";
        id.style.width = "100%";
        id.style.marginTop = "65px";
        var list = document.getElementsByClassName("listado");
        for (let index = 0; index < list.length; index++) {
            if (index == 2 || index == 4) {
                list[index].style.marginBottom = "0";
            }
        list[index].style.marginBottom = "15px";
            
        } 
    
    
        } else {
            id.style.display = "block";
            id.style.zIndex = "1";
        }
}
function move2(){
    var id = document.getElementsByClassName("sub")[1];
    if (window.outerWidth < 1228 ) {
        
        id.style.display = "block";
        id.style.top = "0";
        id.style.left = "0";
        id.style.zIndex = "1";
        id.style.width = "100%";
        id.style.marginTop = "65px";
        var list = document.getElementsByClassName("listado");
        for (let index = 1; index < list.length; index++) {
        list[index].style.marginBottom = "15px";
        if (index == 2 || index == 4) {
            list[index].style.marginBottom = "0";
            }
            list[index].style.marginBottom = "15px";
        }
    }else {
        id.style.display = "block";
        id.style.zIndex = "1";
    }
    

}

function move3(){
    var id = document.getElementsByClassName("sub")[2];
    if (window.outerWidth < 1228 ) {
        
        id.style.display = "block";
        id.style.top = "0";
        id.style.left = "0";
        id.style.zIndex = "1";
        id.style.width = "100%";
        id.style.marginTop = "65px";
        var list = document.getElementsByClassName("listado");
        for (let index = 1; index < list.length; index++) {
        list[index].style.marginBottom = "15px";
        if (index == 2 || index == 4) {
            list[index].style.marginBottom = "0";
            }
            list[index].style.marginBottom = "15px";
        }
    }else {
        id.style.display = "block";
        id.style.zIndex = "1";
    }
    

}

function move4(){
    var id = document.getElementsByClassName("sub")[3];
    if (window.outerWidth < 1228 ) {
        
        id.style.display = "block";
        id.style.top = "0";
        id.style.left = "0";
        id.style.zIndex = "1";
        id.style.width = "100%";
        id.style.marginTop = "65px";
        var list = document.getElementsByClassName("listado");
        for (let index = 1; index < list.length; index++) {
        list[index].style.marginBottom = "15px";
        if (index == 2 || index == 4) {
            list[index].style.marginBottom = "0";
            }
            list[index].style.marginBottom = "15px";
        }
    }else {
        id.style.display = "block";
        id.style.zIndex = "1";
    }
    

}

function move5(){
    var id = document.getElementsByClassName("sub")[4];
    if (window.outerWidth < 1228 ) {
       
        id.style.display = "block";
        id.style.top = "0";
        id.style.left = "0";
        id.style.zIndex = "1";
        id.style.width = "100%";
        id.style.marginTop = "65px";
        var list = document.getElementsByClassName("listado");
        for (let index = 1; index < list.length; index++) {
        list[index].style.marginBottom = "15px";
        if (index == 2 || index == 4) {
            list[index].style.marginBottom = "0";
            }
            list[index].style.marginBottom = "15px";
        }
    }else {
        id.style.display = "block";
        id.style.zIndex = "1";
    }
    

}


function out1(){
    if( window.outerWidth < 1228){
        var id = document.getElementsByClassName("sub")[0];
        id.style.display = "none";
        var list = document.getElementsByClassName("listado");
        for (let index = 0; index < list.length; index++) {
            list[index].style.marginBottom = "0";
        }
    } else {
        var id = document.getElementsByClassName("sub")[0];
        id.style.display = "none";
        id.style.width = "auto";
        id.style.margin = "0";
        id.style.top = "auto";
        id.style.left = "auto";
    }
    
}

function out2(){
    if( window.outerWidth < 1228){
        var id = document.getElementsByClassName("sub")[1];
        id.style.display = "none";
        var list = document.getElementsByClassName("listado");
        for (let index = 0; index < list.length; index++) {
            list[index].style.marginBottom = "0";
        }
    } else {
        var id = document.getElementsByClassName("sub")[1];
        id.style.display = "none";
        id.style.width = "auto";
        id.style.margin = "0";
        id.style.top = "auto";
        id.style.left = "auto";
    }
}

function out3(){
    if( window.outerWidth < 1228){
        var id = document.getElementsByClassName("sub")[2];
        id.style.display = "none";
        var list = document.getElementsByClassName("listado");
        for (let index = 0; index < list.length; index++) {
            list[index].style.marginBottom = "0";
        }
    } else {
        var id = document.getElementsByClassName("sub")[2];
        id.style.display = "none";
        id.style.width = "auto";
        id.style.margin = "0";
        id.style.top = "auto";
        id.style.left = "auto";
    }
}

function out4(){
    if( window.outerWidth < 1228){
        var id = document.getElementsByClassName("sub")[3];
        id.style.display = "none";
        var list = document.getElementsByClassName("listado");
        for (let index = 0; index < list.length; index++) {
            list[index].style.marginBottom = "0";
        }
    } else {
        var id = document.getElementsByClassName("sub")[3];
        id.style.display = "none";
        id.style.width = "auto";
        id.style.margin = "0";
        id.style.top = "auto";
        id.style.left = "auto";
    }
}

function out5(){
    if( window.outerWidth < 1228){
        var id = document.getElementsByClassName("sub")[4];
        id.style.display = "none";
        var list = document.getElementsByClassName("listado");
        for (let index = 0; index < list.length; index++) {
            list[index].style.marginBottom = "0";
        }
    } else {
        var id = document.getElementsByClassName("sub")[4];
        id.style.display = "none";
        id.style.width = "auto";
        id.style.margin = "0";
        id.style.top = "auto";
        id.style.left = "auto";
    }
}



function openNav() {
    var a = document.getElementsByClassName("fullWidth")[0].offsetWidth;
    
    if( a < 1228){
        document.getElementById("boton").style.transition = ".3s";
        document.getElementById("lista").style.display = "block";
        document.getElementById("list").style.display = "block";
        document.getElementById("list").style.right = "0";
        document.getElementById("boton").innerHTML = "X"
        document.getElementById("boton").removeEventListener("click",openNav);
        document.getElementById("boton").addEventListener("click", closeBtn, true)
    }
}


function closeNav() {

            var a = document.getElementsByClassName("fullWidth")[0].offsetWidth;
            if( a < 1228  && a > 715){

                    document.getElementById("list").style.right = "-30%";
                    document.getElementById("boton").innerHTML = "☰";
                    for (let index = 0; index < document.getElementsByClassName("sub").length; index++) {
                        document.getElementsByClassName("sub")[index].style.right= "auto";
                    }
                   
            } else if (a < 715){
                document.getElementById("list").style.right = "-50%";
                document.getElementById("boton").innerHTML = "☰";
                for (let index = 0; index < document.getElementsByClassName("sub").length; index++) {
                    document.getElementsByClassName("sub")[index].style.right= "auto";
                }
            }
            
            document.getElementById("boton").removeEventListener("click", closeBtn);
                    document.getElementById("boton").addEventListener("click",openNav,false);
}

function name() {
    document.getElementById("boton").innerHTML = "☰";
}
function closeBtn() {

    var a = document.getElementsByClassName("fullWidth")[0].offsetWidth;
    if( a < 1228 && a > 715){
            document.getElementById("lista").style.display = "block";
            document.getElementById("list").style.right = "-30%";
            document.getElementById("boton").innerHTML = "☰";
      } else if( a <= 715 ) {
        document.getElementById("lista").style.display = "block";
        document.getElementById("list").style.right = "-50%";
        document.getElementById("boton").innerHTML = "☰";
      }
      
  
            document.getElementById("boton").removeEventListener("click", closeBtn);
            document.getElementById("boton").addEventListener("click",openNav,false);
    


}


