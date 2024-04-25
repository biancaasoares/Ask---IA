'use strict'

const button = document.getElementById('login')

function validaLogin() {
    const email = document.getElementById('nome')
    const senha = document.getElementById('senha')

    console.log(senha.value, email.value)

    if(email.value == 'bianca' && senha.value == '1234'){
        window.location.href = '../pages/home.html'
    }else{
        alert('e-mail e/ou senha incorretos!')
    }
}button.addEventListener('click', validaLogin)