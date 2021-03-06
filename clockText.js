
var React = require('react-native');

var {
  Text
} = React;

var Clock = React.createClass({

  getTime: function() {
    var now = new Date(this.props.time).valueOf().toString();
    if (now >= 100000) {
      return now.slice(0, -4) + '.' + now.slice(2, -3);
    } else if (now <= 99999 && now >= 10000) {
      return now.slice(0, -4) + '.' + now.slice(1, -3);
    } else if (now <= 9999) {
      return '0.' + now.slice(0, -3);
    }
  },

  render: function() {
    return (
      <Text>{this.getTime()}</Text>
      );
  }
});

module.exports = Clock;