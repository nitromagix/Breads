const React = require('react')
const Default = require('./layouts/default')
const { trace } = require('../helper');

function Edit({ bread}) {
   trace(' | edit.jsx')('Edit()')
   return (
      <Default>
         <h2>Edit a bread</h2>
         <form action={`/breads/${bread.id}?_method=PUT`} method="POST">
            <label htmlFor="name">Name</label>
            <input
               type="text"
               name="name"
               id="name"
               required
               defaultValue={bread.name}
            />
            <label htmlFor="image">Image</label>
            <input
               type="text"
               name="image"
               id="image"
               defaultValue={bread.image}
            />

            <label htmlFor="hasGluten">Has Gluten?</label>
            <input
               type="checkbox"
               name="hasGluten"
               id="hasGluten"
               defaultChecked={bread.hasGluten}
            />

            <label htmlFor="baker">Baker</label>
            <select 
            name="baker" 
            id="baker"
            defaultValue={bread.baker}>
               <option value="Yeaster">Yeaster</option>
               <option value="Bakerooski">Bakerooski</option>
               <option value="Yummy">Yummy</option>
               <option value="Doughboy">Doughboy</option>
               <option value="Crusty">Crusty</option>
               <option value="Carbo">Carbo</option>
            </select>

            <br />
            <input type="submit" value='Save' />

         </form>
         <div>
            <a href={`/breads/${bread.id}`}><button>Cancel</button></a>
         </div>
      </Default>
   )
}

module.exports = Edit
