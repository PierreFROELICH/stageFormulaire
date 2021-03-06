//import URL from './Constantes/WBurl'


export async function CreationNouveauCompte (email, password, username, firstname, lastname, phone, avatar ) {

var photoAvatar = {
  uri: avatar.uri, name: 'avatar', type: 'image/png;base64'
}

  const stage = new FormData()
  stage.append('email', email);
  stage.append('password', password);
  stage.append('username', username);
  stage.append('firstname', firstname);
  stage.append('lastname', lastname);
  stage.append('phone', phone);
  stage.append('photoAvatar', photoAvatar);
  //stage.append('avatar',{ uri: avatar.uri, name: 'avatar', type:'image/png;base64'})
console.log(stage)

try{
    const serviceResponse = await fetch(
      'http://api.wooz.best/user',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/vnd.wooz_best.v1+json',
          'Content-Type': 'multipart/data'
        },
        body: stage,
      })
      //serviceResponse.status == 200 201

      console.log(serviceResponse.status)
      if(serviceResponse.status == 201){
        return true;
      }

      json = await serviceResponse.json();
      console.log(json)
      return json;
    }catch(e){
      console.log("fetch error : ", error)
    }
}

export async function ConnexionCompte (username, password) {

  let stage = new FormData()
  console.log(username,password)
  stage.append('username', username)
  stage.append('password',password)
  console.log(stage)

  try{
    const serviceResponse = await fetch(
      'http://api.wooz.best/user/login',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/vnd.wooz_best.v1+json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: stage,
      })

      console.log(serviceResponse.status)
      if(serviceResponse.status == 200){
        return true;
      }
      json = await serviceResponse.json();
      console.log(json)
      return json;
    }catch(e){
      console.log("fetch error : ", error)
    }
}
