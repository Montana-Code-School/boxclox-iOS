'use strict';

var React = require('react-native');
var UIExplorerButton = require('./UIExplorerButton');
var OneClock = require('./oneClock');
var ColorPicker = require('./colorPicker')
var PickerExample = require('./')

var {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Image,
  ListView,
  Text,
  View,
} = React;

var boxcloxIOS = React.createClass({
    
  propTypes: {
    pause: React.PropTypes.bool,
    onPress: React.PropTypes.func,
  },

  getInitialState: function() {
    return {
      pause: true,
      color: '#FF0000',
      color2: '#00FF00',
    };
  },
  handlePauseAll: function() {
    this.setState({pause: !this.state.pause});
  },
  getPauseInfo: function() {
    if (this.state.pause) {
      return 'JAM STOP' ;
    } else {
      return 'JAM START';
    }
  },
  changeColor: function(color) {
    this.setState({color: color});
  },
  changeColorText: function(evt) {
    this.changeColor(evt.target.value);
  },
  changeColor2: function(color2) {
    this.setState({color2: color2});
  },
  changeColorText2: function(evt) {
    this.changeColor2(evt.target.value);
  },
  render: function() {
    var pause = this.state.pause;
    return (
      <View>
      <View style={styles.container}>
      <OneClock pause={pause} style={{backgroundColor: this.state.color}}/>
      <OneClock pause={pause} style={{backgroundColor: this.state.color}}/>
      <OneClock pause={pause} style={{backgroundColor: this.state.color}}/>
      <OneClock pause={pause} style={{backgroundColor: this.state.color2}}/>
      <OneClock pause={pause} style={{backgroundColor: this.state.color2}}/>
      <OneClock pause={pause} style={{backgroundColor: this.state.color2}}/>
      </View>
      <UIExplorerButton onPress={this.handlePauseAll}> {this.getPauseInfo()} </UIExplorerButton>
      </View>
      );
    },

  });

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: 350,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#FFF'
  },
  button: {
    borderColor: '#696969',
    borderRadius: 8,
    borderWidth: 1,
    minWidth:175,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: this.props.color,
  },

});

AppRegistry.registerComponent('boxcloxIOS', () => boxcloxIOS);
