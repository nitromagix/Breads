'use strict';

const React = require('react')
const Default = require('./layouts/default')
const { trace } = require('../helper');

function New() {
   trace(' | new.jsx')('New()')
   return (
      <Default>
         <h2>Add a new bread</h2>
         <form action="/breads" method="POST">
            <label htmlFor="name">Name</label>
            <input
               type="text"
               name="name"
               id="name"
               required
            />
            <label htmlFor="image">Image</label>
            <input
               type="text"
               name="image"
               id="image" />
            <label htmlFor="hasGluten">Has Gluten?</label>
            <input
               type="checkbox"
               name="hasGluten"
               id="hasGluten"
               defaultChecked
            />
            <label htmlFor="baker">Baker</label>
            <select name="baker" id="baker">
               <option value="Yeaster">Yeaster</option>
               <option value="Bakerooski">Bakerooski</option>
               <option value="Yummy">Yummy</option>
               <option value="Doughboy">Doughboy</option>
               <option value="Crusty">Crusty</option>
               <option value="Carbo">Carbo</option>
            </select>

            <br />
            <input type="submit" value='Add bread' />
         </form>
         <div className="backButton">
            <a href="/breads"><button>Go back to the index</button></a>
         </div>

      </Default>
   )
}

module.exports = New

