import { Factory } from "./Factory";

export default interface Product {
    id: number,
    name: string,
    price: number,
    amount: number,
    factory: Factory
}