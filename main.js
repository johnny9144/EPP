"use strict";
var debug = require("debug")("dev:main");
var self = module.exports;

self._contructor = function ( provider) {
  this.provider = provider;

  // contact
  this.infoContact = function () {
    debug( this.provider + " info Contact");
  };

  this.createContact = function () {
    debug( this.provider + " create Contact");
  };
  
  this.updateContact = function () {
    debug( this.provider + " update Contact");
  };

  // domain
  this.checkDomain = function () {
    debug( this.provider + " check Domain");
  };

  this.infoDomain = function () {
    debug( this.provider + " info Domain");
  };

  this.createDomain = function () {
    debug( this.provider + " create Domain");
  };

  this.udpateDomain = function () {
    debug( this.provider + " update Domain");
  };

  this.updateNS = function () {
    debug( this.provider + " update NS");
  };

  this.lockDomain = function () {
    debug( this.provider + " lock Domain");
  };

  this.renewDomain = function () {
    debug( this.provider + " renew Domain");
  };

  this.importDomain = function () {
    debug( this.provider + " import Domain");
  };

  this.whoisPrivacy = function () {
    debug( this.provider + " whois privacy Domain");
  };

  this.deleteDomain = function () {
    debug( this.provider + " delete Domain");
  };

  this.transferRequest = function () {
    debug( this.provider + " transfer request Domain");
  };

  // claims
  this.getClaimData = function () {
    debug( this.provider + " get Claims Key");
  };

  // vsp
  this.queryDNVC = function () {
    debug( this.provider + " query DNVC");
  };

  this.enableDomainVSP = function () {
    debug( this.provider + " enable VSP For Domain");
  };
};

var Hexonet = new self._contructor( "Hexonet");
var Verisign = new self._contructor( "Verisign");
Hexonet.createContact();
Verisign.createContact();
