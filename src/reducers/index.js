import { combineReducers } from 'redux';
import galleryReducer from './gallery';

const rootReducer = combineReducers({
  galleryReducer,
});

export default rootReducer;
