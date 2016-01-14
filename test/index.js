var key = require('./key'),
	client = require('../')({
		key: key
	});

client.domainMetrics('google.com', function(res) {
	console.log(res);
});

client.rankingMetrics('google.com', function(res) {
	console.log(res);
});

client.whoisInfo('google.com', function(res) {
	console.log(res);
});
