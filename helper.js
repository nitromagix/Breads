'use strict';


const trace = label => value => {
   console.log(`${label} --> ${value}`);
   return value;
};

const stub = (name) => `<h1>Rest-Rant</h1><h2>${name}</h2>`;

module.exports = {
   trace,
   stub
}