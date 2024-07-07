const PELICULAS =[
  {
    name: 'In the mood for love',
    year: 2000,
    stars: 5,
    reviews: 500,
    director: 'Wong Kar Wai',
    image: 'https://static.filmin.es/images/es/media/5706/3/poster_0_3.webp' ,
  },
  {
    name: 'Chungking express',
    year: 1994,
    stars: 4,
    reviews: 300,
    director: 'Wong Kar Wai',
    image: 'https://static.filmin.es/images/es/media/3722/3/poster_0_3.webp',
  },
  {
    name: 'Happy Together',
    year: 1997,
    stars: 3,
    reviews: 250,
    director: 'Wong Kar Wai',
    image: 'https://ae01.alicdn.com/kf/S5f6ef0967f1448169c3c34809d702ff2l.jpeg_640x640Q90.jpeg_.webp',
  },
  {
    name: 'Pulp Fiction',
    year: 1994,
    stars: 4,
    reviews: 500,
    director: 'Tarantino',
    image: 'https://static.filmin.es/images/es/media/8212/2/poster_0_3_210x0.webp',
  },
  {
    name: 'Jackie Brown',
    year: 1997,
    stars: 2,
    reviews: 200,
    director: 'Tarantino',
    image: 'https://static.filmin.es/images/es/media/8220/2/poster_0_3_210x0.webp',
  },
  {
    name: 'Érase una vez en Hollywood',
    year: 2019,
    stars: 4,
    reviews: 400,
    director: 'Tarantino',
    image: 'https://es.web.img3.acsta.net/c_310_420/pictures/19/07/17/09/56/2643815.jpg',
  },
  {
    name: 'Spiderman: Lejos de casa',
    year: 2019,
    stars: 3,
    reviews: 700,
    director: 'Jon Watts',
    image: 'https://pics.filmaffinity.com/Spider_Man_Lejos_de_casa-642122608-large.jpg',
  },
  {
    name: 'Scooby-Doo',
    year: 2002,
    stars: 5,
    reviews: 100,
    director: 'Raja Gosnell',
    image: 'https://www.ecartelera.com/carteles/5700/5782/001.jpg',
  },
  {
    name: 'Spiderman',
    year: 2002,
    stars: 4,
    reviews: 900,
    director: 'Sam Raimi',
    image: 'https://www.ecartelera.com/carteles/4500/4578/001_m.jpg',
  },
  {
    name: 'Irreversible',
    year: 2002,
    stars: 2,
    reviews: 350,
    director: 'Gaspar Noé',
    image: 'https://static.filmin.es/images/es/media/5826/3/poster_0_3_210x0.jpg',
  },
]

//Declaramos la función que pinta las peliculas
const printPeliculas = (peliculas) => {
  const peliculasection = document.querySelector("#peliculas");
  peliculasection.innerHTML = "";

  for (const pelicula of peliculas) {
  //Crear los elementos
    const divPeli = document.createElement("div");
    const imgPeli = document.createElement("img");

    const titlePeli = document.createElement("h2");
    const yearPeli = document.createElement("p");
    const directorPeli = document.createElement("p");

    const divDatos = document.createElement("div");

    const reviews = document.createElement("img");
    const numberOfReviews = document.createElement("p");
    const divReviews = document.createElement("div");

    const stars = document.createElement("img");
    const numberOfStars = document.createElement("p")
    const divStars = document.createElement("div");

    const divInfo = document.createElement("div");

    imgPeli.src = pelicula.image;
    imgPeli.className = "cartel";
    titlePeli.textContent = pelicula.name;
    yearPeli.textContent = pelicula.year;
    directorPeli.textContent = pelicula.director;
    reviews.src = './assets/comentario.png'
    numberOfReviews.textContent = pelicula.reviews;
    stars.src = './assets/estrella-blanca.png';
    numberOfStars.textContent = pelicula.stars;
    divInfo.className = "info";

    //Funciones de info

    stars.addEventListener("click", (e) => giveStar(e.target, pelicula));
    reviews.addEventListener("click", (e) => giveReview(e.target, numberOfReviews, pelicula));


    //Añadir los elementos

    divDatos.appendChild(titlePeli);
    divDatos.appendChild(yearPeli);
    divDatos.appendChild(directorPeli);
    

    divReviews.appendChild(reviews);
    reviews.className = "reviews"
    divReviews.appendChild(numberOfReviews);
    divStars.appendChild(stars);
    stars.className = "stars"
    divStars.appendChild(numberOfStars);

    divInfo.appendChild(divStars);
    divInfo.appendChild(divReviews);


    divPeli.appendChild(imgPeli);
    divPeli.appendChild(divDatos);
    divPeli.appendChild(divInfo);

    peliculasection.appendChild(divPeli);
  }
  
}
//Declaramos la función que cambia las estrellas. 
let like = false;
const giveStar = (element, pelicula) =>{
  if (like == true){
    element.src = "./assets/estrella-blanca.png";
    like = false;
  } else {
    element.src = "./assets/estrella.png"
    like = true;
  }
}

//Declaramos la función que suma reviews
const giveReview = (element, numberOfReviews, pelicula) =>{
  pelicula.reviews++
  numberOfReviews.textContent = pelicula.reviews;
  
}

//Crear el div para los filters con todas sus cosillas

const filterSection = document.querySelector("#filter");
const divFilter = document.createElement("div");
const selectDirector = document.createElement("select");
const inputYear = document.createElement("input");
const divBtn = document.createElement("div");
const btn = document.createElement("button");
btn.textContent = "Borrar filtros";
const optionDefault = document.createElement("option");
optionDefault.textContent = "Seleccionar un director";

inputYear.setAttribute("placeholder", "Hasta que año");
inputYear.setAttribute("id", "año");
inputYear.setAttribute("type", "number");

//NO TENGO CLARO QUE ESTO ESTE FUNCIONANDO
inputYear.setAttribute("min", "1900");
inputYear.setAttribute("max", "9999");
selectDirector.setAttribute("id", "director")
selectDirector.appendChild(optionDefault);

//Función para añadir todos los directores al select director:

const opciones = []
const añadirDirector = (peliculas) =>{
 
  for (const pelicula of peliculas){
    if (!opciones.includes(pelicula.director)){
      opciones.push(pelicula.director);
    }
  }
  for (const opcion of opciones){
    const option = document.createElement("option");
    selectDirector.appendChild(option);
    option.textContent = opcion;
  }
}
añadirDirector(PELICULAS);

//Pintarlos en el html
divBtn.appendChild(btn);
divFilter.appendChild(selectDirector);
divFilter.appendChild(inputYear);
filterSection.appendChild(divFilter);
filterSection.appendChild(divBtn);

//FUNCIÓN PARA FILTRAR POR DIRECTOR

const h2 = document.createElement("h2");
const peliculasection = document.querySelector("#peliculas")

const filtrar = (peliculas) => {
  const filtered = [];
  h2.textContent = "";

  //Filtrando por año
  if (inputYear.value == 0 && selectDirector.value != "Seleccionar un director"){
    for (const pelicula of peliculas) {
      if (selectDirector.value == pelicula.director) {
          filtered.push(pelicula);
      }
    }
  } else if (inputYear.value != 0 && selectDirector.value != "Seleccionar un director"){
    for (const pelicula of peliculas) {
      if (pelicula.year < inputYear.value && selectDirector.value == pelicula.director){
        filtered.push(pelicula)
      }
    }
    
  } else if(inputYear.value != 0 && selectDirector.value == "Seleccionar un director"){
    for (const pelicula of peliculas) {
      if (pelicula.year < inputYear.value){
        filtered.push(pelicula)
      }
    }
  }

  if (filtered.length == 0){
    h2.textContent = "Sugerencias"
    
    document.body.insertBefore(h2, peliculasection);
    randoms = []
    while (randoms.length < 3){
      index = Math.floor(Math.random() * peliculas.length)
        if (!randoms.includes(index)){
          randoms.push(index);
          random = peliculas[index];
          filtered.push(random);
        }
      }
    }
  printPeliculas(filtered);
  if ((selectDirector.value == "Seleccionar un director") && (inputYear.value == 0)){
    printPeliculas(PELICULAS);
  }
}  
  
selectDirector.addEventListener("change", (event) => {
  filtrar(PELICULAS);
});

inputYear.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    filtrar(PELICULAS);
  }
});


btn.addEventListener("click", (e) => {
  selectDirector.value = "Seleccionar un director";
  inputYear.value = "";
  printPeliculas(PELICULAS);
})

printPeliculas(PELICULAS);
