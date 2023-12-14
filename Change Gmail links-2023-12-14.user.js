// ==UserScript==
// @name         Change Gmail links
// @namespace    http://tampermonkey.net/
// @version      2023-12-14
// @description  Redirects users to
// @author       Epicminer256
// @match        https://mail.google.com/mail/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(() => {
        for(let link of document.querySelectorAll('[data-saferedirecturl]')){
            link.onclick = function(e){e.preventDefault();window.open(e.target.href)}
        }
    },1000)
})();