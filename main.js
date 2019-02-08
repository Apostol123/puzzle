

/// Carga de datos en array;
var array_homer_partido = ["/imagenes/homer_partido/homer_entero_swap_part1x1.jpg",
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

var array_south_park = ["/imagenes/south_park_partido/southpark_swap_part1x1.jpg",
    "/imagenes/south_park_partido/southpark_swap_part1x2.jpg",
    "/imagenes/south_park_partido/southpark_swap_part1x3.jpg",
    "/imagenes/south_park_partido/southpark_swap_part1x4 .jpg",
    "/imagenes/south_park_partido/southpark_swap_part2x1.jpg",
    "/imagenes/south_park_partido/southpark_swap_part2x2.jpg",
    "/imagenes/south_park_partido/southpark_swap_part2x3.jpg",
    "/imagenes/south_park_partido/southpark_swap_part2x4.jpg",
    "/imagenes/south_park_partido/southpark_swap_part3x1.jpg",
    "/imagenes/south_park_partido/southpark_swap_part3x2.jpg",
    "/imagenes/south_park_partido/southpark_swap_part3x3.jpg",
    "/imagenes/south_park_partido/southpark_swap_part3x4.jpg",
    "/imagenes/south_park_partido/southpark_swap_part4x1.jpg",
    "/imagenes/south_park_partido/southpark_swap_part4x2.jpg",
    "/imagenes/south_park_partido/southpark_swap_part4x3.jpg",
    "/imagenes/south_park_partido/southpark_swap_part4x4.jpg",
]

var array_american_dad = ["/imagenes/american_dad_partido/american dad_swap_part1x1.jpg",
    "/imagenes/american_dad_partido/american dad_swap_part1x2.jpg",
    "/imagenes/american_dad_partido/american dad_swap_part1x3.jpg",
    "/imagenes/american_dad_partido/american dad_swap_part1x4.jpg",
    "/imagenes/american_dad_partido/american dad_swap_part2x1.jpg",
    "/imagenes/american_dad_partido/american dad_swap_part2x2.jpg",
    "/imagenes/american_dad_partido/american dad_swap_part2x3.jpg",
    "/imagenes/american_dad_partido/american dad_swap_part2x4.jpg",
    "/imagenes/american_dad_partido/american dad_swap_part3x1.jpg",
    "/imagenes/american_dad_partido/american dad_swap_part3x2.jpg",
    "/imagenes/american_dad_partido/american dad_swap_part3x3.jpg",
    "/imagenes/american_dad_partido/american dad_swap_part3x4.jpg",
    "/imagenes/american_dad_partido/american dad_swap_part4x1.jpg",
    "/imagenes/american_dad_partido/american dad_swap_part4x2.jpg",
    "/imagenes/american_dad_partido/american dad_swap_part4x3.jpg",
    "/imagenes/american_dad_partido/american dad_swap_part4x4.jpg",
];

var array_peter_partido = ["/imagenes/peter_partido/peter_swap_part1x1.jpg",
    "/imagenes/peter_partido/peter_swap_part1x2.jpg",
    "/imagenes/peter_partido/peter_swap_part1x3.jpg",
    "/imagenes/peter_partido/peter_swap_part1x4.jpg",
    "/imagenes/peter_partido/peter_swap_part2x1.jpg",
    "/imagenes/peter_partido/peter_swap_part2x2.jpg",
    "/imagenes/peter_partido/peter_swap_part2x3.jpg",
    "/imagenes/peter_partido/peter_swap_part2x4.jpg",
    "/imagenes/peter_partido/peter_swap_part3x1.jpg",
    "/imagenes/peter_partido/peter_swap_part3x2.jpg",
    "/imagenes/peter_partido/peter_swap_part3x3.jpg",
    "/imagenes/peter_partido/peter_swap_part3x4.jpg",
    "/imagenes/peter_partido/peter_swap_part4x1.jpg",
    "/imagenes/peter_partido/peter_swap_part4x2.jpg",
    "/imagenes/peter_partido/peter_swap_part4x3.jpg",
    "/imagenes/peter_partido/peter_swap_part4x4.jpg",
]


var array_puzzle_partido = [
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



// variables globales 

var ri = 0;
var erased_value = "";
var erased_value_peter = "";
var erased_value_stan = "";
var erased_value_south_park = "";
var movimientos = 0;
var stopWatch;
var comodin = 1;
var puzzleElegido = "";



// cargado el array .. solo se mostrara la primera vez que se abre el juego
load_puzzle_from_array(array_puzzle_partido);






// funccion que controlo las acciones de boton homer simpson
// basicament assigna a la variable puzzleElegido el valor de homer .. vacio el contenedor 
//de piezas de puzzle, carga el puzzle de homer y para el cronometro
// este funccionamient se repita en las 4 funccion siguientes

$(".sim").click(function () {

    puzzleElegido = "homer"
    $("#puzzle").empty();
    load_puzzle_from_array(array_homer_partido);
    clearInterval(stopWatch);
});



$(".stan").click(function () {

    puzzleElegido = "stan"
    $("#puzzle").empty();
    load_puzzle_from_array(array_american_dad);
    clearInterval(stopWatch);
});


$(".grif").click(function () {
    puzzleElegido = "peter"
    $("#puzzle").empty();
    load_puzzle_from_array(array_peter_partido);
    clearInterval(stopWatch);
});

$(".south_park").click(function () {
    puzzleElegido = "south_park"
    $("#puzzle").empty();
    load_puzzle_from_array(array_south_park);
    clearInterval(stopWatch);
});


// controla la imagen que se va a enseñar de ayuda al jugador 
//dependiendo del puzle selccionado 
$(".ayuda").click(function () {
    switch (puzzleElegido) {
        case "homer":
            $(".foto_ayuda").attr("src", "/imagenes/homer_entero.jpg");
            break;
        case "peter":
            $(".foto_ayuda").attr("src", "/imagenes/peter.png");
            break;

        case "stan":
            $(".foto_ayuda").attr("src", "/imagenes/american dad.jpg");
            break;
        case "south_park":
            $(".foto_ayuda").attr("src", "/imagenes/southpark.jpg");
            break;
    }

    $(".foto_ayuda").attr("width", "200px");

    $(".foto_ayuda").attr("height", "250px");

    $(".foto_ayuda").toggle();



});

// al apretar el boton start varca el contenedor de puzzle
// reseta los movimientos
// carga el puzle elegido 
// para y vuelva a  inciar el cronometro
// y resetea el comodin

$("#start").click(function () {
    $("#puzzle").empty();
    $("#mov").text("00");
    switch (puzzleElegido) {
        case "homer":

            load_random_puzzle(array_homer_partido);
            break;
        case "peter":
            load_random_puzzle(array_peter_partido);
            break;
        case "stan":
            load_random_puzzle(array_american_dad);
            break;

        case "south_park":
            load_random_puzzle(array_south_park);
            break;
    }
    clearInterval(stopWatch);
    incializar_partes();
    cronometro();
    comodin = 1;
    $("#comodin").text("1");
});

// funcccion que hace el efecto para indicar al jugador que el movimento no es permitdo

function flash(elemenet) {

    $("#puzzle").find("img[name=" + elemenet + "]").fadeOut("fast").fadeIn("fast");
}


// funcciones que detectan si es posible mover la pieza
// la logica de estas funciones esta en que si la posicion 
// en la que esta el espacio en blanco 
// es una posicion proxima a la posicon de la pieza
// a la que se clico se hara el movimiento de lo contraro 
// se llamara a la funccion flash
function seTocanDerechaNormal(elemenet, vacio, parte, espacio_blanco) {
    if (elemenet.right == vacio.left && elemenet.top == vacio.top) {
        makeTransition(parte, espacio_blanco);
        return true;
    } else return false;

}

function seTocanIzquierda(element, vacio, parte, espacio_blanco) {
    if (element.left == vacio.right && element.top == vacio.top) {
        makeTransition(parte, espacio_blanco);
        return true;
    } else return false;

}

function seTocanArriba(elemenet, vacio, parte, espacio_blanco) {
    if (elemenet.bottom == vacio.top && elemenet.left == vacio.left) {

        makeTransition(parte, espacio_blanco);
        return true;
    } else return false;


}


function seTocanAbajo(element, vacio, parte, espacio_blanco) {
    if (element.top == vacio.bottom && element.left == vacio.left) {

        makeTransition(parte, espacio_blanco);
        return true;
    } else return false;

}

// funccion que hace el movimient del comodin

function makeTransition(parte, espacio_blanco) {
    espacio_blanco.setAttribute("src", parte.getAttribute("src"))
    espacio_blanco.removeAttribute("id");
    espacio_blanco.setAttribute("class", "border");


    parte.setAttribute("src", "");
    parte.setAttribute("id", "vacio")
    return true;
}



// esta funccion es el main del programa
// lo primero que hace es calcular
// si el jugador ha ganado (explicacion de la funccion de ganado mas abajo)
// luego coje las posiciones de la parte del puzzle clickada
// y la poscicon del espacio en blanco 
// si alguna de las funcciones de comprovacion de movimiento nombradas arribas
// es possible hara el movimiento sino se indicar al jugador que el movimeinto
// no es posible
// tambien incremete el nr de movimientos

function calcular_si_mueve(element, partes) {
    switch (puzzleElegido){
case "south_park":  comprovarGanado(partes, array_south_park);  break;
case "peter":  comprovarGanado(partes, array_peter_partido); break;
case "homer": comprovarGanado(partes, array_homer_partido); break;
case "stan ":  comprovarGanado(partes, erased_value_stan); break;
    }
   
    var valor_element = element.getBoundingClientRect();
    var vacio = document.getElementById("vacio");


    var valor_vacio = vacio.getBoundingClientRect();

    if (
        seTocanAbajo(valor_element, valor_vacio, element, vacio) ||
        seTocanArriba(valor_element, valor_vacio, element, vacio) ||
        seTocanDerechaNormal(valor_element, valor_vacio, element, vacio) ||
        seTocanIzquierda(valor_element, valor_vacio, element, vacio)
    ) {

        var valor_anterior = Number(document.getElementById("mov").innerHTML);
        document.getElementById("mov").innerHTML = valor_anterior + 1;

    } else {

        flash(element.getAttribute("name"))

    }


}

// recoje el puzzle original y el puzzle en marcha
// ordena el puzle original .. 
// y comprueba posicion por posicon
// si las posciones de las piezas de puzle original 
// son iguales a las posicones de las piezas del puzle en juego (el que esta desordenado)
// si esto es igual a 15 osea si todas las piezas del puzle el marcha(desordenado) son iguales
// a las piezas del puzle original(ordenado) el jugador a ganado
// poruqe se de por entender que el puzzle esta resuelto
function comprovarGanado(Puzzle_marcha, puzzle_Original) {

    puzzle_Original = comprovarPosiciones(puzzle_Original);
    var correcto = 0;
    for (let index = 0; index < puzzle_Original.length; index++) {


        if (puzzle_Original[index] == Puzzle_marcha[index].getAttribute("src")) {
            correcto++;


        }

        if (correcto == 15) {
            alert("has ganado!"+"\n"+"Movimientos: "+document.getElementById("mov").innerHTML);
           
            $("#puzzle").empty();
            switch(puzzleElegido){
                case "homer" :  load_puzzle_from_array(array_homer_partido);break;
                case "peter":  load_puzzle_from_array(array_peter_partido);break;
                case "stan":  load_puzzle_from_array(erased_value_stan);break;
                case "south_park":  load_puzzle_from_array(array_south_park);break;
            }
           
            clearInterval(stopWatch);

        }


    }
    document.getElementById("correcto").innerHTML = correcto;

}


// funccion que se llama cuando se quiere hacer el moviemietno del comodin
function moverComodin(element) {
    var vacio = document.getElementById("vacio");
    if (comodin == 1) {
        makeTransition(element, vacio);
        comodin = 0;
        document.getElementById("comodin").innerHTML = comodin;
    }

}



// esta funccion se usa para reordenar el puzzle orginal 
// y hacer la comprovacion de las posciones mencionado arriba

function comprovarPosiciones(array_puzzle) {
    switch (puzzleElegido) {
        case "south_park":
            if (array_puzzle.indexOf("") > -1) {
                array_puzzle[array_puzzle.indexOf("")] = erased_value_south_park;
            }
            array_puzzle.sort();
            break;

        case "homer":
            if (array_puzzle.indexOf("") > -1) {
                array_puzzle[array_puzzle.indexOf("")] = erased_value;
            }
            array_puzzle.sort();
            break;

        case "peter":
            if (array_puzzle.indexOf("") > -1) {
                array_puzzle[array_puzzle.indexOf("")] = erased_value_peter;
            }
            array_puzzle.sort();
            break;
        case "stan":
            if (array_puzzle.indexOf("") > -1) {
                array_puzzle[array_puzzle.indexOf("")] = erased_value_stan;
            }
            array_puzzle.sort();
            break;
    }




    return array_puzzle;
}

// funccion que dibuja el puzzle
// recorro el array selecionado
// y creo objetos imagenes y le asgno el valor de la parte 

function load_puzzle_from_array(array_puzzle) {
    switch (puzzleElegido) {
        case "homer":
            if (array_puzzle.indexOf("") > -1) {
                array_puzzle[array_puzzle.indexOf("")] = erased_value;
            }
            array_puzzle.sort();


            for (var i = 0; i < array_puzzle.length; i++) {
                var img = new Image();
                img.src = array_puzzle[i];
                img.setAttribute("class", "border");
                img.setAttribute("height", "95");
                img.setAttribute("width", "95");
                document.getElementById("puzzle").appendChild(img);

            }
            break;

        case "peter":
            if (array_puzzle.indexOf("") > -1) {
                array_puzzle[array_puzzle.indexOf("")] = erased_value_peter;
            }
            array_puzzle.sort();


            for (var i = 0; i < array_puzzle.length; i++) {
                var img = new Image();
                img.src = array_puzzle[i];
                img.setAttribute("class", "border");
                img.setAttribute("height", "95");
                img.setAttribute("width", "95");
                document.getElementById("puzzle").appendChild(img);

            }
            break;
        case "stan":
            if (array_puzzle.indexOf("") > -1) {
                array_puzzle[array_puzzle.indexOf("")] = erased_value_stan;
            }
            array_puzzle.sort();


            for (var i = 0; i < array_puzzle.length; i++) {
                var img = new Image();
                img.src = array_puzzle[i];
                img.setAttribute("class", "border");
                img.setAttribute("height", "95");
                img.setAttribute("width", "95");
                document.getElementById("puzzle").appendChild(img);

            }
            break;

        case "south_park":
            if (array_puzzle.indexOf("") > -1) {
                array_puzzle[array_puzzle.indexOf("")] = erased_value_south_park;
            }
            array_puzzle.sort();


            for (var i = 0; i < array_puzzle.length; i++) {
                var img = new Image();
                img.src = array_puzzle[i];
                img.setAttribute("class", "border");
                img.setAttribute("height", "95");
                img.setAttribute("width", "95");
                document.getElementById("puzzle").appendChild(img);

            }
            break;
        default:
            array_puzzle.sort();


            for (var i = 0; i < array_puzzle.length; i++) {
                var img = new Image();
                img.src = array_puzzle[i];
                img.setAttribute("class", "border");
                img.setAttribute("height", "95");
                img.setAttribute("width", "95");
                document.getElementById("puzzle").appendChild(img);

            }
            break;
    }
    

}


// cargo de forma random el array
// primero compruebo que np haya un espacio en blanco
// para no hacer varios espacios en blanco
// luego genero un numero random
// este numero random se le asigna el espacio en blanco
function load_random_puzzle(array_puzzle) {
  
    switch (puzzleElegido) {
        case "homer":
            ri = Math.floor(Math.random() * array_puzzle.length);
            if (!array_puzzle.includes("")) {
                erased_value = array_puzzle[ri];

                array_puzzle[ri] = "";
            }

            array_puzzle.sort(function (a, b) {
                return 0.5 - Math.random()
            });
            for (var i = 0; i < array_puzzle.length; i++) {

                var img = new Image();
                img.src = array_puzzle[i];
                img.setAttribute("name", "puzzle" + i);
                img.setAttribute("class", "border");
                if (array_puzzle[i] == "" && i != 0) {
                    img.setAttribute("id", "vacio");
                }
                img.setAttribute("height", "95");
                img.setAttribute("width", "95");
                document.getElementById("puzzle").appendChild(img);

            }
            break;

        case "peter":
            ri = Math.floor(Math.random() * array_puzzle.length);
            if (!array_puzzle.includes("")) {
                erased_value_peter = array_puzzle[ri];

                array_puzzle[ri] = "";
            }

            array_puzzle.sort(function (a, b) {
                return 0.5 - Math.random()
            });
            for (var i = 0; i < array_puzzle.length; i++) {

                var img = new Image();
                img.src = array_puzzle[i];
                img.setAttribute("name", "puzzle" + i);
                img.setAttribute("class", "border");
                if (array_puzzle[i] == "" && i != 0) {
                    img.setAttribute("id", "vacio");
                }
                img.setAttribute("height", "95");
                img.setAttribute("width", "95");
                document.getElementById("puzzle").appendChild(img);

            }
            break;
        case "stan":
            ri = Math.floor(Math.random() * array_puzzle.length);
            if (!array_puzzle.includes("")) {
                erased_value_stan = array_puzzle[ri];

                array_puzzle[ri] = "";
            }

            array_puzzle.sort(function (a, b) {
                return 0.5 - Math.random()
            });
            for (var i = 0; i < array_puzzle.length; i++) {

                var img = new Image();
                img.src = array_puzzle[i];
                img.setAttribute("name", "puzzle" + i);
                img.setAttribute("class", "border");
                if (array_puzzle[i] == "" && i != 0) {
                    img.setAttribute("id", "vacio");
                }
                img.setAttribute("height", "95");
                img.setAttribute("width", "95");
                document.getElementById("puzzle").appendChild(img);

            }
            break;
        case "south_park":
            ri = Math.floor(Math.random() * array_puzzle.length);
            if (!array_puzzle.includes("")) {
                erased_value_south_park = array_puzzle[ri];

                array_puzzle[ri] = "";
            }

            array_puzzle.sort(function (a, b) {
                return 0.5 - Math.random()
            });
            for (var i = 0; i < array_puzzle.length; i++) {

                var img = new Image();
                img.src = array_puzzle[i];
                img.setAttribute("name", "puzzle" + i);
                img.setAttribute("class", "border");
                if (array_puzzle[i] == "" && i != 0) {
                    img.setAttribute("id", "vacio");
                }
                img.setAttribute("height", "95");
                img.setAttribute("width", "95");
                document.getElementById("puzzle").appendChild(img);

            }
            break;
    }


}

/// asigno a todos las piezas de puzzle
// las funcciones de onclick para comprovar si se pueden  mover

function incializar_partes() {
    var partes = document.getElementById("puzzle").childNodes;

    for (let index = 0; index < partes.length; index++) {

        partes[index].addEventListener("click", function () {
            calcular_si_mueve(partes[index], partes);

        })

        partes[index].addEventListener("dblclick", function () {
            moverComodin(partes[index]);
        })
    }
}


// funccion que controla el cronometro
// asigno intervalors y variables 
// para augmentar los segundos y minutos

function cronometro() {
    var mili = 0;
    var seconds = 0;
    var minutes = 0;

    stopWatch = setInterval(function () {
        mili++;
        document.getElementById("milisegundos").innerHTML = mili;
        if (mili == 60) {
            mili = 0;
            seconds++;
            document.getElementById("segundos").innerHTML = seconds + ":";
        }

        if (seconds == 60) {
            minutes++;
            seconds = 0;
            document.getElementById("minutos").innerHTML = minutes + ":";
        }
    }, 10);

}