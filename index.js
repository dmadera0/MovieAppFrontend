

baseURL = "http://localhost:3000";
movieURL = `${baseURL}/movies`;

if (search){
    movieURL = `${movieURL}?search=${search}`
}

fetch(movieURL)
.then(response => response.json())
.then(movies = handle(movies))

function handle(movies){
    movies.map(movie => render(movie))
}

const movieList = document.querySelector("#main-page")

function render(movie) {   
    const title = document.createElement("div")
    title.innerText = movie.title
    title.className = "overview"
    
    const space1 = document.createElement("br")
    const space2 = document.createElement("br")
    
    const image = document.createElement("div")
    image.innerHTML = `<a href="movie.html?id=${movie.id}"><img src="${baseImageURL}${movie.image}"></a>`
    image.className = "image"
    
    image.appendChild(title)
    movieList.append(image, space1)
}
