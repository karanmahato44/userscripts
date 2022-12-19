// ==UserScript==
// @name         yt to piped
// @version      1.0
// @match        https://www.youtube.com/*
// @match        https://youtube.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==
(function () {
  top.location.hostname = "piped.video";
})();