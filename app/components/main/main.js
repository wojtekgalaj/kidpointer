import React from 'react-native';

var {
  Component,
  View,
  StyleSheet,
  Text
} = React

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#bada55',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  }
});

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello world</Text>
      </View>
    )
  }
}

module.exports = Main
