import Txt from '../models/txt';
import Account from '../models/account';
import Utils from '../models/utils';

var chai = require('chai'), 
	assert = chai.assert,
  	expect = chai.expect,
  	should = chai.should();

describe('Txt', function(){
	it('should fail on empty message ', function(){
		var txt = new Txt();
		expect(txt.validate().result).to.be.false
		txt.message = ''
		expect(txt.validate().result).to.be.false
	})

	it('should create a valid txt message', function(){
		var txt = new Txt();
		txt.message = 'Hello'

		expect(txt.validate().result).to.be.true
	})
})

describe('Account', function(){
	it('should validate account', function(){
		var account = new Account()
		expect(account.validate().result).to.be.false
		account.name = 'Joe'
		expect(account.validate().result).to.be.false
		account.generateAPIkey()
		expect(account.validate().result).to.be.true
	})
})

describe('Utils', function(){
	it('should return a random number', function(){
		var u = new Utils();
		expect(u.generateRandom(16)).to.be.not.empty
	})
})