var React = require('react');
var BenchStore = require('../stores/bench');

var Index = React.createClass({
  getInitialState: function () {
    return { benches: BenchStore.all() }
  },

  componentDidMount: function () {

  },

  render: function () {
    return( 
      <div>Hello</div>
    );
  }
});

module.exports = Index;