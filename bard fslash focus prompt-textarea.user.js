// ==UserScript==
// @name         bard '/' focus prompt-textarea
// @author       https://github.com/karanmahato44
// @match        https://bard.google.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==
(() => {
  document.addEventListener('keydown', (event) => {
    if (event.key === '/' && document.activeElement.id !== 'mat-input-0') {
      event.preventDefault();
      document.querySelector('#mat-input-0').focus();
    }
  });
})();