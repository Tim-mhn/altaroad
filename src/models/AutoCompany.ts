import { Company } from "./Company";

export class AutoCompany extends Company {
    public static readonly TAX_PERCENTAGE = .33;

    constructor(siret: number, name: string) {
        super(siret, name);
        this._taxPercentage = AutoCompany.TAX_PERCENTAGE;
    }

}