import React from 'react'
import './App.css'
import './index.css'
import { Route,Routes } from 'react-router-dom'
import HomePg from './pages/HomePg'
import CreateBook from './pages/CreateBook'
import ShowBooks from './pages/ShowBooks'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'

function App() {

  return (
    <>
    <Routes>      
       <Route  path = '/' element={<HomePg/>}/>
       <Route  path = '/books/create' element={<CreateBook/>}/>
       <Route  path = '/books/details/:id' element={<ShowBooks/>}/>
       <Route  path = '/books/edit/:id' element={<EditBook/>}/>
       <Route  path = '/books/delete/:id' element={<DeleteBook/>}/>
     </Routes>
     {/* <h1 className='bg-red-300'>Tailwing test</h1> */}
      
    </>
  )
}

export default App
