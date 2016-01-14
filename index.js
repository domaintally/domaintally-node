/**
 * [require description]
 * @param  {[type]} 'http' [description]
 * @return {[type]}        [description]
 */
var
    /**
     * [require description]
     * @param  {[type]} 'https' [description]
     * @return {[type]}         [description]
     */
    https          = require('https'),

    /**
     * [require description]
     * @param  {[type]} 'querystring' [description]
     * @return {[type]}               [description]
     */
    qs             = require('querystring'),

    /**
     * [require description]
     * @param  {[type]} 'path' [description]
     * @return {[type]}        [description]
     */
    path           = require('path');

    /**
     * [executeRequest description]
     * @param  {[type]}   url      [description]
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */
    executeRequest = function (url, callback) {
        https.get(url, function(res) {
    		res.on('data', function(data) {
    			try {
    				var data = JSON.parse(data);
    				callback(data);
    			} catch (err) {
    				callback(err);
    			}
    		});
    	}).on('error', function(err) {
    		cb(err);
    	});
    }

function Client(opts) {
	this.key = opts.key;
	this.endpoint = 'https://www.domaintally.com/api/v1/';
}

/**
 * [function description]
 * @param  {[type]}   domain   [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
Client.prototype.domain = function(domain, callback) {
	var query = {
		access_token: this.key,
        method: 'domain',
        domain: domain
	}
	var url = this.endpoint + query.method + '?' + qs.stringify(query);
    executeRequest(url, callback);
}

/**
 * [function description]
 * @param  {[type]}   domain   [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
Client.prototype.ranking = function(domain, callback) {
    var query = {
		access_token: this.key,
        method: 'ranking',
        domain: domain
	}
	var url = this.endpoint + query.method + '?' + qs.stringify(query);
    executeRequest(url, callback);
}

/**
 * [function description]
 * @param  {[type]}   domain   [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
Client.prototype.whois = function(domain, callback) {
    var query = {
		access_token: this.key,
        method: 'whois',
        domain: domain
	}
	var url = this.endpoint + query.method + '?' + qs.stringify(query);
    executeRequest(url, callback);
}

module.exports = function(opts) {
	return new Client(opts);
}
