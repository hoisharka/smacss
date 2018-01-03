import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

const RootContainer = () => (
  <div>
    <HeaderComponent />
    <article>
      <h2>About me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </article>
    <FooterComponent/>
  </div>
);

export default RootContainer;
