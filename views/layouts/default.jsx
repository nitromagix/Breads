const React = require('react')
const { trace } = require('../../helper');

function Default(html) {
   trace(' | defaults.jsx')('Default()')
   return (
      <html>
         <head>
            {/* <!-- normalize & skeleton links --> */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css" integrity="sha512-GlNi+UC2s8FzkofjxQxqnY8s2G1t+NDuIl5S/2jPvvr+rH+lQV8IfiI1m7klfpNbN1DiYN1tWxrUM8eQMqhUkA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" integrity="sha512-5fsy+3xG8N/1PV5MIJz9ZsWpkltijBI48gBzQ/Z2eVATePGHOkMIn+xTDHIfTZFVb9GMpflF2wOWItqxAP2oLQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="/main.css" />

         </head>

         <body>
            <div className="wrapper">
               <header>
                  <h1><a href="/breads">BreadCRUD</a></h1>
               </header>
               <div className="container">
                  {html.children}
               </div>
            </div>
         </body>

      </html>
   )
}

module.exports = Default
