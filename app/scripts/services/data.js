'use strict';

angular.module('sinjaz')
	.service('data', function () {

	var _privateVar = 42;

	this.getArticles = function (callBack) {
		var data = [
			{
				date: 'Jan 1st 2015',
				title: 'What is Jenkins?',
				subtitle: 'And why I care...',
				cta: '#/article',
				image: 'https://wiki.jenkins-ci.org/download/attachments/2916393/headshot.png?version=1&modificationDate=1302753947000',
				body: "<p>Jenkins is an award-winning application that monitors executions of repeated jobs, such as building a software project or jobs run by cron. Among those things, current Jenkins focuses on the following two jobs:</p>"
			},
			{
				date: 'Jan 1st 2015',
				title: 'Grunt Vs. Gulp',
				subtitle: 'which is better and why?',
				cta: '#/article',
				image: 'http://devstickers.com/assets/img/pro/jv81.png',
				body: "<p>The Grunt ecosystem is huge and it's growing every day. With literally hundreds of plugins to choose from, you can use Grunt to automate just about anything with a minimum of effort. If someone hasn't already built what you need, authoring and publishing your own Grunt plugin to npm is a breeze. See how to <a href='http://gruntjs.com/'>get started</a>.</p><p>gulp's use of streams and code-over-configuration makes for a simpler and more intuitive build.</p>"
			},
			{
				date: 'Jan 1st 2015',
				title: 'ECMAScript 6',
				subtitle: 'what’s next for JavaScript?',
				cta: '#/article',
				image: 'https://cdn.tutsplus.com/net/uploads/2013/05/es6.jpg',
				body: "<p>ECMAScript is the scripting language standardized by Ecma International in the ECMA-262 specification and ISO/IEC 16262. The language is widely used for client-side scripting on the web, in the form of several well-known implementations such as JavaScript, JScript and ActionScript.</p>"
			}
		];

		callBack(data);
	};

});
