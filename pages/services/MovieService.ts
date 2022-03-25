export interface IMovie {
  Id: string,
  Title: string,
  Year: string,
  Poster: string
  // metadata
  Rated: string
  Released: string
  Runtime: string
  Director: string
  Metascore: string
  Rating: string
  Genre: string
  Genres: string[]
}
export default class MovieService {
  static async getMovies() {
    const res = await fetch('http://run.mocky.io/v3/d03e0886-f5c8-4961-902d-51bfe8059a33')
    const movies = await res.json() as IMovie[]

    return movies.map(movie => ({
      ...movie,
      Genres: movie.Genre.split(/,\s*/).filter(Boolean)
    }))
  }
}
