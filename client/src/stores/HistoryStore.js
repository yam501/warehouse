import {makeAutoObservable} from "mobx";
import {HistoryServices} from "../services/HistoryServices";

export default class HistoryStore {
    constructor() {
        this._histories = []
        makeAutoObservable(this)
    }

    get hs() {
        return this._histories
    }

    set hs(history) {
        this._histories = history
    }

    async getAll() {
        try {
            const {data} = await HistoryServices.getAll()
            this.hs = data
        } catch (e) {
            console.log(e)
        }
    }
}