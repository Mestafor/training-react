import {combineReducers} from 'redux';
import counter from './counter';
import articles from './articles';
import currentDate from './currentDate';

export default combineReducers({
    counter,
    articles,
    currentDate
});