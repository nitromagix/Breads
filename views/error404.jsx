'use strict';

const React = require('react')
const Default = require('./layouts/default')
const { trace } = require('../helper');

function error404({ arrayIndex }) {
   trace(' | error404.jsx --> arrayIndex')(arrayIndex);
   return (
      <Default>
         <main>
            <h2>404: PAGE NOT FOUND</h2>
            <h3>Sorry, ID: <strong>{arrayIndex}</strong> could not be found.</h3>
         </main>
      </Default>
   )
}


module.exports = error404
