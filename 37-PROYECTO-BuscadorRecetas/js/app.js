
document.addEventListener("DOMContentLoaded", iniciarApp);



function iniciarApp(){

    const selectCategorias = document.querySelector("#categorias");
    const resultado = document.querySelector("#resultado");

    selectCategorias.addEventListener("change", seleccionarCategoria);


    obtenerCategorias();


    function obtenerCategorias(){

      

        const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

        fetch(url)
            .then(respuesta=> respuesta.json())
            .then(resultado=>  mostrarCategorias(resultado.categories));

    };



    function mostrarCategorias(categorias){
        

        categorias.forEach(categoria=>{

            const option = document.createElement("OPTION");

            option.value = categoria.strCategory;
            option.textContent = categoria.strCategory;

            selectCategorias.appendChild(option);

        });


    };


    function seleccionarCategoria(e){

        const categoria = e.target.value;

        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;

        fetch(url)
            .then(respuesta=> respuesta.json())
            .then(resultado=>mostrarRecetas(resultado.meals));


    };


    function mostrarRecetas(recetas){
    

       //Iterar en los resultados
        recetas.forEach(receta=>{
            const {idMeal, strMeal, strMealThumb} = receta;
            const recetaContenedor = document.createElement("DIV");
            recetaContenedor.classList.add("col-md-4");

            const recetaCard = document.createElement("DIV");
            recetaCard.classList.add("card", "mb-4");

            const recetaImagen = document.createElement("IMG");
            recetaImagen.classList.add("card-img-top");
            recetaImagen.alt = `Imagen de la receta ${strMeal}`;
            recetaImagen.src = strMealThumb;

            const recetaCardBody = document.createElement("DIV");
            recetaCardBody.classList.add("card-body");

            const recetaHeading = document.createElement("h3");
            recetaHeading.classList.add("card-title", "mb-3");
            recetaHeading.textContent = strMeal;

            const recetaButton = document.createElement("BUTTON");
            recetaButton.classList.add("btn", "btn-danger", "w-100");
            recetaButton.textContent = "Ver Receta";

            //Incluir en el HTML
            recetaCardBody.appendChild(recetaHeading);
            recetaCardBody.appendChild(recetaButton);

            recetaCard.appendChild(recetaImagen);
            recetaCard.appendChild(recetaCardBody);

            recetaContenedor.appendChild(recetaCard);

            resultado.appendChild(recetaContenedor);

        });

    };





};



