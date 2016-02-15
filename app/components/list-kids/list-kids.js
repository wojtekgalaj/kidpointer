import React from 'react-native'

import commonStyles from '../../styles/main'

const {
  Component,
  View,
  Text
} = React

class ListKids extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={commonStyles.container}>
        <Text style={commonStyles.label}>List the kids here</Text>
      </View>
    )
  }
}


export default ListKids;
