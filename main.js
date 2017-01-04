"use strict";
var debug = require("debug")("dev:main");
var common = require( __dirname + "/libs/common");
var hexonet = require( __dirname + "/extensions/hexonet");
var verisign = require( __dirname + "/extensions/verisign");

debug( "init...");
var Hexonet = new common._contructor( "Hexonet");
var Verisign = new common._contructor( "Verisign");
var CentralNic = new common._contructor( "CentralNic");


Hexonet = plugin( Hexonet, hexonet);
Verisign = plugin( Verisign, verisign);

Hexonet.createContact();
Verisign.createContact();
CentralNic.createContact();


function plugin ( provider, extensions) {
  for( var key in extensions) {
    provider[key] = extensions[key];
  }
  return provider;
}

