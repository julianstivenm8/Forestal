import * as firebase from 'firebase'

class Helpers{

  ////////////////////////////////////////////InformacionBasica////////////////////////////////////////////////
  static setUserNombre(userId,nombrePredio){
    let userNamePath= '/user/'+userId+'/predio/nombrePredio'
    return firebase.database().ref(userNamePath).set(nombrePredio)
  }
  static setNombrePropietario(userId,nombrePropietario){
    let userNamePath= '/user/'+userId+'/predio/nombrePropietario'
    return firebase.database().ref(userNamePath).set(nombrePropietario)
  }
  static setDiasDescanso(userId,diasDescanso){
    let userNamePath= '/user/'+userId+'/predio/diasDescanso'
    return firebase.database().ref(userNamePath).set(diasDescanso)
  }
  static setAreaPotrero(userId,areaPotrero){
    let userNamePath= '/user/'+userId+'/predio/areaPotrero'
    return firebase.database().ref(userNamePath).set(areaPotrero)
  }
  static setNumeroFranjas(userId,numeroFranjas){
    let userNamePath= '/user/'+userId+'/predio/numeroFranjas'
    return firebase.database().ref(userNamePath).set(numeroFranjas)
  }
  static setDiasOcupacion(userId,diasOcupacion){
    let userNamePath= '/user/'+userId+'/predio/diasOcupacion'
    return firebase.database().ref(userNamePath).set(diasOcupacion)
  }
  ////////////////////////////////////////////InformacionBasica////////////////////////////////////////////////
  ////////////////////////////////////////////InventarioAnimal////////////////////////////////////////////////
  static setMachos0a1(userId,setMachos0a1){let userNamePath= '/user/'+userId+'/inventarioAnimal/setMachos0a1'
  return firebase.database().ref(userNamePath).set(setMachos0a1)}
  static setMachosLevante(userId,machosLevante){let userNamePath= '/user/'+userId+'/inventarioAnimal/machosLevante'
  return firebase.database().ref(userNamePath).set(machosLevante)}
  static setToretesMayores2Anos(userId,toretesMayores2Anos){let userNamePath= '/user/'+userId+'/inventarioAnimal/toretesMayores2Anos'
  return firebase.database().ref(userNamePath).set(toretesMayores2Anos)}
  static setToretesMayores3Anos(userId,toretesMayores3Anos){let userNamePath= '/user/'+userId+'/inventarioAnimal/toretesMayores3Anos'
  return firebase.database().ref(userNamePath).set(toretesMayores3Anos)}
  static setHembras0a1Años(userId,hembras0a1Años){let userNamePath= '/user/'+userId+'/inventarioAnimal/hembras0a1Años'
  return firebase.database().ref(userNamePath).set(hembras0a1Años)}
  static setHembrasLevante(userId,hembrasLevante){let userNamePath= '/user/'+userId+'/inventarioAnimal/hembrasLevante'
  return firebase.database().ref(userNamePath).set(hembrasLevante)}
  static setHembrasVientre(userId,hembrasVientre){let userNamePath= '/user/'+userId+'/inventarioAnimal/hembrasVientre'
  return firebase.database().ref(userNamePath).set(hembrasVientre)}
  static setVacasEscoteras(userId,vacasEscoteras){let userNamePath= '/user/'+userId+'/inventarioAnimal/vacasEscoteras'
  return firebase.database().ref(userNamePath).set(vacasEscoteras)}
  static setvacasParidas(userId,vacasParidas){let userNamePath= '/user/'+userId+'/inventarioAnimal/vacasParidas'
   return firebase.database().ref(userNamePath).set(vacasParidas)}

  ////////////////////////////////////////////InventarioAnimal////////////////////////////////////////////////

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
///////////////////////////  OBTENER DATOS ///////////////////////////////////////////

module.exports = Helpers
