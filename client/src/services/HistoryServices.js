import {$authHost} from "../http";

export const HistoryServices = {
    async getAll(){
        return new Promise(resolve => resolve($authHost.post('api/history/getAll')))
    }
}