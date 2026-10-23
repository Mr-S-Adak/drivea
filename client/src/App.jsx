import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Drive from './pages/Drive'
import SharedFile from './pages/SharedFile'
import SharedWithMe from './pages/SharedWithMe'
import Trash from './pages/Trash'

const App = () => {
  return (
   <>
   <Toaster/>
   <Routes>
      <Route path="/login" element={<Login mode="login" />} />
      <Route path="/register" element={<Login mode="register" />} />
      <Route path="/" element={<Drive />} />
      {/* <Route path="/sharedfile" element={<SharedFile />} />
      <Route path="/sharedwithme" element={<SharedWithMe />} />
      <Route path="/trash" element={<Trash />} /> */}
      <Route path="*" element={<Navigate to="/" replace />} />
   </Routes>
   </>
  )
}


export default App