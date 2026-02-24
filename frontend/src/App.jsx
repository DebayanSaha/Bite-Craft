import React from 'react'
import AppRoutes from './routes/appRoutes'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <AppRoutes/>
      <ToastContainer />
    </div>
  )
}

export default App