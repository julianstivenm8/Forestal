import * as firebase from 'firebase'

class Helpers{
  static setUserAlto(userId,pesoAlto){
    let userNamePath= '/user/'+userId+'/details/pesoAlto'
      return firebase.database().ref(userNamePath).set(pesoAlto)
  }
  static setUserMedio(userId,pesoMedio){
    let userNamePath= '/user/'+userId+'/details/pesoMedio'
      return firebase.database().ref(userNamePath).set(pesoMedio)
  }
  static setUserBajo(userId,pesoBajo){
    let userNamePath= '/user/'+userId+'/details/pesoBajo'
      return firebase.database().ref(userNamePath).set(pesoBajo)
  }
  static setUserPorcentaje(userId,pesoPorcentaje){
    let userNamePath= '/user/'+userId+'/details/pesoPorcentaje'
      return firebase.database().ref(userNamePath).set(pesoPorcentaje)
  }
  ///////////////////////////////////////////////////////////////////////////////////////////

  static setUserBajoZ(userId,bajo){
    let userNamePath= '/user/'+userId+'/details/bajo'
      return firebase.database().ref(userNamePath).set(bajo)
  }
  static setUserMedioZ(userId,medio){
    let userNamePath= '/user/'+userId+'/details/medio'
      return firebase.database().ref(userNamePath).set(medio)
  }
  static setUserAltoZ(userId,alto){
    let userNamePath= '/user/'+userId+'/details/alto'
      return firebase.database().ref(userNamePath).set(alto)
  }

  ///////////////////////////  OBTENER DATOS ///////////////////////////////////////////
  static getUserAlto(userId,callback){
    let userNamePath= '/user/'+userId+'/details/pesoAlto'
       firebase.database().ref(userNamePath).on('value',(snapshot)=>{
         let pesoAlto = 0
         if(snapshot.val()){
           pesoAlto = snapshot.val()
         }
         callback(pesoAlto)
       })
  }
  static getUserPorcentaje(userId,callback){
    let userNamePath= '/user/'+userId+'/details/pesoPorcentaje'
       firebase.database().ref(userNamePath).on('value',(snapshot)=>{
         let pesoPorcentaje = 0
         if(snapshot.val()){
           pesoPorcentaje = snapshot.val()
         }
         callback(pesoPorcentaje)
       })
  }
  static getUserMedio(userId,callback){
    let userNamePath= '/user/'+userId+'/details/pesoMedio'
    firebase.database().ref(userNamePath).on('value',(snapshot)=>{
      let pesoMedio = 0
      if(snapshot.val()){
        pesoMedio = snapshot.val()
      }
      callback(pesoMedio)
    })
  }
  static getUserBajo(userId,callback){
    let userNamePath= '/user/'+userId+'/details/pesoBajo'
    firebase.database().ref(userNamePath).on('value',(snapshot)=>{
      let pesoBajo = 0
      if(snapshot.val()){
        pesoBajo = snapshot.val()
      }
      callback(pesoBajo)
    })
  }

}

module.exports = Helpers
