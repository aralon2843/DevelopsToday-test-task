import { HomeAction, HomeActionTypes, HomeState } from '../../types/home';

const initialState: HomeState = {
  posts: [],
  isLoaded: false,
  error: false,
};
const homeReducer = (state = initialState, action: HomeAction): HomeState => {
  switch (action.type) {
    case HomeActionTypes.GET_POSTS:
      return {
        ...state,
        isLoaded: false,
        error: false,
      };
    case HomeActionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isLoaded: true,
        error: false,
      };
    case HomeActionTypes.GET_POSTS_ERROR:
      return {
        ...state,
        isLoaded: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
