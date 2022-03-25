import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import MovieService, { IMovie } from '../app/services/MovieService'

const MovieCarousel = dynamic(() => import('../app/movies/MovieCarousel'))
const Movie = dynamic(() => import('../app/movies/Movie'))
const MovieFilter = dynamic(() => import('../app/movies/MovieFilter'))

export async function getServerSideProps() {
  const movies = await (new MovieService).getMovies()
  return {
    props: {
      data: movies
    } // will be passed to the page component as props
  }
}
interface IMovieListProps {
  data: IMovie[]
}
const Index: NextPage<IMovieListProps> = ({ data }) => {
  const [selectedId, selectMovieId] = useState<string>()
  const [selectedGenre, selectGenre] = useState<string>()
  return (
    <main>
      <Movie data={data.find(m => m.Id === selectedId)} selectGenre={selectGenre} />
      <MovieFilter data={data} selectedGenre={selectedGenre} selectGenre={selectGenre} />
      <MovieCarousel data={selectedGenre ? data.filter(m => m.Genres.includes(selectedGenre)) : data}
        onSelect={selectMovieId}
        selectedId={selectedId} />
    </main>
  )
}

export default Index
