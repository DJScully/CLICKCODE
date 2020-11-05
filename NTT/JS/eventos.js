document.addEventListener("readystatechange", cargarEventos, false);
var list = 0;
function cargarEventos(evento) {
	if(document.readyState == "interactive") {
        document.getElementById("boton").addEventListener("click",openNav,false);
        //document.getElementById("boton").addEventListener("click",closeBtn,false);
        
        var total = document.getElementsByClassName("menu");
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
        document.getElementsByClassName("nope")[0].addEventListener("click",closeNav,true);
        document.getElementsByClassName("nope")[1].addEventListener("click",closeNav,true)
	}
}
//alert(document.getElementsByClassName("sub")[0].style.right);

alert(document.getElementsByClassName("sub").length);
function res() {
    alert(window.outerWidth);
    if ( window.outerWidth >= 1228) {
        for (let index = 0; index < document.getElementsByClassName("sub").length; index++) {
            document.getElementsByClassName("sub")[index].style.right= "auto";
            
        }
    }
}


function openNav() {
    var a = document.getElementsByClassName("fullWidth")[0].offsetWidth;if( a < 1228){
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
            if( a < 1228 && a > 1000){

                    document.getElementById("list").style.right = "-30%";
                    document.getElementById("boton").innerHTML = "☰";
                    for (let index = 0; index < document.getElementsByClassName("sub").length; index++) {
                        document.getElementsByClassName("sub")[index].style.right= "auto";
                        
                    }
                    
            }  else if (a <= 1000) {
                    document.getElementById("list").style.right = "-30%";
                    document.getElementById("boton").innerHTML = "☰";
                    for (let index = 0; index < document.getElementsByClassName("sub").length; index++) {
                        document.getElementsByClassName("sub")[index].style.right= "auto";
                        
                    }
                  
            }  

}

function name() {
    document.getElementById("boton").innerHTML = "☰";
}
function closeBtn() {

    var a = document.getElementsByClassName("fullWidth")[0].offsetWidth;
    if( a < 1228){
            document.getElementById("lista").style.display = "block";
            document.getElementById("list").style.right = "-30%";
            document.getElementById("boton").innerHTML = "☰";
      }     
            document.getElementById("boton").removeEventListener("click", closeBtn);
            document.getElementById("boton").addEventListener("click",openNav,false);
    


}


