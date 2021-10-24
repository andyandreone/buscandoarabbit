var watchID = navigator.geolocation.watchPosition(function(position) {
    let lat =  position.coords.latitude
    let long = position.coords.longitude
    console.dir(navigator.geolocation)
    console.log(lat, long);
    let latDom = document.getElementById("latitud")
    let longDom = document.getElementById("longitud")
    latDom.innerHTML = lat
    longDom.innerHTML = long
    let button = document.getElementById("btn")
    let latMinZeba = -34.68000
    let latMaxZeba = -34-68999
    let longMinZeba = -58.61000
    let longMaxZeba = -58.61999

    let latMinAndy = -34.53740
    let latMaxAndy = -34.53750
    let longMinAndy = -58.59590
    let longMaxAndy = -58.59620


    if(lat>latMaxAndy&&lat<latMinAndy){
        button.disabled = false
    }
    

});

  function mostrar(){
        alert("PUTO EL QUE LEE")
  }