import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { IMovie } from '../services/MovieService'
import map from 'lodash-es/map'
import get from 'lodash-es/get'

interface IMovielProps {
  data?: IMovie
}
const Movie: FunctionComponent<IMovielProps> = ({ data: movie }) => {
  if (!movie) {
    return <></>
  }

  const MetadataKeys = {
    Rated: 'Rate',
    Released: 'Release',
    Runtime: 'Duration',
    Director: 'Director',
    Metascore: 'Metascore',
    Rating: 'Rating'
  }

  return (
    <MovieContainer className='movie'>
      <h1 className='movie__title hidden-lg'>
        {movie.Title}
        <small>{movie.Year}</small>
      </h1>
      <div className='movie__contents'>
        {Boolean(movie.Poster) && (
          <figure className='movie__poster'>
            <img src={movie.Poster} alt={`${movie?.Title} Poster`} />
          </figure>
        )}
        <div className='movie__details'>
          <h1 className='movie__detail movie__title visible-lg'>
            {movie.Title}
            <small>{movie.Year}</small>
          </h1>
          {map(Object.keys(MetadataKeys), key => {
            const value = get(movie, key)
            return (
              <div className='movie__detail' key={`details__${key}`}>
                <label className='detail__label'>{get(MetadataKeys, key)}:</label>
                <span className='detail__value'>{value}</span>
              </div>
            )
          })}
          <div className='movie__detail' key='details__gernes'>
            <label className='detail__label'>Gernes:</label>
            <ul className='detail__value detail__genres'>
              {movie.Genre.split(/,\s*/).filter(Boolean).map(genreName => (
                <li>{genreName}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MovieContainer>
  )
}
const MovieContainer = styled.div`
  margin: 1rem 1.25rem;

  .movie__title {
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    color: #069;
    margin-bottom: 1rem;

    small {
      display: block;
      font-weight: normal;
    }
  }

  .movie__contents {
    display: flex;
  }

  .movie__poster {
    display: flex;
    margin: 0;
    overflow: hidden;
    flex-direction: column;

    flex: 0 1 230px;
  }

  .movie__details {
    flex: 1 1 60%;
    padding-left: 1rem;
  }

  .movie__detail {
    margin-bottom: 0.5rem;
  }

  .detail__label {
    font-weight: bold;
    margin-right: 0.5rem;
  }

  .detail__genres {
    margin: 0.5rem 0;
  }

  .visible-lg {
    display: none;
  }
  @media screen and (min-width: 992px) {
    margin: 1rem 3.25rem;

    .movie__poster {
      flex-basis: 300px;
    }

    .movie__details {
      padding-left: 2rem;
    }

    .hidden-lg {
      display: none;
    }
    .visible-lg {
      display: inherit;
    }
  }
`

export default Movie
