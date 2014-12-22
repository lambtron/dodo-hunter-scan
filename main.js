
/**
 * Module dependencies.
 */

var Hunter = require('./lib/hunter');

/**
 * Instantiate new `hunter`.
 */

var filters = [];
var rate;
var lag;
var hunter = new Hunter(filters, rate, lag);

/**
 * Start `hunter`.
 */

hunter.start();
