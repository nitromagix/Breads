'use strict';

const React = require('react');
const Default = require('./layouts/default');
const Bread = require('../models/bread');
const { trace } = require('../helper');

function Show({ bread, breadsByBaker }) {
   trace(' | show.jsx')('Show()')
   return (
      <Default>
         <h3>{bread.name}</h3>
         <p>
            &gt;&gt;&gt;
            {
               bread.hasGluten
                  ? <span> does </span>
                  : <span> does NOT </span>
            }
            have gluten &lt;&lt;&lt;
         </p>
         <img src={bread.image} alt={bread.name} />
         <p>{bread.getBakedBy()}</p>

         <p>{breadsByBaker && breadsByBaker.length > 1
            ? <span>Other bread baked by {bread.baker.name}:</span>
            : ''}
            <ul>
               {breadsByBaker.map((breadBy) => {
                  return (
                     breadBy.id != bread.id
                        ? <li key={breadBy.id}><a href={`/breads/${breadBy.id}`}>{breadBy.name}</a></li>
                        : '')
               })}
            </ul>
         </p>
         {/* {breadsByBaker.toString()} */}
         <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>

         <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
            <input type='submit' value="DELETE" />
         </form>

         <div><a href="/breads">Go home</a></div>
      </Default>

   )
}


module.exports = Show
