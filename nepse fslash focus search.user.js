// ==UserScript==
// @name         nepse '/' focus search
// @author      https://github.com/karanmahato44
// @match        https://www.nepalstock.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==
(() => {
  document.addEventListener('keydown', (event) => {
    if (event.key === '/' && !document.activeElement.classList.contains('ng-valid')) {
      event.preventDefault();
      document.querySelector('.ng-valid').focus();
    }
  });
})();