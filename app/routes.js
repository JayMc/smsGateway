import Txt from '../models/txt';
import express from 'express';

var router = express.Router();

        router                  
        	.post('/send', function (req, res) {   
        		if(typeof req.body.apikey == 'undefined') return res.json({result: 'error', msg: 'Please supply your public API key'})

        		var txt = new Txt();
        		txt.message = req.body.message;
        		txt.recipient = req.body.recipient;
        		var result = txt.validate()
        		
        		if (!result.result) {
        			return res.json(result)
        		}

            	return res.json({})
            })
            .get('/history', function (req, res) {   

            });

export default router;