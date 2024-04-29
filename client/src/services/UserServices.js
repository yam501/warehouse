import {$authHost} from "../http";

export const UserServices = {

    async login(number, password){
        return new Promise((resolve) => resolve($authHost.post('api/user/log', {number, password})))
    },

    async registration(number, password){
        return new Promise((resolve) => resolve($authHost.post('api/user/reg', {number, password})))
    },

    async logout(){
        return new Promise((resolve) => resolve($authHost.post('api/user/unlog')))
    },
}