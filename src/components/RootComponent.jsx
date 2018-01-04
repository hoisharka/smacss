import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from './FirstComponent';
import MixinComponent from './MixinComponent';

const RootContainer = () => (
  <div>
    <FirstComponent/>
    <MixinComponent/>
  </div>
);

export default RootContainer;
