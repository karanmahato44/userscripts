// ==UserScript==
// @name         chatgpt '/' focus textarea
// @version      1.0
// @author      https://github.com/karanmahato44
// @match        https://chat.openai.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==
(function() {
    document.addEventListener('keydown', (event) => {
        if (event.key === '/' && document.activeElement.id !== 'prompt-textarea') {
          event.preventDefault();
          document.querySelector('#prompt-textarea').focus();
        }
    });
})();
