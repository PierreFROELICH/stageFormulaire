import { createStackNavigator, createAppContainer } from 'react-navigation'
import CreationCompte from '../components/CreationCompte'
import Connexion from '../components/Connexion'

const CreationCompteStackNavigator = createStackNavigator ({
  CreationCompte: {
    screen:  CreationCompte,
    navigationOptions: {
      title: 'Création de mon compte'
    }
  },
  Connexion: {
    screen:  Connexion,
    navigationOptions: {
      title: 'Connexion'
    }
  }
})


export default createAppContainer(CreationCompteStackNavigator)
