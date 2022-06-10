'use strict';

const React = require('react');
const Default = require('./layouts/default');
const Bread = require('../models/bread');
const { trace } = require('../helper');

function Index({ breads, title }) {
   trace(' | index.jsx')('Index()');
   // trace('breads')(breads);
   return (
      <Default>
         <h2>{title}</h2>
         {/* <p>I have {breads[0].name} bread!</p> */}
         {/* This is a JSX comment. */}
         <ul>
            {
               breads.map((bread, index) => {
                  return (
                     <li key={index}>
                        <a href={`/breads/${bread.id}`}>
                           {bread.name}
                        </a>
                        <ul>
                           {/* <li>{bread.getBakedBy()}</li> */}
                        </ul>
                     </li>
                  )
               })
            }
         </ul>
         <div>
            <a href={`/breads/new`}><button>Add a new bread</button></a>
         </div>
      </Default>
   )
}

module.exports = Index
