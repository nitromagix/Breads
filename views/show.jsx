'use strict';

const React = require('react');
const Default = require('./layouts/default');
const { trace } = require('../helper');

function Show({ bread }) {
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
         <p>Baked by {bread.baker}</p>
         <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>

         <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
            <input type='submit' value="DELETE" />
         </form>

         <div><a href="/breads">Go home</a></div>
      </Default>

   )
}


module.exports = Show
