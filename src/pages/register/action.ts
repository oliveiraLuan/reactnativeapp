import * as registerService from '../../services/register';


export async function save(name:string, age:string, email:string, password:string, address:string) {
    registerService.save(name,age,email,password,address);
}