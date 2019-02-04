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


    load_puzzle_from_array(array_puzzle_partido);
 
  
  
   



  
    $(".sim").click(function(){
        $("#puzzle").empty();
        load_puzzle_from_array(array_homer_partido);
    });

    $("#start").click(function () {
        $("#puzzle").empty();
        load_random_puzzle(array_homer_partido);
        incializar_partes();
      });


      $(".grif").click(function () {
        $("#puzzle").empty();
        load_puzzle_from_array(array_puzzle_partido);
      });

      function calcular_si_mueve(element){
          alert(element.getAttribute("src")+" y "+$(".vacio").attr("class"));
          
        if(element.left==$(".vacio").right){
                
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
        if( array_puzzle[i]==""){
            var img = new Image();
            img.src=array_puzzle[i];
            img.setAttribute("class","border");
            img.setAttribute("class","vacio");
            img.setAttribute("height","95");
            img.setAttribute("width","95");
            document.getElementById("puzzle").appendChild(img);
        }
        var img = new Image();
        img.src=array_puzzle[i];
        img.setAttribute("class","border");
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



 
