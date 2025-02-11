//VARIABLES

const marca = document.querySelector("#marca");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
const year = document.querySelector("#year");


const resultado = document.querySelector("#resultado");



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

    mostrarAutos();


    llenarSelect();
});



marca.addEventListener("change", e =>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener("change", e =>{
    datosBusqueda.year = e.target.value;
});
minimo.addEventListener("change", e =>{
    datosBusqueda.minimo = e.target.value;
});
maximo.addEventListener("change", e =>{
    datosBusqueda.maximo = e.target.value;
});
puertas.addEventListener("change", e =>{
    datosBusqueda.puertas = e.target.value;
});
transmision.addEventListener("change", e =>{
    datosBusqueda.transmision = e.target.value;
});
color.addEventListener("change", e =>{
    datosBusqueda.color = e.target.value;
});








//FUNCIONES

function mostrarAutos(){

    autos.forEach( auto =>{

        const {marca, modelo, year, precio, puertas, color, transmision} = auto;

        const autoHTML = document.createElement("p");

        autoHTML.textContent = `
        
            ${marca} ${modelo} ${year}  ${puertas} Puertas --  Transmisión: ${transmision} -- Precio: ${precio} -- Color: ${color} 
        `;

        resultado.appendChild(autoHTML);

    });
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
    const resultado = autos.filter(filtrarMarca);

    console.log(resultado);
};

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }

    return auto;
};

