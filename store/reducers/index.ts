import { AnyAction, combineReducers, Reducer } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import homeReducer from './homeReducer';
import postReducer from './postReducer';
import newPostReducer from './newPostReducer';
import newCommentReducer from './newCommentReducer';

const rootReducer = combineReducers({
  home: homeReducer,
  post: postReducer,
  newPost: newPostReducer,
  newComment: newCommentReducer,
});

export const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (state.count) nextState.count = state.count;
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>;
