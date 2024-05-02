import {$authHost} from "../http";

export const ProductsServices = {
    async getAll(){
        return new Promise((resolve) => resolve($authHost.post('api/item/getAll')))
    },

    async create(name, category, count){
        return new Promise((resolve) => resolve($authHost.post('api/item/create',{name, category, count})))
    },
    async sendProduct(name, category, count){
        return new Promise((resolve) => resolve($authHost.post('api/item/del', {name,category,count})))
    }
}