const axios = require('axios').default;

const instance = axios.create({
    baseURL: 'https://example-ecommerce.herokuapp.com'
});


export async function getProducts(){
    instance.get('/product/list', {
    }).then(function (response){
        if(response.status == 200){
           return response.data;
        } 
        
    }).catch(function (error){
        console.log(error);
    });
}

