const React = require('react');
const { Link } = require('react-router');

const Nav = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Navigation Component</h2>
                <Link to="/">Get Weather</Link>
                <Link to="/about">About</Link>
                <Link to="/examples">Examples</Link>
            </div>
        );
    }
});

module.exports = Nav;
