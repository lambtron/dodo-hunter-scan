
/**
 * Module dependencies.
 */

var Hunter = require('./lib/hunter');

/**
 * Instantiate new `hunter`.
 */

var filters = ['javascript', 'nodejs', 'saas'];
var hunter = new Hunter(filters);

/**
 * Start `hunter`.
 */

hunter.start();
