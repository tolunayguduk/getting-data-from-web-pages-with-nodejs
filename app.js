var request = require('request'); // İstek yapmak için kullanılacak paket.
var cheerio = require('cheerio'); // Getirilen veriyi parçalamak için kullanılacak paket.

request('https://twitter.com/microsoft', function (error, response, html) {
    if ( ! error && response.statusCode == 200) {

        var $ = cheerio.load(html);

        $('li.stream-item').each(function(i, element){

            console.log($(this).find('p.tweet-text').text());
        });
    }
});