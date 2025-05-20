
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import PricingOptions from './Components/PricingOptions/PricingOptions'

function App() {
  
  const pricingPromise = fetch('pricingData.json').then(res=>res.json());

  return (
    <>
      
      <header>
        <NavBar></NavBar>
        
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      </main>
      
    </>
  )
}

export default App
