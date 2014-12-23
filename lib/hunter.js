
/**
 * Module dependencies.
 */

var Tweetstream = require('./tweetstream');
var User = require('./user');

/**
 * Expose `Hunter`.
 */

module.exports = Hunter;

/**
 * Initialize a new `Hunter`.
 *
 * @param {Array} filters
 */

function Hunter(filters) {
  if (!(this instanceof Hunter)) return new Hunter(filters);
  for (var i = 0; i < filters.length; i++) {
    Tweetstream.track(filters[i]);
  }
}

/**
 * Start hunting.
 */

Hunter.prototype.start = function start() {
  Tweetstream.on('tweet', function(tweet) {
    yield User.insert({ userId: tweet.user.id_str });
  });
  Tweetstream.on('error', function(err) {
    console.log(err);
  });
};
