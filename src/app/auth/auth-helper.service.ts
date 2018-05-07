import {Injectable} from "@angular/core";

@Injectable()
export class AuthHelperService{

    private tokenKey:string;
    private usernameKey:string;
    constructor(){
        this.tokenKey = "id_token";
        this.usernameKey="id_username";
        
    }

    setSession(token){
        localStorage.setItem(this.tokenKey,token);
    }

    setUsername(username){
        localStorage.setItem(this.usernameKey,username);
    }

    logout(){
        localStorage.removeItem(this.tokenKey);
    }

    public getToken():string{
        return localStorage.getItem(this.tokenKey);
    }
    public isLoggedIn(): boolean{
        return this.getToken() != null;
    }


}