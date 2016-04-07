//app.js

var irc = require("irc");
var config = require("./config.js");
var cronJobs = require("./cron_jobs.js");
var cron = require('cron').CronJob;
var request = require("request");

client = new irc.Client('irc.twitch.tv', config.botName, {
	channels: ['#' + config.channel],
	port: 6667,
	debug: true,
	password: 'oauth:' + config.auth,
	username: config.botName,
	autoConnect: false,
});

client.connect();
cronJobs.init();

// runs on each incoming message 
client.addListener('message', function (from, to, message) {
	console.log("message from " + from + ": " + message);
});
