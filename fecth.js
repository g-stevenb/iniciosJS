/*******************************************************
 *Mostrar contenido aleatorio, extraido desde una API
 *******************************************************/
var btnObtener = document.getElementById('obtener')
var contenido = document.getElementById('contenido')

function mostrar() {
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(valor => {
            contenido.innerHTML = `
            <img src="${valor.results[0].picture.large}" alt="" width="100px" class="rounded-circle">
            <p>Me llamo:  <spam>${valor.results[0].name.first}</spam></p>
            <p>Mi email es:  ${valor.results[0].email}</p>
            <p>Soy del genero:  ${valor.results[0].gender}</p>
            `
            console.log(valor.results[0])
        })

}
btnObtener.onclick = mostrar


/************************************************************
 *Mostrar contenido, de un archivo TXT - JSON dentro del app
 ************************************************************/
// var btnTxt = document.getElementById('mostrarTxt')
// var contTxt = document.getElementById('contenidoTxt')

// function mostrarTxt() {
//     fetch('texto.txt')
//         .then(res => res.text())
//         .then(res => {
//             contTxt.innerHTML = `<p>${res}</p>`
//         })
// }
// btnTxt.onclick = mostrarTxt

/************************************************************
 *Mostrar contenido, de un archivo JSON dentro del app
 ************************************************************/
// var btnJson = document.getElementById('mostrarJson')
// var contJson = document.getElementById('contenidoJson')

// function mostrarJson() {
//     fetch('tabla.json')
//         .then(res => res.json())
//         .then(dato => {
//             mostrarJsonTb(dato)
//                 // {id: 1, nombre: "Steven", email: "gsteven.barrantes@gmail.com", estado: true}
//         })
// }

// function mostrarJsonTb(dato) {
//     // console.log(dato)
//     contJson.innerHTML = ''
//     for (let valor of dato)
//     // console.log(valor.nombre)
//         contJson.innerHTML +=
//         `
//                     <tr>
//                         <th scope="row">${valor.id}</th>
//                         <td>${valor.nombre}</td>
//                         <td>${valor.email}</td>
//                         <td>${valor.estado ? "Activo":"Eliminado"}</td>
//                     </tr>
//                 `
// }

// btnJson.onclick = mostrarJson

/*********************************************
 *Mostrar contenido, de una API,en una tabla
 **********************************************/
var btnMostrarApiTb = document.getElementById('mostrarApiTb')
var contApiTb = document.getElementById('contenidoApiTb')

function mostrarApiTb() {
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(datos => {
            mostrarTbApi(datos)
        })
}

//gender,name,location.country,id,picture.large,nat
function mostrarTbApi(datos) {
    console.log(datos.results[0])
        // contApiTb.innerHTML = ''
        // for (let valor of datos)
    contApiTb.innerHTML = `
                <tr>
                    
                <th scope="row">${datos.results[0].name.first}<br><img src="${datos.results[0].picture.large}" alt="" width="100px" class="rounded-circle"></th>
                <td>${datos.results[0].email}</td>
                 <td>${datos.results[0].gender}</td>
                 <td>${datos.results[0].location.country}</td>
                 <td>${datos.results[0].dob.age}</td>
                 <td>${datos.results[0].location.country}</td>
               </tr>
        `
}

btnMostrarApiTb.onclick = mostrarApiTb