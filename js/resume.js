"use strict";
let resumeLink = document.querySelector('#resume_link');
let blob = new Blob(['Привет, Лева!'], { type: 'text/plain' });
console.log('work&');
if ((resumeLink instanceof (HTMLAnchorElement))) {
    resumeLink.href = URL.createObjectURL(blob);
    console.log('hi');
}
