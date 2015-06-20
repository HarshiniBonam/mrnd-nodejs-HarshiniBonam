var express = require('express');
var router = express.Router();
var messages = {};
var contacts = [];
var contacts_count = -1;

/* GET contacts */
router.get('/:id', function(req, res, next) {
	//var id=(req.params.id).toString();
	console.log(req.params.id);
	res.send(contacts[req.params.id]);
	
});

router.post('/', function(req, res, next) {
  //var len=contacts.length;
  contacts.push(req.body);
  console.log(req.body);
  contacts_count++;
  res.send(''+contacts_count);
});

router.put('/:id', function(req, res, next) {
	console.log(req.body);
	var id = req.params.id;
	if(req.body.firstName != undefined)
		contacts[id].firstName = req.body.firstName;
	if(req.body.lastName != undefined)
		contacts[id].lastName = req.body.lastName;
	if(req.body.phone != undefined)
		contacts[id].phone = req.body.phone;
	res.send(contacts[id]);
});

router.get('/:id/messages', function(req, res, next) {
	console.log("get ** -" + req.params.id);
	var length = messages[id].length;
	for(var i = 0; i < length; i++)
		console.log("put2 ** -" + messages[req.params.id][i]);
	res.send(messages[req.params.id]);
});

router.post('/:id/messages', function(req, res, next) {
	console.log("put1 ** -" + req.body.msg + "id - " + req.params.id);
	if(messages[req.params.id] == undefined)
	{
		messages[req.params.id] = new Array;
		console.log("\nNew storage allocated to userID.");
	}
	messages[req.params.id].push(req.body);
	console.log("\nYour message is posted.");
	res.status(200);
	res.send("Your message is successfully sent.");
});

module.exports = router;