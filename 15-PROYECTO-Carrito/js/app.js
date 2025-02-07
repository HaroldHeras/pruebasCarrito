

const carrito = document.querySelector("#carrito");

const contenedorCarrito = document.querySelector("#lista-carrito tbody");

const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");

const listaCursos = document.querySelector("#lista-cursos");

let articulosCarrito = [];


cargarEventListeners();

function cargarEventListeners(){
    listaCursos.addEventListener("click", agregarCurso);        //Cuando pulsas en "Agregar al carrito"

}



//----------FUNCIONES-----------------

function agregarCurso(e){                                   //Agrega al carrito un curso

    e.preventDefault();

    if(e.target.classList.contains("agregar-carrito")){

        const cursoSeleccionado = e.target.parentElement.parentElement;
        console.log("Agregando al carrito...");
        leerDatosCurso(cursoSeleccionado);
        
    }
    
}


function leerDatosCurso(curso){                 //Complementa a "agregarCurso". Extrae la info de toda la tarjeta de ese curso
    

    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    }

    const existe = articulosCarrito.some(producto => producto.id===infoCurso.id);

    if(existe){
        const cursos = articulosCarrito.map( curso =>{
            if(curso.id===infoCurso.id){
                curso.cantidad++;
                return curso;
            }else{
                return curso;
            }

        });
        articulosCarrito = [...cursos];
    }else{
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    
    console.log(articulosCarrito);

    carritoHTML();
}


/*Función creada para generar el código HTML para crear las filas en el elemento carrito */
function carritoHTML(){

    limpiarHTML();                                          //Limpiamos primero todo l oque hay dentro

    articulosCarrito.forEach( curso =>{                     //Obtenemos la info de cada elemento del Array de articulos

        const {imagen, titulo, precio, cantidad, id} = curso;       //Obtenemos los atributos del objeto "curso" y los almacenamos en variables
        const row = document.createElement("tr");           //Creamos una fila para la tabla

                                                            //Generamos el código HTML de la fila con los datos del artículo
        row.innerHTML = `                                   

            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
            
        
        `;
        contenedorCarrito.appendChild(row);                 //Añadimos la fila al carrito
    }

    )

}

/*Funcion creada para limpiar el carrito*/
function limpiarHTML(){                             

   // contenedorCarrito.innerHTML = "";       //FORMA LENTA. Limpia el HTML que hay dentro del cuerpo de la tabla escribiendo un String vacio

    while(contenedorCarrito.firstChild){      //FORMA RAPIDA. Comprueba si hay hijos, y los va borrando uno a uno hasta que este vacío    
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}