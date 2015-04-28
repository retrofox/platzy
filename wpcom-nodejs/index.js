
/**
 * Module dependencies
 */

var WPCOM = require('wpcom');

var wpcom = WPCOM();
var site = wpcom.site('en.blog.wordpress.com');

site.postsList({ number: 3 }, function(err, data) {
  if (err) return console.log(err);

  console.log(data);
});
