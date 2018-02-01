import React from 'react';
// const style = require('./style.scss');
import './style.scss';

export const App = ({name}: {name:string}) => (
  <h1 className="h1">App {name}</h1>
);