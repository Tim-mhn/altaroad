export class Company {

    private _siret: number;
    private _name: string;
    protected _taxPercentage: number;

	constructor(siret: number, name: string) {
		this._siret = siret;
		this._name = name;
	}

    /**
     * Getter siret
     * @return {number}
     */
	public get siret(): number {
		return this._siret;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}


    public computeAnnualTax(revenue: number) {
        return this._taxPercentage * revenue;
    };
}