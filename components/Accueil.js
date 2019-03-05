import React from 'react'
import {StyleSheet, Button, TextInput, Text, View, Platform} from 'react-native'
import Navigation from '../Navigation/Navigation'

class Accueil extends React.Component {

  /*constructor(){
    super();
      this.state = {
        ready: false,
        where: {lat: null, lng: null},
        error: null,
      }
  }

  componentDidMount(){
    let getOptions = {
      enableHighAccruacy: true,
      timeOut: 20000,
      maximumAge: 60 * 60 * 24
    };
    this.setState({ready: false, error: null});
    navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoFailure, getOptions);
  }

  geoSuccess = (position) => {
    console.log(position.coords.latitude);

    this.setState({
      ready: true,
      where: {lat: position.coords.latitude, lng: position.coords.longitude }
    })
  }
  geoFailure = (err) => {
    this.setState({error: err.message});
  }

  render(){
    return (
      <View style={styles.MainContainer}>
        {!this.state.ready && (
          <Text>Utilisation de la géolocalisation dans React Native</Text>
        )}
        {this.state.error && (
          <Text>{this.state.error}</Text>
        )}
        {this.state.ready && (
          <Text>{
            `Latitude: ${this.state.where.lat}
            Longitude: ${this.state.where.lng}`
          }</Text>
        )}
      </View>
    );
  } */

  constructor(props) {
  super(props);

  this.state = {
    latitude: null,
    longitude: null,
    error: null,
  };
}

componentDidMount() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      });
    },
    (error) => this.setState({ error: error.message }),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  );
}

render() {
  return (
    <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Latitude: {this.state.latitude}</Text>
      <Text>Longitude: {this.state.longitude}</Text>
      {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
    </View>
  );
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
