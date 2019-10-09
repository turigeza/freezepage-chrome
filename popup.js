// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let buttonnow = document.getElementById('buttonnow');
let button2sec = document.getElementById('button2sec');
let button5sec = document.getElementById('button5sec');
let button10sec = document.getElementById('button10sec');

buttonnow.onclick = ()=>{
    freezePage(0);
};
button2sec.onclick = ()=>{
    freezePage(2000);
};
button5sec.onclick = ()=>{
    freezePage(5000);
};
button10sec.onclick = ()=>{
    freezePage(10000);
};
function freezePage(timeout){
    setTimeout(function () {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
            chrome.tabs.executeScript(tabs[0].id, {
                code: 'debugger;'
            });
        });
    }, timeout);
}
