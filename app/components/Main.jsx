const React = require('react');

const Nav = require('Nav');

const Main = (props) => {
  return (
    <div>
      <Nav />
      <h2>Main Component</h2>
      {props.children}
    </div>
  );
};

module.exports = Main;
