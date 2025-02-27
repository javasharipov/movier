import React, { useEffect } from 'react'
import { useGetGenresQuery, useGetMoviesQuery } from '../../redux/api/movie.api'
import { Pagination, Empty } from 'antd'
import { Link, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
	addWishlist,
	removeWishlist,
} from '../../redux/features/wishlist.slice'
import { FaBookmark } from 'react-icons/fa'
import noImage from '../../assets/no-image.png'
import SkeletonLoader from '../../components/loading/Loading'
import { FaRegBookmark } from 'react-icons/fa6'

const Movies = () => {
	const [params, setParams] = useSearchParams()
	const dispatch = useDispatch()
	const wishlist = useSelector(state => state.wishlist.wishlist)

	const page = params.get('page') || 1
	let with_genres = params.get('genres') || ''

	const { data, isLoading } = useGetMoviesQuery({
		page,
		without_genres: '18,36,10749',
		with_genres: with_genres ? with_genres.split('-').join(',') : '',
	})

	const { data: genreData } = useGetGenresQuery()

	const handleChangePage = p => {
		if (p === 1) {
			params.delete('page')
		} else {
			params.set('page', p)
		}
		setParams(params)
	}

	const handleChangeGenre = id => {
		let array = with_genres ? with_genres.split('-') : []

		if (array.includes(id.toString())) {
			array = array.filter(i => i !== id.toString())
		} else {
			array.push(id.toString())
		}

		if (array.length === 0) {
			params.delete('genres')
			params.delete('page')
		} else {
			params.set('genres', array.join('-'))
			params.set('page', 1)
		}
		setParams(params)
	}

	useEffect(() => {
		window.scrollTo({ behavior: 'smooth', left: 0, top: 0 })
	}, [page])

	return (
		<>
			<div
				id='genreContainer'
				className='container mx-auto max-w-[1250px] px-1.5 flex items-center justify-start gap-2 mb-4 mt-2 overflow-auto'
			>
				{genreData?.genres?.map(genre => (
					<div
						key={genre.id}
						onClick={() => handleChangeGenre(genre.id)}
						className={`whitespace-nowrap px-3.5 py-1 cursor-pointer rounded-xl active:scale-95 duration-200 
              ${
								with_genres.split('-').includes(genre.id.toString())
									? 'bg-red-600 text-white'
									: 'dark:bg-slate-900 dark:text-white bg-slate-300'
							}`}
					>
						{genre.name}
					</div>
				))}
			</div>

			{!data?.total_results && !isLoading && <Empty />}

			<div className='container mx-auto max-w-[1280px] px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-2'>
				{isLoading
					? Array.from({ length: 10 }).map((_, index) => (
							<SkeletonLoader key={index} />
					  ))
					: data?.results?.map(movie => {
							const isInWishlist = wishlist.some(item => item.id === movie.id)

							return (
								<div key={movie.id} className='relative w-full'>
									<Link to={`/movie/${movie.id}`}>
										<img
											className='w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] rounded-xl cursor-pointer object-cover object-top'
											src={
												movie.poster_path
													? import.meta.env.VITE_IMAGE_URL + movie.poster_path
													: noImage
											}
											alt={movie.title}
										/>
									</Link>

									<button
										className='absolute top-2 right-2 text-white bg-black/60 rounded-full p-1.5'
										onClick={() =>
											isInWishlist
												? dispatch(removeWishlist(movie.id))
												: dispatch(addWishlist(movie))
										}
									>
										{isInWishlist ? (
											<FaBookmark className='text-red-500' size={19} />
										) : (
											<FaRegBookmark size={19} />
										)}
									</button>

									<h2
										title={movie.title}
										className='mb-3 text-sm sm:text-base md:text-lg lg:text-xl font-medium mt-2 cursor-default'
										style={{
											whiteSpace: 'nowrap',
											overflow: 'hidden',
											textOverflow: 'ellipsis',
											maxWidth: '100%',
										}}
									>
										{movie.title}
									</h2>
								</div>
							)
					  })}
			</div>

			<div className='px-3.5 container mx-auto max-w-2xl'>
				{!!data?.total_results && (
					<div className='flex items-center justify-center mt-4'>
						<Pagination
							showSizeChanger={false}
							defaultCurrent={1}
							defaultPageSize={1}
							total={data?.total_pages > 500 ? 500 : data?.total_pages}
							current={page}
							onChange={page => handleChangePage(page)}
						/>
					</div>
				)}
			</div>
		</>
	)
}

export default Movies
