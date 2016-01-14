Wrapper for [MetricsBot](https://www.metricsbot.com/page/access-the-metricsbot-api/) domain information API.

# Install

    npm install metricsbot

# Usage

```javascript
var key = '....';
client = require('metricsbot')({ key: key });

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
