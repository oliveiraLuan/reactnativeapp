import { useNavigation } from "@react-navigation/native";


const axios = require('axios').default;

const instance = axios.create({
    baseURL: 'https://example-ecommerce.herokuapp.com'
});


function goHome(){
    const navigation = useNavigation();
    navigation.navigate('Home');
}

export async function login(email:string, password:string){
    instance.post('/user/login', {
        "login": email,
        "password": password
    }).then(function (response){
        if(response.status == 200){
            alert("Logou");
            goHome();
        } else {
            alert("Não foi possível logar");
        }
        console.log(response);
    }).catch(function (error){
        console.log(error);
    });
}

