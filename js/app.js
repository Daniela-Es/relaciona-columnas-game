console.log('GAME');

// function evaluar() {
//     // recupera el numero que ingresa el usuario
//     let item = document.querySelector('input').value;

//     // recupera el id primera parte
//     let contraste = document.querySelector('input');

//     // recuperar el atributo id
//     let respuesta = contraste.getAttribute('id');

//     console.log(item);
//     console.log(contraste);
//     console.log(respuesta);
// }
let gamer = {
    vidas: 0,
    aciertos: 0
}

function respuestaCorrecta(x) {
    // console.log(x);
    // recuparar los inputs para compararlos el hidden y el que se muestra

    // template string
    // literals string
    // backsticks

    // hidden
    let inputRespuestaCorrecta = document.getElementById(`respuesta${x}`);
    let inputRespuestaUsuario = document.getElementById(`datoUser${x}`);

    let valorCorrecto = inputRespuestaCorrecta.getAttribute('value');
    let valorUser = inputRespuestaUsuario.value;

    let boton = document.getElementById(`btn${x}`)

    // sirvio para observar que tenemos los valores correctos al mismo tiempo
    // console.log(valorCorrecto,valorUser);

    //if ???
    // = asignacion, == comparacion, === strict mode: comparando valor y tipo de dato
    if (valorUser >= 1 && valorUser <= 9) {
        if (valorCorrecto === valorUser) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Correcto!',
                showConfirmButton: false,
                timer: 1500
            })
            
            inputRespuestaUsuario.disabled = true;
            // console.log(inputRespuestaUsuario);
            boton.disabled = true;
            gamer.aciertos = gamer.aciertos + 1;
            // console.log("aciertos" + gamer.aciertos);
            if (gamer.aciertos == 9) {
                if (gamer.vidas == 3) {
                    Swal.fire({
                        title: 'PERFECT!! Ganaste sin perder ni una vez!',
                        width: 600,
                        padding: '3em',
                        background: '#fff url(https://cdn.pixabay.com/photo/2014/04/02/14/06/ribbons-306198_960_720.png)',
                        backdrop: `
                          rgba(0,0,123,0.4)
                          url("https://media1.giphy.com/media/9xt1MUZqkneFiWrAAD/giphy.gif?cid=ecf05e47i64nhb1xucttvylw8fnrk7gxerg3hhgbp2hhhxbl&rid=giphy.gif&ct=g")
                          left top
                          no-repeat
                        `
                      })
                      restart();
                } else {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Felicidades! Has ganado!!',
                        showConfirmButton: true
                    }) 
                    restart();
                }
                
            }
        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Error!',
                text: 'Perdiste una vida',
                showConfirmButton: true
            })
            minus();
        }
    } else {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Error!',
            text: 'Ingresa una respuesta correcta del 1 al 9',
            showConfirmButton: true
        })

    }

}


//crearla declarar
function start() {
    gamer.vidas = 3;
    // let vidas = document.getElementById('vidas');
    // vidas.innerHTML = gamer.vidas;
    document.getElementById('vidas').innerHTML = gamer.vidas;

}

//llamando invocando
start();

function minus() {

    // gamer.vidas -=1 
    gamer.vidas = gamer.vidas - 1;
    document.getElementById('vidas').innerHTML = gamer.vidas;
    if (gamer.vidas == 0) {
        Swal.fire({
            title: 'Lo siento',
            text: "Has perdido",
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Volver a jugar!'
          }).then((result) => {
            if (result.isConfirmed) {
                restart();
             //    console.log(valor);
            //   console.log(form);
            //   gamer.vidas = 3;
                
            }
        })
    }
}

function restart() {
    var inputs = document.getElementsByClassName('form-control');
    for (let index = 0; index < inputs.length; index++) {
        let valores = inputs[index];
        valores.value = '';
        document.getElementsByClassName("btn")[index].disabled = false;
        document.getElementsByClassName("form-control")[index].disabled = false;

    }
    start();

}
