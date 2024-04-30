function validarFormulario() {
    // Obtener referencias a los campos del formulario
    var nombre = document.getElementById("nombre");
    var email = document.getElementById("email");
    var telefono = document.getElementById("telefono");

    // Verificar si los campos están vacíos
    if (nombre.value === "" || email.value === "" || telefono.value === "") {
      alert("Por favor, completa todos los campos.");
      return false;
    }

    // Verificar el formato del campo email utilizando una expresión regular
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email.value)) {
      alert("Por favor, ingresa un email válido.");
      return false;
    }

    // Verificar el formato del campo teléfono utilizando una expresión regular
    var telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefono.value)) {
      alert("Por favor, ingresa un teléfono válido (10 dígitos sin espacios ni guiones).");
      return false;
    }

    // Si todos los campos son válidos, se puede enviar el formulario
    alert("Formulario enviado correctamente.");
    return true;
  }

  
  //------------tabla/consultas---------
  

  var Nombre = [];                          var Precio=[];              var Tiempo = [];              var Niños = []; 
  Nombre[0]= "TIPO DE CORTE ";              Precio[0]= "PRECIOS";      Tiempo[0]="TIEMPO ESTIMADO";   Niños[0]= "APTO NIÑOS"
  Nombre[1]= "Corte comun ";                Precio[1]= 1700;           Tiempo[1]="20 minutos";        Niños[1]= true
  Nombre[2]= "Corte con barba ";            Precio[2]= 2000;           Tiempo[2]="25 minutos";        Niños[2]= false
  Nombre[3]= "Corte afeitadora/navaja ";    Precio[3]= 2000;           Tiempo[3]="30 minutos";        Niños[3]= false
  Nombre[4]= "Corte diseño ";               Precio[4]= 2200;           Tiempo[4]="40 minutos";        Niños[4]= true
  
var str2 = ""; 

 for(var i = 0; i < Nombre.length ; i++){
 str2 = str2 + "<tr><td>"+Nombre[i]+"</td><td>"+Precio[i]+"</td><td>"+Tiempo[i]+"</td><td>"+Niños[i]+"</td></tr>"; //crea la tabla con los vectores
}

  str2 = "<table style= 'border-collapse: collapse; border: 2px solid #000;'>"+str2+"</table>";
  console.log(str2);
document.getElementById('salidaTabla').innerHTML = str2;


var cadenacompleta="";
var fila= "";

  function MostrarCorteAdulto(){
    var cadenacompleta="";
    var fila="";
    console.log(Nombre [0]);
    for (var i=0; i <Nombre.length; i++){
      if(Niños[i] == false){
        fila = Nombre[i] + " " + Tiempo[i] + " " + Niños[i] + " " + Precio[i];
        cadenacompleta=cadenacompleta+fila+ "<br>";
        document.getElementById("nombresM").innerHTML = cadenacompleta;
      }
    }
  }

function MostrarCorteNino(){
  var cadenacompleta="";
    var fila="";
    console.log(Nombre [0]);
    for (var i=0; i <Nombre.length; i++){
      if(Niños[i]== true) {
        fila = Nombre[i] + " " + Tiempo[i] + " " + Niños[i] + " " + Precio[i];
        cadenacompleta=cadenacompleta+fila+ "<br>";
        document.getElementById("nombresM").innerHTML = cadenacompleta;
      }
    }
  }

function MostrarTiempoMayor(){
  var cadenacompleta= "";
 var fila = ""
  console.log(Nombre[0]);
  for(var i=0; i < Nombre.length; i++) {
    if(Tiempo[i]> 20 ) { 
      fila =  Nombre[i] +  " " + Tiempo[i] + " " + Niños[i] + " " + Precio[i];
    cadenacompleta = cadenacompleta + fila + "<br>";
    document.getElementById("nombresM").innerHTML = cadenacompleta;
    }
  }
}

function MostrarMayorPrecio(){
  var cadenacompleta= "";
 var fila = ""
  console.log(Nombre[0]);
  for(var i=0; i < Nombre.length; i++) {
    if(Precio[i]> 1700 ) { 
      fila =   Nombre[i] + " " + Tiempo[i] + " " +  Niños[i] +  " "  +  Precio[i];
    cadenacompleta = cadenacompleta + fila + "<br>";
    document.getElementById("nombresM").innerHTML = cadenacompleta;
    }
 
}
}

function MostrarMenorPrecio(){
  var cadenacompleta= "";
 var fila = ""
  console.log( Nombre[0] );
  for(var i=0; i < Nombre.length; i++) {
    if(Precio[i] < 2000 ) { 
      fila =   Nombre [i]   + " " +   Tiempo [i]   + " " +   Niños [i]   +   " "   +   Precio [i] ;
    cadenacompleta = cadenacompleta + fila + "<br>";
    document.getElementById("nombresM").innerHTML = cadenacompleta;
    }
 
}
}
//script turnos asendente descendente, etc
 //var nombres = ["Agustin Garro","Mario Valdez","Adrian lopez"];
          //var dia = ["viernes","Sabados","otros"];
          //var hora = [20,19,15]
          //var ninos = [true,false,true];
      
          var nombres = [];
          var dia = [];
          var hora = [];
          var ninos= [];
 
          //alert("runnin javascript");
         
 
          var txt_nombres = localStorage.getItem("ls_nombres");
          if(txt_nombres){
          nombres = JSON.parse(txt_nombres); //si txt tiene valor , jsonparse lo convierte en un objeto js
          }else{
          nombres = []; //si txt no tiene valor,se inicia la variable nombres como arreglo vacio
          }
 
          var txt_dia = localStorage.getItem("ls_dia");
          if(txt_dia){
          dia = JSON.parse(txt_dia);
          }else{
          dia = [];
          }
 
          var txt_hora = localStorage.getItem("ls_hora");
          if(txt_hora){
          hora = JSON.parse(txt_hora);
          }else{
          hora = [];
          }

          var txt_ninos= localStorage.getItem("ls_ninos");
          if(txt_ninos){
          ninos = JSON.parse(txt_ninos);
          }else{
          ninos= [];
          }
 
    
    
          listarTodo();
          function listarTodo(){
          str = "";
          for(var i=0 ; i<nombres.length ; i++){
          str = str + "<p>"+i+" - "+nombres[i]+" - "+dia[i]+" - "+hora[i]+ "-"+ ninos[i]+"</p>"
          }
    
          document.getElementById("salida").innerHTML = str;
 
    
        localStorage.setItem("ls_nombres",JSON.stringify(nombres));
        localStorage.setItem("ls_dia",JSON.stringify(dia));
        localStorage.setItem("ls_hora",JSON.stringify(hora));
        localStorage.setItem("ls_ninos",JSON.stringify(ninos));
        }
 


        function agregar(){
        //obtener valores del form
        var minombres = document.getElementById('nombress').value;
        var midia = document.getElementById('diaa').value;
        var mihora = document.getElementById('horaa').value;
        var mininos = document.getElementsByName('ninoss')[0].checked;
        console.log(minombres,midia,mihora,mininos); //muestra los valores por consola
        //agrega valores a las var en ultimo lugar
        nombres.push(minombres);
        dia.push(midia);
        hora.push(mihora);
        ninos.push(mininos);
        listarTodo(); 
    
    localStorage.setItem('ls_nombres',JSON.stringify(nombres));//almacena en el almacenamiento local
    }

    function eliminarUno(){
    var paraEliminar = document.getElementById('nroElem').value;
    nombres.splice(paraEliminar,1);
    dia.splice(paraEliminar,1);
    hora.splice(paraEliminar,1);
    ninos.splice(paraEliminar,1);
    listarTodo();
    }
 
    function eliminarTodos(){
    var bool_eliminar = document.getElementsByName('delAfiliado');
    console.log(bool_eliminar[0].checked);
    var b_elim = bool_eliminar[0].checked;
    for(var i=0 ; i<nombres.length ; i++){
    if(ninos[i]== b_elim){
          nombres.splice(i,1);
          dia.splice(i,1);
          hora.splice(i,1);
          ninos.splice(i,1);
      }
    }
  listarTodo();
}
 
 function ascendente(){
                var bandera,aux;
                do{
                    bandera = false;
                    for(var i=0 ; i<nombres.length - 1 ; i++){
                        if(hora[i]>hora[i+1]){
                            console.log(hora[i]+" "+hora[i+1]);
                            aux = hora[i];
                            hora[i] = hora[i+1];
                            hora[i+1]= aux;
                            bandera = true;
 
                            aux = nombres[i];
                            nombres[i]= nombres[i+1];
                            nombres[i+1]=aux;
 
                            aux = dia[i];
                            dia[i]= dia[i+1];
                            dia[i+1]=aux;
 
                            aux = ninos[i];
                            ninos[i]=ninos[i+1];
                            ninos[i+1]= aux;
 
                        }
                    }
                }while(bandera);
                listarTodo();
            } 
 function descendente(){
                var bandera,aux;
                do{
                    bandera = false;
                    for(var i=0 ; i<nombres.length - 1 ; i++){
                        if(hora[i]<hora[i+1]){
                            console.log(hora[i]+" "+hora[i+1]);
                            aux = hora[i];
                            hora[i] = hora[i+1];
                            hora[i+1]= aux;
                            bandera = true;
 
                            aux = nombres[i];
                            nombres[i]= nombres[i+1];
                            nombres[i+1]=aux;
 
 
                            aux = dia[i];
                            dia[i]= dia[i+1];
                            dia[i+1]=aux;
 
                            aux = ninos[i];
                            ninos[i]= ninos[i+1];
                           ninos[i+1]=aux;
                        }
                    }
                }while(bandera);
                listarTodo();
            } 


  //galeria2