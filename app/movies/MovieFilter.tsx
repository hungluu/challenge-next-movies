import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { IMovie } from '../services/MovieService'
import uniq from 'lodash-es/uniq'

interface IMovielProps {
  data: IMovie[]
  selectGenre: Function
  selectedGenre?: string
}
const MovieFilter: FunctionComponent<IMovielProps> = ({ data: movies, selectedGenre, selectGenre }) => {
  const genreList = uniq(movies.map(m => m.Genre.split(/,\s*/)).flat())
  return (
    <MovieFilterContainer className='movie-filter'>
      <select className='filter__dropdown' value={selectedGenre} onChange={ev => selectGenre(ev.target.value)}>
        <option>-- All --</option>
        {genreList.map(genreName => (
          <option className='filter__option'
            key={`option--${genreName}`}
            value={genreName}>
            {genreName}
          </option>
        ))}
      </select>
    </MovieFilterContainer>
  )
}
const MovieFilterContainer = styled.div`
  padding: 1rem 3.25rem;
  display: flex;

  .filter__dropdown {
    flex: 1 1 250px;
    margin-left: auto;
  }

  @media screen and (min-width: 992px) {
    .filter__dropdown {
      flex-grow: 0;
    }
  }
`

export default MovieFilter
