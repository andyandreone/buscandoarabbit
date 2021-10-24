var watchID = navigator.geolocation.watchPosition(function(position) {
    let lat =  position.coords.latitude
    let long = position.coords.longitude
    let precision = position.coords.accuracy
    console.dir(navigator.geolocation)
    console.log(lat, long);
    let latDom = document.getElementById("latitud")
    let longDom = document.getElementById("longitud")
    let presDom = document.getElementById("precision")
    latDom.innerHTML = `<p>Latitud: ${lat}</p>`
    longDom.innerHTML = `<p>Longitud: ${long}</p>`
    presDom.innerHTML = `<p>Precision: ${precision} metros</p>`
    let button = document.getElementById("btn")
    let latMinZeba = -34.68270
    let latMaxZeba = -34-68500
    let longMinZeba = -58.61555
    let longMaxZeba = -58.61852

    let latMinAndy = -34.53740
    let latMaxAndy = -34.53750
    let longMinAndy = -58.59590
    let longMaxAndy = -58.59620
    console.dir(position)

    if((lat>latMaxZeba&&lat<latMinZeba)&&(long>longMaxZeba&&long<longMinZeba)){
        let textoPista = document.getElementById("textPista")
        textoPista.innerText = "Pista desbloqueada! Ya la puedes ver!"
        button.disabled = false
    }
    

});

  function mostrar(){
        alert("PUTO EL QUE LEE")
  }

 