// ==UserScript==
// @name         fmhy base64 d
// @version      1.0
// @match        https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/base64*
// @match        https://teddit.net/r/FREEMEDIAHECKYEAH/wiki/base64*
// @match        https://libredd.it/r/FREEMEDIAHECKYEAH/wiki/base64*
// @match        https://old.reddit.com/r/FREEMEDIAHECKYEAH/wiki/base64*
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    const base64Regex = /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{20,})$/g

    // Must set an interval, otherwise the content that is lazy loaded (e.g. loaded on scrolling) will not get decoded
    setInterval(() => {
        const pTags = document.querySelectorAll('p')

        pTags.forEach(pTag => {
            // Split the string into an array and check each element for a base64 encoded string
            const pTagText = pTag.innerText.split(/\s+/);

            pTagText.forEach(text => {
                if (base64Regex.test(text)) {
                    // If the string is a base64 encoded string, decode it and replace the p tag with the decoded string
                    pTag.innerText = pTag.innerText.replace(text, atob(text));
                    const txt = pTag.innerText.split("\n");
                    const links = [];
                    txt.forEach(link => {
                        links.push("<a href='" + link + "'>" + link + "</a>");
                    });
                    pTag.outerHTML = links.join("\n");
                }
            });
        })
    }, 500)
})();