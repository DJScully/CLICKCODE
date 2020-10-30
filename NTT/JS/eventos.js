document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
	if(document.readyState == "interactive") {
        document.getElementById("boton").addEventListener("click",openNav,false);

        
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
        document.getElementsByClassName("nope")[1].addEventListener("click",closeNav,true);
        document.getElementsByClassName("listado")[0].addEventListener("mouseover",more,true);
        document.getElementsByClassName("listado")[1].addEventListener("mouseover",normal,true);
        document.getElementsByClassName("listado")[2].addEventListener("mouseover",less,true);
        document.getElementsByClassName("listado")[3].addEventListener("mouseover",normal,true);
        document.getElementsByClassName("listado")[4].addEventListener("mouseover",less,true);
        document.getElementsByClassName("listado")[5].addEventListener("mouseover",normal,true);
        document.getElementsByClassName("listado")[6].addEventListener("mouseover",normal,true);
        document.getElementsByClassName("listado")[0].addEventListener("mouseout",less,true);
        document.getElementsByClassName("listado")[0].addEventListener("click",lesser,true);

       /* for (let index = 0; index < document.getElementsByClassName("listado").length; index++) {
            document.getElementsByClassName("listado")[index].addEventListener("mouseout",lesser,true);
            
        }*/
	}
}
//alert(document.getElementsByClassName("sub")[0].style.right);

function openNav() {
    var a = document.getElementsByClassName("fullWidth")[0].offsetWidth;if( a < 1299){
        document.getElementById("boton").style.marginRight = "30%";
        document.getElementById("boton").style.transition = ".3s";
        document.getElementById("lista").style.display = "block";
        document.getElementById("list").style.display = "block";
        document.getElementById("list").style.right = "0";
        document.getElementById("boton").innerHTML = "X"
        for (let index = 0; index < document.getElementsByClassName("sub").length; index++) {
            document.getElementsByClassName("sub")[index].style.right= "100%";
            
        }
        document.getElementById("boton").removeEventListener("click",openNav);
        document.getElementById("boton").addEventListener("click", closeBtn, false)
    }
}

function more() {
    var a = document.getElementsByClassName("fullWidth")[0].offsetWidth;
    if( a < 1299){
        document.getElementById("boton").style.marginRight = "62%";

    }
}

function normal() {
    var a = document.getElementsByClassName("fullWidth")[0].offsetWidth;
    if( a < 1299){
        document.getElementById("boton").style.marginRight = "30%";

    }
}

function less() {
    var a = document.getElementsByClassName("fullWidth")[0].offsetWidth;
    if( a < 1299){
        document.getElementById("boton").style.marginRight = "30%";
      
    }
    
    
}

function lesser() {
    var a = document.getElementsByClassName("fullWidth")[0].offsetWidth;
    if( a < 1299){
        document.getElementById("boton").style.marginRight = "0";
    }
    


}

function closeNav() {

            var a = document.getElementsByClassName("fullWidth")[0].offsetWidth;
            if( a < 1299 && a > 1000){
                    document.getElementById("boton").style.marginRight = "0%";
                    document.getElementById("boton").style.display = "initial";
                    document.getElementById("lista").style.display = "block";
                    document.getElementById("list").style.right = "-30%";
                    document.getElementById("boton").innerHTML = "☰";
                    document.getElementsByClassName("sub")[0].style.right= "0";
                    
            }  else if (a <= 1000) {
                    document.getElementById("boton").style.marginRight = "0%";
                    document.getElementById("boton").style.display = "initial";
                    document.getElementById("lista").style.display = "block";
                    document.getElementById("list").style.right = "-30%";
                    document.getElementById("boton").innerHTML = "☰";
                    for (let index = 0; index < document.getElementsByClassName("sub").length; index++) {
                        document.getElementsByClassName("sub")[index].style.right= "0";
                        
                    }
                  
            }  

}

//alert(document.getElementById("boton").innerHTML);
function closeBtn() {

    var a = document.getElementsByClassName("fullWidth")[0].offsetWidth;
    if( a < 1299){
        
            document.getElementById("boton").style.marginRight = "0";
            document.getElementById("boton").style.display = "initial";
            document.getElementById("lista").style.display = "block";
            document.getElementById("list").style.right = "-30%";
            document.getElementById("boton").innerHTML = "☰";
           
            document.getElementById("boton").removeEventListener("click", closeBtn);
            document.getElementById("boton").addEventListener("click",openNav,false);
    }


}


