import React from 'react'
import {StyleSheet, Button, TextInput, Text, View} from 'react-native'
import Navigation from '../Navigation/Navigation'

class Accueil extends React.Component {

  render() {
    return (
      <View  style={styles.MainContainer}>
        <Text>Bonjour et bienvenue à l'accueil</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  MainContainer : {
    justifyContent: 'center',
    flex: 1,
    margin: 5
  }
});

export default Accueil;
