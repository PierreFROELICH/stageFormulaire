import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import ImagePicker from 'react-native-image-picker'
/*import RNFS from 'react-native-fs'
import ImgToBase64 from 'react-native-image-base64'*/


class Avatar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      avatar: require('../Images/ic_tag_faces.png')
    }
    this._avatarClicked = this._avatarClicked.bind(this)
  }

  _avatarClicked() {
    ImagePicker.showImagePicker({}, (response) => {
      if (response.didCancel) {
        console.log('L\'utilisateur a annulé')
      }
      else if (response.error) {
        console.log('Erreur : ', response.error)
      }
      else {
        console.log('Photo : ', response.uri)
        //let requireSource = RNFS.readFile( response.uri,'utf8' )
        this.setState({
          avatar: requireSource
        })

//        var photoBase = avatar
        var b64 = btoa(avatar);
        var decode = atob(b64);
        console.log(b64);
        console.log(decode);
      }
    })
  }

  render() {
    return(
      <TouchableOpacity
        style = {styles.touchableOpacity}
        onPress = {this._avatarClicked}>
      <Image
        style = {styles.avatar}
        source = {this.state.avatar} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    touchableOpacity: {
    margin: 5,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#9B9B9B',
    borderWidth: 2,
    resizeMode: 'cover'
  }
})

export default Avatar
