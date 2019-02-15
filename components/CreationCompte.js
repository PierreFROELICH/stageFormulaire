import React from 'react'
import {StyleSheet, Button, Alert, TextInput, Text, View} from 'react-native'
import { CreationNouveauCompte } from '../API/formAPI'
import Navigation from '../Navigation/Navigation'

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

    var message = ''
      if (Email == '' || Mdp == '' || Username == '' )
      {
        message = "Votre adresse mail, votre mot de passe et votre nom d'utilisateur doivent être renseignés";
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
          this.state.Telephone
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
      }
      this.props.navigation.navigate('Connexion')
    }

 render() {
    return (
      <View  style={styles.MainContainer}>
      <TextInput
          placeholder="Adresse Mail"
          onChangeText={Email => this.setState({Email : Email})}
          underlineColor='transparent'
          style={styles.TextInputStyleClass}
        />
      <TextInput
          placeholder="Mot de passe"
          onChangeText={Mdp => this.setState({Mdp : Mdp})}
          underlineColor='transparent'
          type="password"
          style={styles.TextInputStyleClass}
        />
        <TextInput
        placeholder="Nom d'utilisateur"
        onChangeText={Username => this.setState({Username : Username})}
        underlineColor="transparent"
        style={styles.TextInputStyleClass}
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

export default CreationCompte;
