var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('./utils/api_util');
var Index = require('./components/index');

var MyComponent = React.createClass({
  componentDidMount: function () {
    
  },

  render: function () {
    return( 
      <Index/>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MyComponent />, document.getElementById('content'));
});