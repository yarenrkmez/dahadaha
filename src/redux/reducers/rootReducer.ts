import {combineReducers} from 'redux';
import opportunitiesReducer from './opportunitiesReducer';
import brandsReducer from './brandsReducer';


const allReducers = {
  opportunitiesReducer,
  brandsReducer
};

const rootReducer = combineReducers(allReducers);
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
