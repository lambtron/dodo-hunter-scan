
/**
 * Module dependencies.
 */

var Tweetstream = require('./tweetstream');
var Dodos = require('./dodos');

/**
 * Expose `Hunter`.
 */

module.exports = Hunter;

/**
 * Initialize a new `Hunter`.
 *
 * @param {Array} filters
 * @param {Number} rate
 * @param {Number} lag
 */

function Hunter(filters, rate, lag) {
  if (!(this instanceof Hunter)) return new Hunter(filters, rate, lag);
  for (var i = 0; i < filters.length; i++) {
    Tweetstream.track(filters[i]);
  }
}

/**
 * Start hunting.
 */

Hunter.prototype.start = function start() {
  Tweetstream.on('tweet', function(tweet) {
    yield Dodos.insert({ userId: tweet.user.id_str });
  });
  Tweetstream.on('error', function(err) {
    console.log(err);
  });
};
