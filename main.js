
var homer_partido={
    "imagen": [{
        "parte": "/imagenes/homer_partido/homer_entero_swap_part1x1.jpg"
       
    },
    {  "parte": "/imagenes/homer_partido/homer_entero_swap_part1x2.jpg"}
    ,
    {  "parte": "/imagenes/homer_partido/homer_entero_swap_part1x3.jpg"}
    ,
    {  "parte": "/imagenes/homer_partido/homer_entero_swap_part1x4.jpg"}
    ,
    {  "parte": "/imagenes/homer_partido/homer_entero_swap_part2x1.jpg"}
    ,
    {  "parte": "/imagenes/homer_partido/homer_entero_swap_part2x2.jpg"}
    ,
    {  "parte": "/imagenes/homer_partido/homer_entero_swap_part2x3.jpg"}
    ,
    {  "parte": "/imagenes/homer_partido/homer_entero_swap_part2x4.jpg"}
    ,
    {  "parte": "/imagenes/homer_partido/homer_entero_swap_part3x1.jpg"}
    ,
    {  "parte": "/imagenes/homer_partido/homer_entero_swap_part3x2.jpg"}
    ,
    {  "parte": "/imagenes/homer_partido/homer_entero_swap_part3x3.jpg"}
    ,
    {  "parte": "/imagenes/homer_partido/homer_entero_swap_part3x4.jpg"}
    ,
    {  "parte": "/imagenes/homer_partido/homer_entero_swap_part4x1.jpg"}
    ,
    {  "parte": "/imagenes/homer_partido/homer_entero_swap_part4x2.jpg"}
    ,
    {  "parte": "/imagenes/homer_partido/homer_entero_swap_part4x3.jpg"}
    ,
    {  "parte": "/imagenes/homer_partido/homer_entero_swap_part4x4.jpg"}
]
}

var puzzle_partido={
    "imagen":[{
        "parte":"/imagenes/puzzle_partido/puzzle_swap_part1x1.jpg"
    },
    {
        "parte":"/imagenes/puzzle_partido/puzzle_swap_part1x2.jpg"
    },
    {
        "parte":"/imagenes/puzzle_partido/puzzle_swap_part1x3.jpg"
    },
    {
        "parte":"/imagenes/puzzle_partido/puzzle_swap_part1x4.jpg"
    },
    {
        "parte":"/imagenes/puzzle_partido/puzzle_swap_part2x1.jpg"
    }
    ,
    {
        "parte":"/imagenes/puzzle_partido/puzzle_swap_part2x2.jpg"
    },
    {
        "parte":"/imagenes/puzzle_partido/puzzle_swap_part2x3.jpg"
    },
    {
        "parte":"/imagenes/puzzle_partido/puzzle_swap_part2x4.jpg"
    },
    {
        "parte":"/imagenes/puzzle_partido/puzzle_swap_part3x1.jpg"
    },

    {
        "parte":"/imagenes/puzzle_partido/puzzle_swap_part3x2.jpg"
    }
    ,

    {
        "parte":"/imagenes/puzzle_partido/puzzle_swap_part3x3.jpg"
    }
    ,

    {
        "parte":"/imagenes/puzzle_partido/puzzle_swap_part3x4.jpg"
    },

    {
        "parte":"/imagenes/puzzle_partido/puzzle_swap_part4x1.jpg"
    },

    {
        "parte":"/imagenes/puzzle_partido/puzzle_swap_part4x2.jpg"
    }
    ,

    {
        "parte":"/imagenes/puzzle_partido/puzzle_swap_part4x3.jpg"
    }
    ,

    {
        "parte":"/imagenes/puzzle_partido/puzzle_swap_part4x4.jpg"
    }
]
}


    load_puzzle(puzzle_partido)

    document.getElementById("start").onclick=function(){
     load_puzzle_random(homer_partido);
    };
   


$(document).ready(function(){
  
    $(".sim").click(function(){
        $("#puzzle").empty();
        load_puzzle(homer_partido);
    });


})

function load_puzzle(puzzle_json){
   
    puzzle_json.imagen.forEach(function(obj){
        var img = new Image();
        img.src=obj.parte;
        img.setAttribute("class","border");
        img.setAttribute("height","95");
        img.setAttribute("width","95");
        document.getElementById("puzzle").appendChild(img);
    })
    }

    function load_puzzle_random(puzzle_json){
        var values= Object.values(puzzle_json);
      
        for(var i =0 ;i<values.length;i++){
            var img = new Image();
            
            img.src=values[parseInt(Math.random()*values.length)];
            img.setAttribute("class","border");
            img.setAttribute("height","95");
            img.setAttribute("width","95");
            document.getElementById("puzzle").appendChild(img);
        }
   
     
        }