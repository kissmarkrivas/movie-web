
import {Navigate, Route,Routes} from 'react-router-dom'
import { OnePiceMoviePages } from "../movies/pages/OnePiceMoviePages"
import { PersonPages } from "../person/pages/PersonPages"
import { CharactersPages } from '../characters/pages/CharactersPages'

export const AppRouter = () => {
  return (
    <>
    <Routes>
      <Route path='movies' element ={<OnePiceMoviePages/>}></Route>
      <Route path='characters/:mal_id' element ={<CharactersPages/>}></Route>
      <Route path='person/:mal_id' element ={<PersonPages/>}></Route>
      <Route path='/' element ={<Navigate to="movies"/>}></Route>
    </Routes>
    </>
  )
}
