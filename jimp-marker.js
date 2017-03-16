// jimp-marker.js

importScripts("bower_components/jimp/browser/lib/jimp.min.js");

self.addEventListener("message", function(e) {
  Jimp.read(e.data).then(function (marker) {
    marker.resize(40, 60)
    .getBase64(Jimp.MIME_JPEG, function (err, src) {
//console.log(src);
       self.postMessage(src);
    });
  });
});