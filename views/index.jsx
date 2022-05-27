'use strict';

const React = require('react')
const Default = require('./layouts/default')
const { trace } = require('../helper');

function Index({ breads }) {
   trace(' | index.jsx')('Index()')
   return (
      <Default>
         <h2>Index Page</h2>
         {/* <p>I have {breads[0].name} bread!</p> */}
         {/* This is a JSX comment. */}
         <ul>
            {
               breads.map((bread, index) => {
                  return (
                     <li key={index}>
                        <a href={`/breads/${index}`}>
                           {bread.name}
                        </a>
                     </li>
                  )
               })
            }
         </ul>
      </Default>
   )
}

module.exports = Index
