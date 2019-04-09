// ==UserScript==
// @name         spiegelHideReminder
// @namespace    https://github.com/MintyCitrus/
// @version      1.1
// @source       https://github.com/MintyCitrus/spiegelHideReminder
// @updateURL    https://github.com/MintyCitrus/spiegelHideReminder/spiegelHideReminder.js
// @downloadURL  https://github.com/MintyCitrus/spiegelHideReminder/spiegelHideReminder.js
// @description  Set a cookie to avoid a constant reminder
// @author       MintyCitrus
// @match        https://www.spiegel.de/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var spcookie = "stickyHide";

    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires="+d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    if (!getCookie(spcookie)) {
        setCookie(spcookie, true, 7)
    }
})();
