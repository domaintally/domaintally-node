Wrapper for [DomainTally](https://www.domaintally.com/page/access-the-metricsbot-api/) domain information API.

# Install

    npm install domaintally

# Usage

```javascript
var key = '....'; //Get your api key from www.domaintally.com 
client = require('domaintally')({ key: key });

client.domain('google.com', function (res) {
  console.log(res);
});

client.ranking('google.com', function (res) {
  console.log(res);
});

client.whois('google.com', function (res) {
  console.log(res);
});

```
