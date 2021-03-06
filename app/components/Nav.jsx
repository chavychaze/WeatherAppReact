const React = require('react');
const { Link, IndexLink } = require('react-router');

const Nav = () => {
    return (
        <div>
            <h2>Navigation Component</h2>
            <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
            <IndexLink to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</IndexLink>
            <IndexLink to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</IndexLink>
        </div>
    );
};

module.exports = Nav;
