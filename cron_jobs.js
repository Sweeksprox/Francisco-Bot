//cron_jobs.js

var irc = require("irc");
var cronJob = require('cron').CronJob;
var request = require("request");

var streamName = "sweeksprox";

exports.init = function () {

	new cronJob('0 */1 * * * *', function() {
		console.log("hello");
	})
}
