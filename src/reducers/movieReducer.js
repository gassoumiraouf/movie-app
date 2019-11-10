import {EDIT_MOVIE, DELETE_MOVIE , ADD_MOVIE} from '../actions/types';
const initialState= [
    {
        id: 0,
        title: 'john wick',
        rating: 4,
        image: 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg'
      },
      {
        id: 1,
        title: 'The greatest showman',
        rating: 5,
        image: 'https://m.media-amazon.com/images/M/MV5BMjI1NDYzNzY2Ml5BMl5BanBnXkFtZTgwODQwODczNTM@._V1_.jpg'
      },
      {
        id: 2,
        title: 'Interstellar',
        rating: 4,
        image: 'https://images-na.ssl-images-amazon.com/images/I/91ErsxDqXML._SX342_.jpg'
    
      }
]


const movieReducer =(state=initialState, action)=>{
    switch (action.type) {
        case ADD_MOVIE :
            
            return {state: [...state.film , action.payload] }       
    
default: 
return state
    

     

} 
}

export default movieReducer