import React from 'react'
import { View, TextInput, Button, StyleSheet, Text } from 'react-native'

class Connexion extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      Username: '',
      Mdp: ''
    }
    this.VerificationChamps = this.VerificationChamps.bind(this);
  }

  VerificationChamps = () =>{
    const {Username} = this.state ;
    const {Mdp} = this.state ;


    var message = ''
      if (Mdp == '' || Username == '' )
      {
        message = "Votre mot de passe et votre nom d'utilisateur doivent être renseignés";
      }
       else {
        message = "";
      }
      this.setState({
        premierAffichage : false,
        message : message
      })

  }


  render() {
    return (
      <View>
        <Text>Test de navigation </Text>
      </View>
    )
  }
}

export default Connexion
