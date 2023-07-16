let btn = document.querySelector("body");
let api_key = "04a03760452fdabea07d13c24071c6e3";
let i = 1;
let condition;
let searchurl = `https://api.themoviedb.org/3/search/movie?&api_key=04a03760452fdabea07d13c24071c6e3&page=${i}&query=`;
apiurl = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${i}`;

fetchData(apiurl);
let more = document.querySelector("#showMore");
more.addEventListener("click", () => showMore(condition));

condition = "api";
url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${i}`;

function showMore(x) {
  if (x == "api") {
    i++;
    apiurl = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${i}`;
    fetchData(apiurl);
  }
  if (x == "search") {
    i++;
    // let searchTerm = search.value;
    searchurl = `https://api.themoviedb.org/3/search/movie?&api_key=04a03760452fdabea07d13c24071c6e3&page=${i}&query=`;
    fetchData(searchurl + searchTerm);
  }

  console.log(i);
}

function fetchData(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        i++;
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
        console.log(Error(message));
      }
      return response.json();
    })
    .then((movies) => {
      let container = document.querySelector(".container");
      // console.log(movies.results[i].postser_path)
      console.log(movies);
      let myLen = movies.results.length;
      showMovies();

      function showMovies() {
        if (i == 1) {
          container.innerHTML = " ";
        }
        for (var j = 0; j < myLen; j++) {
          let movie = movies.results[j];
          container.innerHTML += `<div class="box">
      <img class="movieimg" src="http://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="img" />
  <div class="moviesDetails">
    <div class="leftDetails">
      <h5>${movie.original_title}</h5>
      <p>${movie.release_date}</p>
    </div>
    <div class="rightDetailsrating"><strong>${movie.vote_average}</strong></div>
  </div>
</div>`;
        }
      }
    })
    .catch((error) => {
      error.message; // 'An error has occurred: 404'
      console.log(error);
    });
}

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".ullia,footer,.footertext,.navbar-container,.menulistitema,.container,.button,.navbar-container,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
 
let searchTerm;
form.addEventListener("submit", (e) => {
  i=1;
  e.preventDefault();
  searchTerm = search.value;
  if (searchTerm) {
      
      condition="search";
      i=1;
      searchurl= `https://api.themoviedb.org/3/search/movie?&api_key=04a03760452fdabea07d13c24071c6e3&page=${i}&query=`;
      fetchData(searchurl+searchTerm);
    search.value = "";
  }
  if (!searchTerm){
      condition="api"
      i=1;
      apiurl = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${i}`;
      fetchData(apiurl);
  }
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
