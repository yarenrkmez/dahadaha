import {combineReducers} from 'redux';
import opportunitiesReducer from './opportunitiesReducer';


const allReducers = {
  opportunitiesReducer
};

const rootReducer = combineReducers(allReducers);
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
