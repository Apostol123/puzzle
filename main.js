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






var ri = 0;
var erased_value = "";
var erased_value_peter = "";
var erased_value_stan = "";
var erased_value_south_park = "";
var movimientos = 0;
var stopWatch;
var comodin = 1;
var puzzleElegido = "";

load_puzzle_from_array(array_puzzle_partido);








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

function flash(elemenet) {

    $("#puzzle").find("img[name=" + elemenet + "]").fadeOut("fast").fadeIn("fast");
}



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

function makeTransition(parte, espacio_blanco) {
    espacio_blanco.setAttribute("src", parte.getAttribute("src"))
    espacio_blanco.removeAttribute("id");
    espacio_blanco.setAttribute("class", "border");


    parte.setAttribute("src", "");
    parte.setAttribute("id", "vacio")
    return true;
}





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

function comprovarGanado(Puzzle_marcha, puzzle_Original) {

    puzzle_Original = comprovarPosiciones(puzzle_Original);
    var correcto = 0;
    for (let index = 0; index < puzzle_Original.length; index++) {


        if (puzzle_Original[index] == Puzzle_marcha[index].getAttribute("src")) {
            correcto++;


        }

        if (correcto == 12) {
            alert("has ganado!");
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

function moverComodin(element) {
    var vacio = document.getElementById("vacio");
    if (comodin == 1) {
        makeTransition(element, vacio);
        comodin = 0;
        document.getElementById("comodin").innerHTML = comodin;
    }

}




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
    // compruebo si el array tiene un vacio
    // de ser asi 


}



function load_random_puzzle(array_puzzle) {
    // comprueba que no haya un espacio de ser asi 
    // genero un numero random
    // dentro del length de mi array 
    // y le quito la propiedad
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