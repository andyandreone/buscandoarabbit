var watchID = navigator.geolocation.watchPosition(function(position) {
    console.log(position.coords.latitude, position.coords.longitude);
  });