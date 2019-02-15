//import URL from './Constantes/WBurl'


export async function CreationNouveauCompte (email, password, username, firstname, lastname, phone ) {

  let stage = new FormData()
  stage.append('email', email)
  stage.append('password', password)
  stage.append('username', username)
  stage.append('firstname', firstname)
  stage.append('lastname', lastname)
  stage.append('phone', phone);
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
