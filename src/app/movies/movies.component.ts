import { Component } from "@angular/core";
import { Movie } from "../movie";
import { MovieService } from "../movie.service";

@Component({
    selector: 'movies', // <movies></movies>
    // selector: '.movies' // <div class="movies"></div>
    // selector: '#movies' // <div id="movies"></div>
    templateUrl: 'movies.component.html',
    styleUrls: ['./movies.component.css']

})
export class MoviesComponent {
    title = "Movie List";
    movies: Movie[]; // Tüm movieleri kartta sıralamak için
    selectedMovie: Movie; // Seçili movieyi kartta göstermek için 

    constructor(private movieService: MovieService) {

    }

    ngOnInit(): void {
        this.getMovies();
    }

    onSelect(movie: Movie): void {
        this.selectedMovie = movie;
    }

    getMovies(): void {
        this.movieService.getMovies().subscribe(movies => { this.movies = movies });
    }

    add(name: string, imageUrl: string, description: string): void {
        this.movieService.add({
            name,
            imageUrl,
            description
        } as Movie).subscribe(movie => this.movies.push(movie));
    }

    delete(movie: Movie): void {
        this.movies = this.movies.filter(m => m !== movie);
        this.movieService.delete(movie).subscribe();
    }
}