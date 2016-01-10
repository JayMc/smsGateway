import Txt from '../models/txt';

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