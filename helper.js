'use strict';


const trace = label => value => {
   console.log(`\r\n${label} --> ${typeof value === 'object' ? JSON.stringify(value) : value}`);
   return value;
};

const stub = (name) => `<h1>${name}</h1>`;

module.exports = {
   trace,
   stub
}