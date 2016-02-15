import React from 'react-native';

import ListKids from '../list-kids/list-kids'
import NewKid from '../new-kid/new-kid'

import commonStyles from '../../styles/main'

var {
  Component,
  View,
  StyleSheet,
  Text
} = React

var styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  }
});

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kids: [],
      newKid: {
        name: ''
      }
    }
  }
  render() {
    return (
      <View style={commonStyles.container}>
        {this.state.kids.length ? <ListKids kids={this.state.kids}/> : <NewKid/>}
      </View>
    )
  }
}

module.exports = Main
