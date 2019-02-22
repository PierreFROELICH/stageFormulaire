import React from 'react'
import {StyleSheet, Button, TextInput, Text, View} from 'react-native'
import { CreationNouveauCompte } from '../API/formAPI'
import Navigation from '../Navigation/Navigation'
import Avatar from './Avatar'

class CreationCompte extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      Email: '',
      Mdp: '',
      Username: '',
      Nom: '',
      Prenom: '',
      Telephone: '',
      Avatar: '',
      message : '',
      premierAffichage : true
    }
    this.VerificationChamps = this.VerificationChamps.bind(this);
    this._InsertionDonnees = this._InsertionDonnees.bind(this);
  }

  VerificationChamps = () =>{
    const {Email} = this.state ;
    const {Mdp} = this.state ;
    const {Username} = this.state ;
    const {Nom} = this.state ;
    const {Prenom} = this.state ;
    const {Telephone} = this.state ;
    const {Avatar} = this.state ;

    var message = ''
      if (Email == '' && Mdp == '' && Username == '' )
      {
        message = "Veuillez saisir votre adresse mail, votre mot de passe et votre nom d'utilisateur";
      }
      else if (Email == '' && Username == '' ){
        message = "Veuillez saisir votre adresse mail et votre nom d'utilisateur";
      }
      else if (Mdp == '' && Username == ''){
        message = "Veuillez saisir votre mot de passe et votre nom d'utilisateur";
      }
      else if (Email == '' && Mdp == ''){
        message = "Veuillez saisir votre adresse mail et votre mot de passe";
      }
      else if (Email == '' ){
        message = "Veuillez saisir votre adresse mail";
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


    async _InsertionDonnees() {
      await this.VerificationChamps()
      console.log(1)
      if( this.state.message == '') {
        console.log(2)
        const response = await CreationNouveauCompte(
          this.state.Email,
          this.state.Mdp,
          this.state.Username,
          this.state.Nom,
          this.state.Prenom,
          this.state.Telephone,
          this.state.Avatar
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
        else { this.props.navigation.navigate('Connexion') }
      }
    }

 render() {
   const {navigate} = this.props.navigation;
    return (
      <View  style={styles.MainContainer}>
        <View style={styles.avatar_container}>
          <Avatar/>
          </View>
          <TextInput
            placeholder="Adresse Mail"
            onChangeText={Email => this.setState({Email : Email})}
            underlineColor='transparent'
            style={styles.TextInputMail}
            />
          <TextInput
            placeholder="Mot de passe"
            onChangeText={Mdp => this.setState({Mdp : Mdp})}
            underlineColor='transparent'
            style={styles.TextInputPassword}
            secureTextEntry={true}
            />
          <TextInput
            placeholder="Nom d'utilisateur"
            onChangeText={Username => this.setState({Username : Username})}
            underlineColor="transparent"
            style={styles.TextInputsUsername}
            />
          <TextInput
            placeholder="Nom"
            onChangeText={Nom => this.setState({Nom : Nom})}
            underlineColor='transparent'
            style={styles.TextInputStyleClass}
            />
          <TextInput
            placeholder="Prénom"
            onChangeText={Prenom => this.setState({Prenom : Prenom})}
            underlineColor='transparent'
            style={styles.TextInputStyleClass}
            />
          <TextInput
            placeholder="Numéro de téléphone"
            onChangeText={Telephone => this.setState({Telephone : Telephone})}
            underlineColor='transparent'
            style={styles.TextInputStyleClass}
            />
        <Button title="Je créer mon compte" onPress={this._InsertionDonnees}/>
          <Text>{this.state.message}</Text>
        <Button title="Déja un compte ? Cliquez ici pour vous connecter" onPress={() => navigate('Connexion')} />
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
  },
  avatar_container: {
    alignItems: 'center'
  },
  TextInputMail :{
    marginLeft: 2,
    marginRight: 2,
    height: 50,
    borderWidth: 1,
    paddingLeft: 5,
    borderColor: 'grey'
  },
  TextInputPassword :{
    marginLeft: 2,
    marginRight: 2,
    height: 50,
    borderWidth: 1,
    paddingLeft: 5,
    borderColor: 'grey'
  },
  TextInputsUsername :{
    marginLeft: 2,
    marginRight: 2,
    height: 50,
    borderWidth: 1,
    paddingLeft: 5,
    borderColor: 'grey',
  }
});

export default CreationCompte;
