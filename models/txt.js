class Txt {
	constructor () {
		this.message;
		this.recipient;
		this.sender;
		this.dateSent;
		this.dateReceived;
	}

	validate () {
		if(!this.message) return {result:false, msg:'message cannot be empty'};

		return {result: true};
	}
}

export default Txt;