import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import ProjectsPage from '../components/Dashboard/ProjectsPage'
import MessagesPage from '../components/Dashboard/MessagesPage'
import FinancesPage from '../components/Dashboard/FinancesPage'
import EditProfile from '../components/Dashboard/EditProfile'
import ProjectBudget from '../components/Dashboard/ProjectBudget'
import Login from './Login'
import SignUp from './SignUp'
import { useSelector } from 'react-redux'

const AnimatedRoutes = () => {
  const location = useLocation()
  const { currentUser } = useSelector((state) => state.user)

  return (
    <AnimatePresence>
      {currentUser && (
        <Routes location={location} key={location.pathname}>
          <Route path='/'>
            <Route index element={<Dashboard />} />
            <Route path='projects'>
              <Route index element={<ProjectsPage />} />
              <Route path='post-project' element={<ProjectBudget />} />
            </Route>
            <Route path='messages' element={<MessagesPage />} />
            <Route path='finances' element={<FinancesPage />} />
            <Route path='edit' element={<EditProfile />} />
            <Route path='*' element={<Dashboard />} />
          </Route>
        </Routes>
      )}
      {!currentUser && (
        <Routes location={location} key={location.pathname}>
          <Route path='/'>
            <Route index element={<Login />} />
            <Route path='register' element={<SignUp />} />
            <Route path='*' element={<SignUp />} />
          </Route>
        </Routes>
      )}
    </AnimatePresence>
  )
}

export default AnimatedRoutes
