import React from 'react-native'

import commonStyles from '../../styles/main'

const {
  Component,
  View,
  Text,
  TextInput
} = React

class NewKid extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={commonStyles.container}>
        <Text style={commonStyles.label}>New Kid here</Text>
        <TextInput
          style={commonStyles.input}
          value='LOLOLO'
        />
      </View>
    )
  }
}

export default NewKid
