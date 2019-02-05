var array_homer_partido=[ "/imagenes/homer_partido/homer_entero_swap_part1x1.jpg",
"/imagenes/homer_partido/homer_entero_swap_part1x2.jpg",
"/imagenes/homer_partido/homer_entero_swap_part1x3.jpg",
"/imagenes/homer_partido/homer_entero_swap_part1x4.jpg",
"/imagenes/homer_partido/homer_entero_swap_part2x1.jpg",
"/imagenes/homer_partido/homer_entero_swap_part2x2.jpg",
"/imagenes/homer_partido/homer_entero_swap_part2x3.jpg",
"/imagenes/homer_partido/homer_entero_swap_part2x4.jpg",
"/imagenes/homer_partido/homer_entero_swap_part3x1.jpg",
"/imagenes/homer_partido/homer_entero_swap_part3x2.jpg",
"/imagenes/homer_partido/homer_entero_swap_part3x3.jpg",
"/imagenes/homer_partido/homer_entero_swap_part3x4.jpg",
"/imagenes/homer_partido/homer_entero_swap_part4x1.jpg",
"/imagenes/homer_partido/homer_entero_swap_part4x2.jpg",
"/imagenes/homer_partido/homer_entero_swap_part4x3.jpg",
"/imagenes/homer_partido/homer_entero_swap_part4x4.jpg"
];



var array_puzzle_partido=[
    "/imagenes/puzzle_partido/puzzle_swap_part1x1.jpg",
    "/imagenes/puzzle_partido/puzzle_swap_part1x2.jpg",
    "/imagenes/puzzle_partido/puzzle_swap_part1x3.jpg",
    "/imagenes/puzzle_partido/puzzle_swap_part1x4.jpg",
    "/imagenes/puzzle_partido/puzzle_swap_part2x1.jpg",
    "/imagenes/puzzle_partido/puzzle_swap_part2x2.jpg",
    "/imagenes/puzzle_partido/puzzle_swap_part2x3.jpg",
    "/imagenes/puzzle_partido/puzzle_swap_part2x4.jpg",
    "/imagenes/puzzle_partido/puzzle_swap_part3x1.jpg",
    "/imagenes/puzzle_partido/puzzle_swap_part3x2.jpg",
    "/imagenes/puzzle_partido/puzzle_swap_part3x3.jpg",
    "/imagenes/puzzle_partido/puzzle_swap_part3x4.jpg",
    "/imagenes/puzzle_partido/puzzle_swap_part4x1.jpg",
    "/imagenes/puzzle_partido/puzzle_swap_part4x2.jpg",
    "/imagenes/puzzle_partido/puzzle_swap_part4x3.jpg",
    "/imagenes/puzzle_partido/puzzle_swap_part4x4.jpg"
]






var ri=0;
var erased_value="";
var movimientos=0;


    load_puzzle_from_array(array_puzzle_partido);
 
  
  
   



  
    $(".sim").click(function(){
        $("#puzzle").empty();
        load_puzzle_from_array(array_homer_partido);
    });

    $("#start").click(function () {
        $("#puzzle").empty();
        $("#mov").text("00");
        load_random_puzzle(array_homer_partido);
        incializar_partes();
      });


      $(".grif").click(function () {
        $("#puzzle").empty();
        load_puzzle_from_array(array_puzzle_partido);
      });

      function seTocanDerechaNormal(elemenet,vacio,parte,espacio_blanco){
          if(elemenet.right==vacio.left && elemenet.top==vacio.top){
            makeTransition(parte,espacio_blanco);
                return true;
          } else return false;
     
      }

      function seTocanIzquierda(element,vacio,parte,espacio_blanco){
          if(element.left==vacio.right && element.top==vacio.top){
            makeTransition(parte,espacio_blanco);
            return true;
        } else return false;
       
      }

      function seTocanArriba(elemenet,vacio,parte,espacio_blanco){
          if( elemenet.bottom==vacio.top && elemenet.left==vacio.left){
           
            makeTransition(parte,espacio_blanco);
            return true;
        } else return false;
       
       
      }


      function seTocanAbajo(element,vacio,parte,espacio_blanco) {
          if(element.top==vacio.bottom && element.left==vacio.left){
             
            makeTransition(parte,espacio_blanco);
                return true;
          } else return false;
           
        }

        function makeTransition(parte,espacio_blanco){
            espacio_blanco.setAttribute("src",parte.getAttribute("src"))
            espacio_blanco.removeAttribute("id");
            espacio_blanco.setAttribute("class","border");

          
          parte.setAttribute("src","");
          parte.setAttribute("id","vacio")
              return true;
        }

      function calcular_si_mueve(element){
         var valor_element = element.getBoundingClientRect();
         var vacio = document.getElementById("vacio");
  

         var valor_vacio =vacio.getBoundingClientRect();

         if (
            seTocanAbajo(valor_element, valor_vacio, element, vacio) ||
            seTocanArriba(valor_element, valor_vacio, element, vacio) ||
            seTocanDerechaNormal(valor_element, valor_vacio, element, vacio) ||
            seTocanIzquierda(valor_element, valor_vacio, element, vacio)
        ) {
          
            var valor_anterior = Number(document.getElementById("mov").innerHTML);
            document.getElementById("mov").innerHTML=valor_anterior+1;
    
        } else {
           
            $('"'+"#"+element.getAttribute("id")+'"').fadeIn(100).fadeOut(100);
           
        }            

        
      }


    




function load_puzzle_from_array(array_puzzle){
   // compruebo si el array tiene un vacio
   // de ser asi 
   if(array_puzzle.indexOf("")>-1){
    array_puzzle[array_puzzle.indexOf("")]=erased_value;
   }
   array_puzzle.sort();
  
    
    for(var i =0;i<array_puzzle.length;i++){
        var img = new Image();
        img.src=array_puzzle[i];
        img.setAttribute("class","border");
        img.setAttribute("height","95");
        img.setAttribute("width","95");
        document.getElementById("puzzle").appendChild(img);

    }
}



   function load_random_puzzle(array_puzzle){
       // comprueba que no haya un espacio de ser asi 
       // genero un numero random
       // dentro del length de mi array 
       // y le quito la propiedad
        ri = Math.floor(Math.random() * array_puzzle.length);
       if(!array_puzzle.includes("")){
           erased_value=array_puzzle[ri];
      
        array_puzzle[ri]="";
       }
      
       array_puzzle.sort(function(a, b){return 0.5 - Math.random()});
    for(var i =0;i<array_puzzle.length;i++){
       
        var img = new Image();
        img.src=array_puzzle[i];
        img.setAttribute("id","flash"+i);
        img.setAttribute("class","border");
        if(array_puzzle[i]==""&&i!=0){
            img.setAttribute("id","vacio");
        } 
        img.setAttribute("height","95");
        img.setAttribute("width","95");
        document.getElementById("puzzle").appendChild(img);

    }
   
   }

   function incializar_partes(){
       var partes = document.getElementById("puzzle").childNodes;
      
       for (let index = 0; index < partes.length; index++) {
           
          partes[index].addEventListener("click",function(){
             calcular_si_mueve(partes[index]);
          })
           
       }
   }



 
