import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer/index';
import logger from '../middlewares/logger';

const enhancer = applyMiddleware(logger as any);

const store = createStore(reducer, {}, enhancer);

export default store;