function validarDni(inputDni){ //Aquesta funció comprova que el DNI sigui vàlid.
    
     var lletres = 'TRWAGMYFPDXBNJZSQVHLCKET';//Les lletres les posam en majúscula perque ens sigui més fàcil comprovar el DNI. 
  
     var dniPatro = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
 
     var majus = inputDni.toString().toUpperCase();//Aquesta funció ens passa a String i a majúscules. 
 
     
     if (!dniPatro.test(majus)) return false;
 
     var dni = majus
     var lletra = majus.substr(-1);
     var posicioLletres = parseInt(dni.substr(0, 8)) % 23;
 
 
     if (lletres.charAt(posicioLletres) === lletra) return true;
 
     return false;
 }
$(document).ready(function(){
    $("#formulari").submit(function(event){
        if(validarDni($("#dni").val())){//Si el DNI és vàlid s'afegirà una linia a la taula.
            var novaFila = $("<tr><td>"+$("#dni").val()+"</td><td>"+$("#nom").val()
                +"</td><td>"+$("#llinatges").val()+"</td><td>"+"</td><td>"+$("#mail").val()
                    +"</td><td>"+$("#nota").val()+"</td><td><button id='esborrar'><i class='btn btn-secondary'>Esborrar</i></button></td></tr>");//Afegim el botó "esborrar" per a cada filera així es poden eliminar només els alumnes seleccionats. 
                    novaFila.appendTo("#contingutTaula"); 
                    $("#formulari")[0].reset();//Si no posam aquesta funció, un cop introduït un alumne, el formulari segueix amb les dades. Si la posem, per a cada alumne, ens apareixerà el formulari en blanc. 
                }else{
                    alert("El DNI no és correcte"); //Si el DNI (funció anterior) no és correcte, no s'afegirà l'alumne i s'ens avisarà.
                }
                return false;
            }); 
            $("#tabla").on('click', '#esborrar', function(){//Aquesta funció ens elimina les fileres que seleccionem.
                $(this).closest('tr').remove();
            });
        })



