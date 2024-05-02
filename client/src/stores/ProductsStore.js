import {makeAutoObservable} from "mobx";
import {ProductsServices} from "../services/ProductsServices";

export default class ProductsStore {
    constructor() {
        this._products = []
        makeAutoObservable(this)
    }

    get products() {
        return this._products
    }

    set products(products) {
        this._products = products
    }

    async getAll() {
        try {
            const {data} = await ProductsServices.getAll()
            this.products = data
        } catch (e) {
            console.log(e)
        }
    }

    async create(name, category, count) {
       try {
           const {data} = await ProductsServices.create(name, category, count)
           this.products.push(data)
       }catch (e) {
           console.log(e)
       }
    }

    async sendProduct(name, category, count){
        try {
            const {data} = await ProductsServices.sendProduct(name, category, count)
            this.products.push(data)
        }catch (e) {
            console.log(e)
        }
    }
}