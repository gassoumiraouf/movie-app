import {ADD_MOVIE} from './types'
export const AddMovie = newMovie =>{
 return {
     type:ADD_MOVIE,
     payload:newMovie
 }
} 