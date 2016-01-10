import Utils from '../models/utils';

class Account {
	constructor () {
		this.name;
		// only the public key is sent with the payload between external App and this gateway.
		// the private key resides on both sides to encypt/decrypt payload
		this.APIkeyPrivate;
		this.APIkeyPublic;
		// limits how many can be sent
		this.limits = {
			daily: 99,
			weekly: 99,
			monthly: 99
		}
		// cents per message
		this.txtRate = 0;
		// remote API url to call in response to receiving a txt message or processing at a future time
		this.callbackURL;
	}

	generateAPIkey () {
		var utils = new Utils()
		this.APIkeyPrivate = utils.generateRandom(16);
		this.APIkeyPublic = utils.generateUUID();
	}

	validate () {
		if(!this.name) return {result:false, msg:'name required'};
		if(!this.APIkeyPrivate) return {result:false, msg:'need a private API key'};
		if(!this.APIkeyPublic) return {result:false, msg:'need a public API key'};

		return {result: true};
	}
}

export default Account;