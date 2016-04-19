# speed-index-calculator

> Returns the [Speed Index](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index) for a given video using the WebPageTest [visualmetrics](https://github.com/WPO-Foundation/visualmetrics) library

## Dependencies

The original visualmetrics library requires Python and several image processing tools be installed.  
This module works around that by leveraging the excellent [wikimedia/visualmetrics](https://hub.docker.com/r/wikimedia/visualmetrics/) Docker image, so you do need to be able to run a Docker container, either locally or remotely.  
  
The module will run a Docker container for you, but in order to do that the `DOCKER_HOST` environment variable must be set.  
You might also need to set the `DOCKER_TLS_VERIFY` and `DOCKER_CERT_PATH` environment variables.  
If you're using [`docker-machine`](https://docs.docker.com/machine/overview/), run the [`env`](https://docs.docker.com/machine/reference/env/) command to check your the variables and their values.

## Example

```js
var speedIndexCalculator = require('speed-index-calculator');
var path = '/some/path/to/video.mp4';

speedIndexCalculator.calc(path, function(err, result) {
  if(err) throw err;
  console.log(result); //Output: { speedIndex: 3169, firstVisualChange: 755, lastVisualChange: 7414, }
});
```

## Running tests
Run mocha tests with `npm test` (the note above about Dependencies applies as well)