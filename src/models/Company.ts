export class Company {

    private _siret: number;
    private _name: string;
    protected _taxPercentage: number;

	constructor(siret: number, name: string) {
		this._siret = siret;
		this._name = name;
	}

    public computeAnnualTax(revenue: number) {
        return this._taxPercentage * revenue;
    };
}