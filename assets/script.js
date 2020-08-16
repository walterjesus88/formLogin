const formLogin = document.querySelector('#formLogin')
let error = document.querySelector('#error')
let alertN = document.querySelector('#not')
let messageSuccess = document.querySelector('#messageSuccess')
let errors = ''

const expression = {
	password: /^.{6,16}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const datas = ['gerson@gmail.com','hola1234']

let messageError = () =>{
    setTimeout(() => {
        error.innerHTML = ''
        formLogin.reset()
        formLogin['email'].focus()
        error.classList.remove('active')
    }, 6000);
}

let messageText = [
    '<li><i class="fas fa-exclamation-triangle"></i> Todos los campos son requeridos !</li>',
    '<li><i class="fas fa-exclamation-triangle"></i> Correo electrónico invalido !</li>',
    '<li><i class="fas fa-exclamation-triangle"></i> Los datos ingresados son invalos !</li>'
]

formLogin.addEventListener('submit', (e) =>{
    e.preventDefault()
    if(formLogin['email'].value == '' || formLogin['pass'].value == ''){
        errors = messageText[0]
    }else{
        if(!expression.email.test(formLogin['email'].value)){
            errors = messageText[1]
        }
    }
       
    if(errors == ''){
        if(formLogin['email'].value == datas[0] && formLogin['pass'].value == datas[1]){
            messageSuccess.classList.add('active')
        }else{
            error.innerHTML = messageText[2]
            error.classList.add('active')
            messageError()
        }
    }else{
        error.classList.add('active')
        error.innerHTML = errors
        messageError()
    }
})

alertN.addEventListener('click', (e) =>{
    e.preventDefault()
    alert('Sigueme en mis redes para estar enterado cuando integre esta sección :)')
})