const acti = (tarea, callback, duracion) =>{
    setTimeout(()=>{
        callback(tarea);
    }, duracion)
}

acti("Comprar Bici", (tarea)=>{
    console.log("Tarea: "+tarea);
    acti("Comprar casco", (tarea)=>{
        console.log("Tarea: "+tarea);
        acti("Comprar guantes", (tarea)=>{
            console.log("Tarea: "+tarea);
            acti("Pasear en bici", (tarea)=>{
                console.log("Tarea: "+tarea);
                
            }, 5000)
        }, 2000)
    }, 1000)
}, 5000)