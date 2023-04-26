import { RubikProps } from "../interfaces"

export class Rubik{
    private _facesNumber: number;
    private _isDeform: boolean;
    
    constructor({ facesNumber, isDeform }: RubikProps){
        this._facesNumber= facesNumber;
        this._isDeform= isDeform;
    }
    
    public get facesNumber(): number {
        return this._facesNumber;
    }
    public set facesNumber(value: number) {
        this._facesNumber = value;
    }
    public get isDeform(): boolean {
        return this._isDeform;
    }
    public set isDeform(value: boolean) {
        this._isDeform = value;
    }
}