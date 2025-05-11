import './App.css'
import Navbar from './componts/Navbar/Navbar'
import {Route, Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home'
function App() {

  //check the user role to deside which Navbar should display
  const isOwnerPath=useLocation().pathname.includes('owner')
  return (
    <>
      {! isOwnerPath && <Navbar/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>

      </div>
     <h1>Hello</h1>
        
   </>
  )
}

export default App
