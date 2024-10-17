let login = 'test@gmail.com';
let senha = '1245';

let email = ['test@gmail.com'];
let passwords = ['12345']

if (login == email[0] && senha == passwords[0]){
    console.log("Acesso permitido!")
}else{
    if (login != email[0]){
        console.log('Email Inválido')
    }
    else{
        console.log('Senha inválida')
    }
}