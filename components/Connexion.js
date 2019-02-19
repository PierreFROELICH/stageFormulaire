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
      if ( Username == '' || Mdp == '' )
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
      <View  style={styles.MainContainer}>
      <TextInput
        placeholder="Nom d'utilisateur"
        onChangeText={Username => this.setState({Username : Username})}
        underlineColor='transparent'
        style={styles.TextInputStyleClass}
        />
      <TextInput
        placeholder="Mot de passe"
        onChangeText={Mdp => this.setState({Mdp : Mdp})}
        underlineColor='transparent'
        style={styles.TextInputStyleClass}
        />
        <Button title="Connexion"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  MainContainer : {
    justifyContent: 'center',
    flex: 1,
    margin: 5
  },
  TextInputStyleClass :{
    marginLeft: 2,
    marginRight: 2,
    height: 50,
    borderWidth: 1,
    paddingLeft: 5,
    borderColor: '#dee1e5'
  }
});


export default Connexion
