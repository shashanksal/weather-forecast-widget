import { ICity } from "./ICity";

class City implements ICity {
	public title: string;
	public location_type: string;
	public latt_long: string;
	public woeid: number;

	public constructor(data: any) {
		this.title = data.title;
		this.location_type = data.location_type;
		this.latt_long = data.latt_long;
		this.woeid = data.woeid;
		if (!this.isValid()) {
			throw new Error("Invalid Paramaters");
		}
	}

	public isValid(): boolean {
		for (let field in this) {
			if (this[field] == null) {
				return false;
			}
		}
		return true;
	}
}

export default City;
