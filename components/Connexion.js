import React from 'react'
import {StyleSheet, Button, TextInput, Text, View, Platform} from 'react-native'
import Navigation from '../Navigation/Navigation'
import { ConnexionCompte } from '../API/formAPI'

class Connexion extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      Username: '',
      Mdp: '',
      premierAffichage : true
    }
    this.VerificationChamps = this.VerificationChamps.bind(this);
    this._ConnexionDonnees = this._ConnexionDonnees.bind(this);
  }

  VerificationChamps = () =>{
    const {Username} = this.state ;
    const {Mdp} = this.state ;

    var message = ''
      if (Username == '' && Mdp == ''){
        message = "Veuillez saisir votre nom d'utilisateur et votre mot de passe";
      }
      else if (Mdp == '' ){
        message = "Veuillez saisir votre mot de passe";
      }
      else if (Username == '' ){
        message = "Veuillez saisir votre nom d'utilisateur";
      }
       else {
        message = "";
      }
      this.setState({
        premierAffichage : false,
        message : message
      })
  }

    async _ConnexionDonnees() {
      await this.VerificationChamps()
      console.log(1)
      if( this.state.message == '') {
        console.log(2)
        const response = await ConnexionCompte(
          this.state.Username,
          this.state.Mdp
        )

          console.log('apres appel')
        console.log(response)
        if(response !== true){
          message = response.message;
          for(var field in response.errors){
            message += ' | '+field+' =>'
            response.errors[field].forEach(function(i){
                message += ' '+i
            })
          }

          this.setState({
            message:message
          })
        }
        else { this.props.navigation.navigate('Accueil') }
      }
    }

  render() {
    const {navigate} = this.props.navigation;
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
          secureTextEntry={true}
          />
          <Button title="Connexion" onPress={this._ConnexionDonnees}/>
        <Text>{this.state.message}</Text>
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
    borderColor: 'grey'
  }
});


export default Connexion;
