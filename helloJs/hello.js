"use strict";

function hello(name) {
    console.log(`Hello, ${name}!`);
}

function hi(name) {
    console.log(`Hi, ${name}!`);
}

module.exports = {
    hello: hello,
    hi: hi,
};