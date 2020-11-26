import { Company } from "./Company";


export class SASCompany extends Company {
    public static readonly TAX_PERCENTAGE = .25;
    private _hqAddress: string;

    constructor(siret: number, name: string, hqAddress: string) {
        super(siret, name);
        this._taxPercentage = SASCompany.TAX_PERCENTAGE;
        this._hqAddress = hqAddress;
    }
}