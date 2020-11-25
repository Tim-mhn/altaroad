import { Company } from "./Company";


export class SASCompany extends Company {
    public static readonly TAX_PERCENTAGE = .20;

    constructor(siret: number, name: string) {
        super(siret, name);
        this._taxPercentage = SASCompany.TAX_PERCENTAGE;
    }
}