var videoToFacebookLive = require('./index.js');

var rtmp_uri = "rtmps://live-api-s.facebook.com:443/rtmp/";
var stream_key = "242410760472083?s_bl=1&s_ps=1&s_psm=1&s_sw=0&s_vt=api-s&a=Abx22BF4BFhrbZOO";
var video_file = ".videos/big_buck_bunny.mp4";


process = videoToFacebookLive.fromFile(video_file, rtmp_uri + stream_key)
console.log("Video is being processing with pid: " + process.pid)
