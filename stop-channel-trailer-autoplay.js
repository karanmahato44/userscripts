// ==UserScript==
// @name        stop channel trailer autoplay
// @match       https://www.youtube.com/*
// @grant       none
// @version     1.0
// @author      https://github.com/lassekongo83
// ==/UserScript==

// https://stackoverflow.com/a/61511955
function waitForElm(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

function stopChannelAutoplay() {
  waitForElm('[role="main"][page-subtype="channels"] ytd-channel-video-player-renderer video').then(function(elm) {
    if (elm !== null) {
      elm.addEventListener('loadstart', (e) => e.target.pause(), { passive: true });
    }
  });
}

stopChannelAutoplay();
