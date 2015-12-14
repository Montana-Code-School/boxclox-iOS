var React = require('react-native');
var UIExplorerButton = require('./UIExplorerButton');
var Clock = require('./clockText');

var {
  AppRegistry,
  StyleSheet,
  Image,
  ListView,
  Text,
  View,
} = React;

var OneClock = React.createClass({
    
  propTypes: {
    pause: React.PropTypes.bool
  },

  getInitialState: function() {
    return {
      isPlaying: false,
      jammer: [30 * 10000, 30 * 10000],
      time: 30 * 10000,
      maxtime: 30 * 10000,
    };
  },
  componentDidMount: function() {
  },
  componentWillReceiveProps: function() {
    if (this.state.time !== 300000) {
      if (this.props.pause === this.state.isPlaying) {
        this.handleStart();
      }
    }
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.isPlaying) {
      if (!this.timer) {
        this.timer = this.startTimer();
      }
    } else {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  },
  componentWillUnmount: function() {
    window.clearInterval(this.timer);
    this.timer = null;
  },
  startTimer: function() {
    var that = this;
    return window.setInterval(function() {
      if (that.state.time > 0) {
        that.setState({
          time: that.state.time - 1000
        });
      } else {
        that.timeOver();
      }
    }, 100);
  },
  handleStart: function() {
    var that = this;
    this.setState({
      isPlaying: !this.state.isPlaying,
    });
  },
  handleReset: function() {
    this.setState({
      time: this.state.maxtime,
      isPlaying: false
    });
  },
  switchJammerState: function() {
    this.setState({
      jammer: this.state.jammer.reverse()
    });
  },

  timeOver: function() {
    this.setState({
      time: this.state.maxtime,
      isPlaying: false
    });
  },

    render: function() {

    return (
      <View>
      <UIExplorerButton onPress={this.handleStart}>
      <Clock time={this.state.time} maxtime={this.state.maxtime} />
      </UIExplorerButton>
      <UIExplorerButton onPress={this.handleReset}> Reset </UIExplorerButton>
      </View>
      );
    },
  });

module.exports=OneClock;
