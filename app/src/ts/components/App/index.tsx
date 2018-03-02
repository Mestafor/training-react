import React, { ChangeEvent } from 'react';
// const style = require('./style.scss');
import {ArticleList} from '../ArticleList/index';
import {Form} from '../Form/Form';

import './style.scss';
import { InputType } from 'zlib';

import Counter from '../Counter';

import store from '../../store/index';
import {Provider} from 'react-redux';

(window as any).store = store;

interface IApp {
  name: string
}

export class App extends React.Component<IApp> {

  render() {
    return <Provider store={store}>
      <>
        <Counter />
        <h1 className="h1">App {this.props.name}</h1>
        <Form />
        <ArticleList />
      </>
    </Provider>
  }

  
}