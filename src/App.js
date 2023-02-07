import React from "react";
import Card from "./Card";
import Data from './Data'


const h1Style = {
   color: 'blue',
   textAlign: 'center',
   backgroundColor: 'yellow',
   padding: '5px'
}

/* const tryCondition = () => {
   const favseries = 'netflix'
   // if else condition
   if (favseries == 'netflix') {
      return <Card />
   } else {
      return 'nothing'
   }
   // ternary operator
   favseries === 'netflix' ? <Card /> : 'nothing'

} */

const App = () => (
   <>
      <h1 style={h1Style}>Details of students</h1>
      {
         Data.map(properties => {
            return (
               <Card
                  key={properties.id}
                  title={properties.myName}
                  age={properties.age}
                  department={properties.department}
                  link={properties.link}
               />
            )
         })
      }

   </>
)

export default App