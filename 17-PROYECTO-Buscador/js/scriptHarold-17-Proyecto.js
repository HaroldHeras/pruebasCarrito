//VARIABLES

const marca = document.querySelector("#marca");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
const year = document.querySelector("#year");


const resultado = document.querySelector("#resultado");

const cabeceraResultado = document.querySelector(".contenedor h1");




const max = new Date().getFullYear();
const min = max - 10;



const datosBusqueda = {

    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: "",


};






//EVENTOS

document.addEventListener("DOMContentLoaded", ()=> {

    mostrarAutos(autos);


    llenarSelect();
});



marca.addEventListener("change", e =>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener("change", e =>{
    datosBusqueda.year = e.target.value;
    filtrarAuto();
});
minimo.addEventListener("change", e =>{
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});
maximo.addEventListener("change", e =>{
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});
puertas.addEventListener("change", e =>{
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();
});
transmision.addEventListener("change", e =>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});
color.addEventListener("change", e =>{
    datosBusqueda.color = e.target.value;
    filtrarAuto();

    
    
});








//FUNCIONES

function mostrarAutos(arrayRecibido){

    limpiarHTML();

    if(!arrayRecibido.length){
        cabeceraResultado.textContent = "NO HAY RESULTADOS"
        return;
    };

    cabeceraResultado.textContent = "RESULTADOS"

    arrayRecibido.forEach( auto =>{

        const {marca, modelo, year, precio, puertas, color, transmision} = auto;

        const autoHTML = document.createElement("p");

        autoHTML.textContent = `
        
            ${marca} ${modelo} ${year}  ${puertas} Puertas --  Transmisión: ${transmision} -- Precio: ${precio} -- Color: ${color} 
        `;

        resultado.appendChild(autoHTML);

    });
};


function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    };
};



function llenarSelect(){

    for(let i=max; i>=min; i--){
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;

        year.appendChild(opcion);
    };

};



function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    mostrarAutos(resultado);

    
};

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }

    return auto;
};

function filtrarYear(auto){
    if(datosBusqueda.year){
        return auto.year === parseInt(datosBusqueda.year);
    }

    return auto;
};


function filtrarMinimo(auto){

    if(datosBusqueda.minimo){
        return auto.precio >= parseInt(datosBusqueda.minimo);
    }

    return auto;

};


function filtrarMaximo(auto){

    if(datosBusqueda.maximo){
        return auto.precio <= parseInt(datosBusqueda.maximo);
    }

    return auto;

};


function filtrarPuertas(auto){

    if(datosBusqueda.puertas){
        return auto.puertas === parseInt(datosBusqueda.puertas);
    }

    return auto;

};


function filtrarTransmision(auto){

    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    }

    return auto;

};


function filtrarColor(auto){

    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    }

    return auto;

};