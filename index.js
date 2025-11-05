function search(){
    
    let inputTag = document.getElementById("movieName");
    let movieName = inputTag.value;

    let key = "bc1d472";

    let url = "http://www.omdbapi.com/?apikey=" + key + "&t=" + movieName;


    let httpRequest = new XMLHttpRequest();

    httpRequest.open("GET", url);
    httpRequest.responseType = "json";
    httpRequest.send()

    httpRequest.onload = function(){
        console.log(httpRequest.response);

        let movie = httpRequest.response;
        let titleTag = document.getElementById("title");
        titleTag.innerText = movie.Title;
        let yearTag = document.getElementById("year");
        yearTag.innerText = movie.Year;
        let posterTag = document.getElementById("poster");
        posterTag.src = movie.Poster;
        let plotTag = document.getElementById("plot");
        plotTag.innerText = movie.Plot;
        let directorTag = document.getElementById("director");
        directorTag.innerText = movie.Director;
    }
    
}