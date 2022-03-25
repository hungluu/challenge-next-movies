import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import MovieService, { IMovie } from './services/MovieService'

const MovieCarousel = dynamic(() => import('./movies/MovieCarousel'))

export async function getServerSideProps() {
  const movies = await MovieService.getMovies()
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
  return (
    <main>
      <MovieCarousel data={data} onSelect={selectMovieId} selectedId={selectedId} />
    </main>
  )
}

export default Index
