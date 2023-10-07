// ==UserScript==
// @name         pipedyt '/' search focus
// @match        https://piped.yt/*
// @grant        none
// @run-at       document-end
// ==/UserScript==
(() => {
  const searchInput = document.querySelector('div.search-container input:first-child');
  document.addEventListener('keydown', (event) => {
    if (event.key === '/' && document.activeElement !== searchInput) {
      event.preventDefault();
      searchInput.focus();
    }
  });
})();