var watchID = navigator.geolocation.watchPosition(function(position) {
    console.log(position.coords.latitude, position.coords.longitude);
    let latDom = document.getElementById("latitud")
    let longDom = document.getElementById("longitud")
    latDom.innerHTML = position.coords.latitude
    longDom.innerHTML = position.coords.longitude
  });

 