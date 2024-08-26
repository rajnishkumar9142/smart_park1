import { BrowserRouter } from "react-router-dom";
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components'
function App() {

  return (
      <BrowserRouter >
         <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
             <Navbar></Navbar>
           
          </div>
          
           {/* <Feedbacks /> */}

           <div className="relative z-0">
           
           <Hero></Hero> 
           <StarsCanvas />
         </div><div className="relative z-0">
           
        
           <Works />
            
           <StarsCanvas />
         </div>
         <div className="relative z-0">
           
            
             <Contact />
            
            <StarsCanvas />
          </div>
          <div className="relative z-0">
           
            <About />
            <StarsCanvas />
          </div>
         </div>
      </BrowserRouter>
  )
}

export default App
