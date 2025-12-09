
import { Suspense } from 'react'
import './App.css'
import DasiyNav from './components/DaisyNav/DasiyNav'
import NavBer from './components/NavBer/NavBer'
import PricingOption from './components/PricingOptions/PricingOptions'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultsChart from './components/ResultsChart/ResultsChart'


const pricingPromis=fetch('pricingData.json').then(res=>res.json())


function App() {
  return (
    <>
    <header>
      <NavBer></NavBer>
     {/* <DasiyNav></DasiyNav> */}
    </header>
    <main>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <PricingOptions pricingPromis={pricingPromis}></PricingOptions>
      </Suspense>
      <ResultsChart></ResultsChart>
     
    </main>
    
      
    </>
  )
}

export default App
