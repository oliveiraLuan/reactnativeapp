import * as loginService from '../../services/login';


export async function login(email:string, password:string) {
    loginService.login(email,password);
}