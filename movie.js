let api='https://www.omdbapi.com/?apikey=61e576a4&t=';
let title=document.querySelector('#title');
let des=document.querySelector('#des');
let genre=document.querySelector('#genre');
let actors=document.querySelector('#actors');
let directors=document.querySelector('#director');
let awards=document.querySelector('#awards');
let poster=document.querySelector('#movieImage');
let imdbRating=document.querySelector('#imdb')
let container=document.querySelector('.container');
let review_class=document.querySelector('.review');
let error=document.querySelector('#error');
let movieTitle=document.querySelector('#movieInput')
container.classList.add('hidden');
let review=document.querySelector('#review')
function MovieDetails(){
    container.classList.remove('hidden');
    review_class.classList.remove('bad-review');
    review_class.classList.remove('good-review');
    review_class.classList.remove('great-review');
    let theMovie=api+movieTitle.value;
    fetch(theMovie).then(data=>data.json()).then(data=>{
        error.innerText=""
        
        if(data.Error=='Movie not found!'){
        container.classList.add('hidden')
        error.innerText='Movie not found!'
        }
        else{
            console.log(data);
            title.innerText=data.Title;
            des.innerText=data.Plot;
            genre.innerText=data.Genre;
            actors.innerText=data.Actors;
            directors.innerText=data.Director;
            awards.innerText=data.Awards;
            poster.src=data.Poster;
            imdbRating.innerText=data.imdbRating;
            
            if(data.imdbRating>=8.5){
                review_class.classList.add('great-review');
                
                review.innerText='Worth Watching';
            }
            else if(data.imdbRating<8.5 && data.imdbRating>=7.5){
                    review_class.classList.add('good-review');
                    review.innerText='Good Movie';
                }
                else{
                    review_class.classList.add('bad-review');
                    review.innerText='Can Watch';
               }
        }
    })
}
