import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer/index';
import logger from '../middlewares/logger';
import generateId from '../middlewares/generateId';

const enhancer = applyMiddleware(logger as any, generateId as any);

const store = createStore(reducer, {}, enhancer);

export default store;