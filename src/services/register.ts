const axios = require('axios').default;

const instance = axios.create({
    baseURL: 'https://example-ecommerce.herokuapp.com'
});


export async function save(name:string, age:string, email:string, password:string, address:string){
    instance.post('/user/customer/add', {
        "address": address,
        "age": age,
        "email": email,
        "name": name,
        "userPassword": password
    }).then(function (response){
        if(response.status == 201){
            alert("Usuário cadastrado com sucesso!");
        } else {
            alert("Não foi possível cadastrar o usuário");
        }
        console.log(response);
    }).catch(function (error){
        console.log(error);
    });
}

