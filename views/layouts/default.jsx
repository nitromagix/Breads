const React = require('react')
const {trace} = require('../../helper');

function Default(html) {
   trace('| views/layouts/defaults.jsx')('Default()')
   return (
      <html>
         <head>
            <title>Default</title>
         </head>
         <body>
            <h1>HTML Rendered!</h1>
            <div className="container">
               {html.children}
            </div>
         </body>
      </html>
   )
}

module.exports = Default
