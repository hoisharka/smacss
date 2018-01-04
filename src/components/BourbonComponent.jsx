import React from 'react';

const BourbonComponent = () => (
  <div>
    <div className="container">
      <header>
        <h1 className="brand">bourbon</h1>
        <h2>A simple and lightweight mixin library for Sass.</h2>
        <button href="http://bourbon.io/">&rarr;Bourbon Docs Here</button>
      </header>
      <h3>CSS3 Columns</h3>
      <article>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </article>

      <section>
        <h3>Floated Elements</h3>
        <div className="box">
          box 1
        </div>
        <div className="box">
          box 2
        </div>
        <div className="box">
          box 3
        </div>
      </section>

      <section>
        <h3>Forms &amp; Inputs</h3>
        <form>
          <input type="text" name="name" value="" placeholder="Name" />
	  <input type="text" name="name" value="" placeholder="Email" />
	  <input type="button" name="name" value="Click the button" />
        </form>
      </section>
    </div>

    <footer>
      &copy;2016 @bradhussey
      <br />the sass course
    </footer>
  </div>
);

export default BourbonComponent;
