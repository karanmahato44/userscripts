// ==UserScript==
// @name        yt - stop channel trailer autoplay
// @match       https://www.youtube.com/*
// @grant       none
// ==/UserScript==

// Helper function to wait for an element to appear in the DOM
const waitForElm = async selector => {
  while (!document.querySelector(selector)) {
    await new Promise(resolve => requestAnimationFrame(resolve));
  }
  return document.querySelector(selector);
};

// Function to stop channel trailer autoplay
const stopChannelAutoplay = () => {
  waitForElm('[role="main"][page-subtype="channels"] ytd-channel-video-player-renderer video')
    .then(elm => {
      if (elm) {
        elm.addEventListener('loadstart', e => {
          e.target.pause();
        }, {
          passive: true
        });
      }
    });
};

stopChannelAutoplay();