import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SuspenseContainer } from '../utils'
import NotFound from './not-found/NotFound'
const Home = lazy(() => import("../pages/home/Home"))
const Movies = lazy(() => import("../pages/movies/Movies"))
const Saved = lazy(() => import("../pages/saved/Saved"))
const Search = lazy(() => import("../pages/search/Search"))
const Layout = lazy(() => import("../pages/layout/Layout"))
const Detail = lazy(() => import("../pages/detail/Detail"))

const RouterMain = () => {
  return (
    <div className='bg-white text-black dark:bg-black dark:text-white'>
      <Routes>
        <Route path='/' element={<SuspenseContainer><Layout /></SuspenseContainer>}>
          <Route path='/' element={<SuspenseContainer><Home /></SuspenseContainer>} />
          <Route path='/all-movies' element={<SuspenseContainer><Movies /></SuspenseContainer>} />
          <Route path='/saved' element={<SuspenseContainer><Saved /></SuspenseContainer>} />
          <Route path='/search' element={<SuspenseContainer><Search /></SuspenseContainer>} />
          <Route path='movie/:id' element={<SuspenseContainer><Detail /></SuspenseContainer>} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default RouterMain