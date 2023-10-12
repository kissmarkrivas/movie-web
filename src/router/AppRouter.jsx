
import {Navigate, Route,Routes} from 'react-router-dom'
import { OnePiceMoviePages } from "../movies/pages/OnePiceMoviePages"
import { PersonPages } from "../person/pages/PersonPages"
import { CharactersPages } from '../characters/pages/CharactersPages'

export const AppRouter = () => {
  return (
    <>
    <Routes>
      <Route path='movies' element ={<OnePiceMoviePages/>}/>
      <Route path='characters/:mal_id' element ={<CharactersPages/>} />
      <Route path='person/:mal_id' element ={<PersonPages/>} />
      <Route path='/' element ={<Navigate to="/movies"/>} />
    </Routes>
    </>
  )
}
