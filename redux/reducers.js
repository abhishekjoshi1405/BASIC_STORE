import {GET_MOVIES,ADD_FAVORITES,REMOVE_FAVORITES} from './actions';
const initialState = {
  movies: [],
  favorites: [],
};
function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
        // console.log("Actionssss",action)
      return {...state, movies: action.payload};
      case ADD_FAVORITES:
        // console.log("Actionssss",action)
        return {...state, favorites: [...state.favorites, action.payload]};
      case REMOVE_FAVORITES:
        console.log("Actionssss",action.payload)
        console.log("FAVORITE LIST",state.favorites)
        const newFav = state.favorites.filter((mov)=>{
          console.log("MOVVV",mov)
          return mov.id !== action.payload})
        console.log("New Fav",newFav)
      return {...state, favorites: newFav};
    default:
      return state;
  }
}
export default moviesReducer;