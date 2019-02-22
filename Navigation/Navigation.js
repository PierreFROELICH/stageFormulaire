import { createStackNavigator, createAppContainer } from 'react-navigation'
import CreationCompte from '../components/CreationCompte'
import Connexion from '../components/Connexion'
import Accueil from '../components/Accueil'

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
  },
  Accueil: {
    screen:  Accueil,
    navigationOptions: {
      title: 'Bienvenue à l\'accueil'
    }
  }
})


export default createAppContainer(CreationCompteStackNavigator)
