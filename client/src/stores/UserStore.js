import {makeAutoObservable} from "mobx";
import {UserServices} from "../services/UserServices";

export class IUser {
    constructor() {
        this.id = ''
        this.name = ''
        this.number = ''
        this.role = 'ADMIN'
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

    async registration(number, password, role) {
        try {
            return await UserServices.registration(number, password, role)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async login(number,password){
        try{
            const response = await UserServices.login(number,password)
            localStorage.setItem('token', response.data.accessToken);
            this.setIsAuth(true)
            this.setUser(response.data.user)
        }
        catch (e){
            console.log(e.response?.data?.message)
        }
    }

    async logout(){
        try{
            await UserServices.logout()
            localStorage.removeItem('token');
            this.setIsAuth(false)
            this.setUser(new IUser())
        }
        catch (e){
            console.log(e.response?.data?.message)
        }
    }
}