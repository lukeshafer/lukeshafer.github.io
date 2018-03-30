var Redis = require('ioredis');
var redis = new Redis("redis://h:p303104efd0b04515103ddedaf9357d08558345a0770e0245acfce4b6946c0d46@ec2-34-201-226-230.compute-1.amazonaws.com:24819");

document.getElementById("demo").innerHTML = redis.();
