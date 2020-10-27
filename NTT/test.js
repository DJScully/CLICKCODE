/*Hacer un programa que permita:

1. Recoger el número de mes, el día y los litros llovidos hasta que no se desee introducir más. Los meses y días podrán estar repetidos.
2. Mostrar los nombres de los meses con el total de litros llovidos.
3. Mostrar el día más lluvioso en la forma: "El día más lluvioso ha sido el 7 de Marzo".
4. Mostrar el nombre de los meses ordenados descendentemente por número de litros llovidos. 
    Este apartado debe hacerse en primer lugar sin usar objetos (solo tablas) y en segundo lugar 
    haciendo uso de objetos que contengan el nombre del mes y el total de litros.*/
    var año = new Array();
    var seguir = false;
    var continuar = false;
    var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    do {
    
        var mes = parseInt(prompt("Digame el mes:") - 1);
        if (año[mes] == null) {
            año[mes] = new Array();
        }
    
        do {
    
            var dia = parseInt(prompt("Digame el dia:") - 1);
            var litros = parseInt(prompt("Digame los litros caidos:"));
            if (año[mes][dia] != null) {
                año[mes][dia] += litros;
            } else {
                año[mes][dia] = litros;
            }
            continuar = confirm("Desea introducir otro dia?");
    
        } while (continuar == true);
    
        seguir = confirm("Desea introducir otro mes?");
    
    } while (seguir == true);
    var totalaño = 0;
    var mesmaslluvioso = 0;
    var diamaslluvioso = 0;
    var ltotal = new Array();
    for (var i = 0; i < año.length; i++) {
        if (año[i] != null) {
            for (var j = 0; j < 31; j++) {
                if (año[i][j] != null) {
                    if (ltotal[meses[i]] != null) {
                        ltotal[meses[i]] += año[i][j];
                    } else {
                        ltotal[meses[i]] = año[i][j];
                    }
                    if (año[i][j] > año[mesmaslluvioso][diamaslluvioso]) {
                        mesmaslluvioso = i;
                        diamaslluvioso = j;
                    }
                }
            }
            totalaño += ltotal[meses[i]];
            document.write(meses[i] + "=> " + ltotal[meses[i]]);
            document.write(mesmaslluvioso + " " + diamaslluvioso);
            document.write("<br>");
        }
    }

    document.write(mesmaslluvioso + " " + diamaslluvioso);
    document.write("El total de litros este año es: " + totalaño + "<br>");
    document.write("El dia mas lluvioso fue el " + (diamaslluvioso + 1) + " de " + meses[mesmaslluvioso] + " y fueron " + año[mesmaslluvioso][diamaslluvioso] + " litros");
    var cambio = false;
    do {
        for (var i = 0; i < ltotal.length - 1; i++) {
            cambio = false
            if (ltotal[meses[i]] > ltotal[meses[i + 1]]) {
                aux = ltotal[meses[i]];
                ltotal[meses[i]] = ltotal[meses[i + 1]];
                ltotal[meses[i + 1]] = aux;
                cambio = true;
            }
        }
    }while(cambio == true);