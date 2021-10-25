var watchID = navigator.geolocation.watchPosition(function(position) {
    let lat =  position.coords.latitude
    let long = position.coords.longitude
    let precision = position.coords.accuracy

    let latDom = document.getElementById("latitud")
    let longDom = document.getElementById("longitud")
    let presDom = document.getElementById("precision")
    latDom.innerHTML = `<p>Latitud: ${lat}</p>`
    longDom.innerHTML = `<p>Longitud: ${long}</p>`
    presDom.innerHTML = `<p>Precision: ${precision} metros</p>`



    
    // let latMinZeba = -34.68270
    // let latMaxZeba = -34-68500
    // let longMinZeba = -58.61555
    // let longMaxZeba = -58.61852

    // let latMinAndy = -34.53740
    // let latMaxAndy = -34.53750
    // let longMinAndy = -58.59590
    // let longMaxAndy = -58.59620

    let dif = 0.00020
    let latSub = -34.61678
    let longsub = -58.41062

    let latCar = -34.61693
    let longCar = -58.40987

    let latPed = -34.61856
    let longPed = -58.41011

    let latTrau = -34.61838
    let longTrau = -58.41065
    
   

    // if((lat>latMaxZeba&&lat<latMinZeba)&&(long>longMaxZeba&&long<longMinZeba)){
    //     let textoPista = document.getElementById("textPista1")
    //     textoPista.innerText = "DESBLOQUEADA!"
    //     button.disabled = false
    // }
    if((lat>latSub-dif&&lat<latsub+dif)&&(long>longsub-dif)&&(long<longsub+dif)){
        let textoPista = document.getElementById("textPista1")
        textoPista.innerText = "DESBLOQUEADA!"
        let btn1 = document.getElementById("btn1")
        btn.disabled = false
       
    }

    if((lat>latCar-dif&&lat<latCar+dif)&&(long>longCar-dif)&&(long<longCar+dif)){
        let textoPista = document.getElementById("textPista2")
        textoPista.innerText = "DESBLOQUEADA!"
        let btn2 = document.getElementById("btn2")
        btn2.disabled = false
    }

    if((lat>latPed-dif&&lat<latPed+dif)&&(long>longPed-dif)&&(long<longPed+dif)){
        let textoPista = document.getElementById("textPista3")
        textoPista.innerText = "DESBLOQUEADA!"
        let btn3 = document.getElementById("btn3")
        btn3.disabled = false
    }

    if((lat>latTrau-dif&&lat<latTrau+dif)&&(long>longTrau-dif)&&(long<longTrau+dif)){
        let textoPista = document.getElementById("textPista4")
        textoPista.innerText = "DESBLOQUEADA!"
        let btn4 = document.getElementById("btn4")
        btn4.disabled = false
    }

});

function mostrar1(){
    alert("Pista 1 Desbloqueada")
  }

function mostrar2(){
    alert("Pista 2 Desbloqueada")
}

function mostrar3(){
    alert("Pista 3 Desbloqueada")
}

function mostrar4(){
    alert("Pista 4 Desbloqueada")
}