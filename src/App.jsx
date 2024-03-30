
import React from 'react'
import  { Navbar , 
   Checkout, 
   Create,
   Download , 
   Hero , 
   Explore , 
   Footer } from './components'

function App() {
 


  return (
   <div className="w-full">
      <Navbar  />
     <div>
     <Hero  /> 
      </div> 
     <div> <Create  /> </div>
      <Explore  />
      <Checkout  />
      <Download  />
      <Footer  />
      </div>
  )
}

export default App
