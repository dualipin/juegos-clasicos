const cantidad = document.getElementById('Quantity')


//Evento que aumenta en uno el contador de dados
document.getElementById('btn-mas').addEventListener('click', (e) => {

        cantidad.value = parseInt(cantidad.value) + 1
        console.log(cantidad.value)

})

//Evento que disminuye en uno el contador de dados
document.getElementById('btn-menos').addEventListener('click', (e) => {
    
    if(cantidad.value > 1){

        cantidad.value = parseInt(cantidad.value) - 1
        console.log(cantidad.value)
      

    }
})

//Evento al presionar el boton tirar dados
document.getElementById('tirar-dados').addEventListener('click',(e)=>{
    if(cantidad.value < 1){
        alert('Ingrese numeros mayores a 1') 
        return
    }

    
})
