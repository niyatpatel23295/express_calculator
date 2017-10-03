var express = require('express');
var router = express.Router();

router.post('/calculatesum', function(req, res, next) {
	try {
		res.status(200).json(parseInt(req.body.num_1) + parseInt(req.body.num_2));
	} catch(e) {
		console.log(e);
		res.status(500).send({"error": "Invalid inputs"});
	}
});

router.post('/calculatesub', function(req, res, next) {
	try {
		res.status(200).json(parseInt(req.body.num_1) - parseInt(req.body.num_2));
	} catch(e) {
		console.log(e);
		res.status(500).send({"error": "Invalid inputs"});
	}
});

router.post('/calculatemul', function(req, res, next) {
	try {
		res.status(200).json(parseInt(req.body.num_1) * parseInt(req.body.num_2));
	} catch(e) {
		console.log(e);
		res.status(500).send({"error": "Invalid inputs"});
	}
});

router.post('/calculatediv', function(req, res, next) {
	try {
		if(parseInt(req.body.num_2) == 0){
			throw "Division By Zero";
		}
		else{
			res.status(200).json((parseInt(req.body.num_1) / parseInt(req.body.num_2)));			
		}
	} catch(e) {
		console.log(e);
		res.status(500).send({"error": "Invalid inputs"});
	}
});

module.exports = router;
