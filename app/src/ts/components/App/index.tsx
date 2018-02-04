import React from 'react';
// const style = require('./style.scss');
import {articles} from '../data';
import {ArticleList} from '../ArticleList/index';

import './style.scss';

interface IApp {

}

export const App = ({name}: {name:string}) => (
  <>
    <h1 className="h1">App {name}</h1>
    <ArticleList articles={articles}/>
  </>
);