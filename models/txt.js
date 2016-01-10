class Txt {
	constructor() {
		this.message;
	}

	validate () {
		if(!this.message) return {result:false, msg:'message cannot be empty'};

		return {result: true};
	}
}

export default Txt;