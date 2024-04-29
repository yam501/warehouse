import {makeAutoObservable} from "mobx";

export class IUser {
    constructor() {
        this.id = ''
        this.name = ''
        this.number = ''
        this.role = 'EMPLOYEE'
    }
}

export default class UserStore {
    constructor() {
        this._user = new IUser()
        this._isAuth = true
        makeAutoObservable(this)
    }

    setUser(user){
        this._user = user
    }

    setIsAuth(bool){
        this._isAuth = bool
    }

    setId(id){
        this._user.id = id
    }

    setName(name){
        this._user.name = name
    }

    setNumber(number){
        this._user.number = number
    }

    setRole(role){
        this._user.role = role
    }
    get user(){
        return this._user
    }

    get isAuth(){
        return this._isAuth
    }
}