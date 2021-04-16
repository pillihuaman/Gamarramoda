export class AuthenticationResponse {
    public get idSystem(): number {
        return this._idSystem;
    }
    public set idSystem(value: number) {
        this._idSystem = value;
    }
    public get token(): string {
        return this._token;
    }
    public set token(value: string) {
        this._token = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get message(): string {
        return this._message;
    }
    public set message(value: string) {
        this._message = value;
    }
    public get fullpath(): string {
        return this._fullpath;
    }
    public set fullpath(value: string) {
        this._fullpath = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get code(): number {
        return this._code;
    }
    public set code(value: number) {
        this._code = value;
    } 

    constructor(
        private _code: number,
        private _description: string,
        private _fullpath: string,
        private _message: string,
        private _id: number,
        private _token: string,
        private _idSystem: number
    ){}
}
