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
    let lat1 = -34.62761
    let long1 = -58.41788

    let lat2 = -34.63360
    let long2 = -58.44331

    let lat3 = -34.64336
    let long3 = -58.46189

    let lat4 = -34.63671
    let long4 = -58.49585

    let lat5 = -34.63545
    let long5 = -58.52982

    let lat6 = -34.65162
    let long6 = -58.53308

    let lat7 = -34.66094
    let long7 = -58.54450
 
    
   

    // if((lat>latMaxZeba&&lat<latMinZeba)&&(long>longMaxZeba&&long<longMinZeba)){
    //     let textoPista = document.getElementById("textPista1")
    //     textoPista.innerText = "DESBLOQUEADA!"
    //     button.disabled = false
    // }
    if((lat>lat1-dif&&lat<lat1+dif)&&(long>long1-dif)&&(long<long1+dif)){
        let textoPista = document.getElementById("textPista1")
        textoPista.innerText = "DESBLOQUEADA!"
        let btn1 = document.getElementById("btn1")
        btn1.disabled = false
    }
    

    if((lat>lat2-dif&&lat<lat2+dif)&&(long>long2-dif)&&(long<long2+dif)){
        let textoPista = document.getElementById("textPista2")
        textoPista.innerText = "DESBLOQUEADA!"
        let btn2 = document.getElementById("btn2")
        btn2.disabled = false
    }

    if((lat>lat3-dif&&lat<lat3+dif)&&(long>long3-dif)&&(long<long3+dif)){
        let textoPista = document.getElementById("textPista3")
        textoPista.innerText = "DESBLOQUEADA!"
        let btn3 = document.getElementById("btn3")
        btn3.disabled = false
    }

    if((lat>lat4-dif&&lat<lat4+dif)&&(long>long4-dif)&&(long<long4+dif)){
        let textoPista = document.getElementById("textPista4")
        textoPista.innerText = "DESBLOQUEADA!"
        let btn4 = document.getElementById("btn4")
        btn4.disabled = false
    }

    if((lat>lat5-dif&&lat<lat5+dif)&&(long>long5-dif)&&(long<long5+dif)){
        let textoPista = document.getElementById("textPista5")
        textoPista.innerText = "DESBLOQUEADA!"
        let btn5 = document.getElementById("btn5")
        btn5.disabled = false
    }


    if((lat>lat6-dif&&lat<lat6+dif)&&(long>long6-dif)&&(long<long6+dif)){
        let textoPista = document.getElementById("textPista6")
        textoPista.innerText = "DESBLOQUEADA!"
        let btn6 = document.getElementById("btn6")
        btn6.disabled = false
    }


    if((lat>lat7-dif&&lat<lat7+dif)&&(long>long7-dif)&&(long<long7+dif)){
        let textoPista = document.getElementById("textPista7")
        textoPista.innerText = "DESBLOQUEADA!"
        let btn7 = document.getElementById("btn7")
        btn7.disabled = false
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

function mostrar5(){
    alert("Pista 5 Desbloqueada")
}

function mostrar6(){
    alert("Pista 6 Desbloqueada")
}

function mostrar7(){
    alert("Pista 7 Desbloqueada")
}