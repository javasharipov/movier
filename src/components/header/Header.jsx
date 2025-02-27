import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { IoHomeSharp } from 'react-icons/io5'
import { BiSolidCameraMovie } from 'react-icons/bi'
import {
	FaBookmark,
	FaSearch,
	FaRegSun,
	FaBars,
	FaTimes,
	FaRegMoon,
} from 'react-icons/fa'

const Header = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [dark, setDark] = useState(localStorage.getItem('theme') === 'dark')

	useEffect(() => {
		if (dark) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [dark])

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	const handleDarkMode = () => {
		const newTheme = dark ? 'light' : 'dark'
		setDark(!dark)
		localStorage.setItem('theme', newTheme)
		document.documentElement.classList.toggle('dark', !dark)
	}

	return (
		<>
			<header
				id='header'
				className='sticky bg-slate-100 text-gray-900 top-0 left-0 z-40 dark:bg-[#000000d8] dark:text-white flex items-center h-14 shadow-md'
			>
				<div className='container-all mx-auto flex items-center justify-between px-6'>
					<div
						className='md:hidden text-2xl cursor-pointer'
						onClick={toggleSidebar}
					>
						<FaBars />
					</div>

					<div className='flex items-center gap-4'>
						<Link to={'/'}>
							<img src={logo} alt='BilTick Logo' className='h-8' />
						</Link>
					</div>

					<nav className='hidden md:flex'>
						<ul className='flex items-center gap-7 text-[12px] font-medium'>
							<NavLink
								to='/'
								className='flex flex-col items-center gap-1 hover:text-red-500'
							>
								<IoHomeSharp className='text-xl' />
								<span>Home</span>
							</NavLink>
							<NavLink
								to='/all-movies'
								className='flex flex-col items-center gap-1 hover:text-red-500'
							>
								<BiSolidCameraMovie className='text-xl' />
								<span>Movies</span>
							</NavLink>
							<NavLink
								to='/saved'
								className='flex flex-col items-center gap-1 hover:text-red-500'
							>
								<FaBookmark className='text-xl' />
								<span>Saved</span>
							</NavLink>
							<NavLink
								to='/search'
								className='flex flex-col items-center gap-1 hover:text-red-500'
							>
								<FaSearch className='text-xl' />
								<span>Search</span>
							</NavLink>
						</ul>
					</nav>

					<div className='hidden md:flex items-center gap-4'>
						<select className='dark:bg-[#1D1D1D80] bg-slate-200 px-3 py-2 rounded-md flex items-center text-[14px] font-normal'>
							<option value=''>Ру</option>
							<option value=''>Eng</option>
							<option value=''>Uzb</option>
						</select>
						<button
							onClick={handleDarkMode}
							className='px-4 py-2 rounded-md cursor-pointer'
						>
							{dark ? <FaRegSun /> : <FaRegMoon />}
						</button>
					</div>
				</div>
			</header>

			<div
				id='sidebar'
				className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-slate-200 to-slate-300 text-gray-900 dark:from-[#000000f8] dark:to-[#1D1D1D] dark:text-white z-50 transform transition-transform duration-300 ease-in-out ${
					isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<div className='flex justify-end p-4'>
					<FaTimes
						className='text-2xl cursor-pointer'
						onClick={toggleSidebar}
					/>
				</div>

				<nav className='mt-8'>
					<ul className='flex flex-col items-start gap-7 text-[12px] font-medium pl-6'>
						<NavLink
							to='/'
							className='flex items-center w-full gap-2 hover:text-red-500'
							onClick={toggleSidebar}
						>
							<IoHomeSharp className='text-xl' />
							<span>Home</span>
						</NavLink>
						<NavLink
							to='/all-movies'
							className='flex items-center w-full gap-2 hover:text-red-500'
							onClick={toggleSidebar}
						>
							<BiSolidCameraMovie className='text-xl' />
							<span>Movies</span>
						</NavLink>
						<NavLink
							to='/saved'
							className='flex items-center w-full gap-2 hover:text-red-500'
							onClick={toggleSidebar}
						>
							<FaBookmark className='text-xl' />
							<span>Saved</span>
						</NavLink>
						<NavLink
							to='/search'
							className='flex items-center w-full gap-2 hover:text-red-500'
							onClick={toggleSidebar}
						>
							<FaSearch className='text-xl' />
							<span>Search</span>
						</NavLink>
					</ul>
				</nav>

				<div className='mt-8 pl-6'>
					<select className='bg-gray-500 dark:bg-[#1D1D1D80] px-3 py-2 rounded-md text-white flex items-center text-[14px] font-normal'>
						<option value=''>Ру</option>
						<option value=''>Eng</option>
						<option value=''>Uzb</option>
					</select>
					<button
						className='mt-4 px-4 py-2 rounded-md cursor-pointer'
						onClick={handleDarkMode}
					>
						{dark ? <FaRegSun /> : <FaRegMoon />}
					</button>
				</div>
			</div>
		</>
	)
}

export default Header
