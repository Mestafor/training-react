import React, { ChangeEvent } from 'react';
// const style = require('./style.scss');
import {articles} from '../data';
import {ArticleList} from '../ArticleList/index';
import {Form} from '../Form/Form';

import './style.scss';
import { InputType } from 'zlib';

interface IApp {
  name: string
}

// export const App = ({name}:IApp ) => (
//   <>
//     <h1 className="h1">App {name}</h1>
//     <label htmlFor="">
//       Name: <input type="text"/>
//     </label>
//     <ArticleList articles={articles}/>
//   </>
// );

export class App extends React.Component<IApp> {

  render() {
    return <>
    <h1 className="h1">App {this.props.name}</h1>
    <Form />
    <ArticleList articles={articles}/>
  </>
  }

  
}