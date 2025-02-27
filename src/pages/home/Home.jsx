import React from 'react'
import { useGetMoviesQuery } from '../../redux/api/movie.api'
import { Link } from 'react-router-dom'
import Hero from '../../components/hero/Hero'

const Home = () => {
  const { data } = useGetMoviesQuery({ page: 1, without_genres: "18,36,10749" })


  return (
    <>
    <Hero />
    </>
  )
}

export default Home