import React, { useEffect } from 'react'
import {
	useGetSingleMovieImagesQuery,
	useGetSingleMovieQuery,
} from '../../redux/api/movie.api'
import { useParams } from 'react-router-dom'
import {
	Card,
	Col,
	Row,
	Skeleton,
	Image,
	Typography,
	Divider,
	Carousel,
	Tag,
} from 'antd'

const { Title, Paragraph } = Typography

const Detail = () => {
	const { id } = useParams()

	const { data, isLoading: isMovieLoading } = useGetSingleMovieQuery(id)
	const { data: images, isLoading: isImagesLoading } =
		useGetSingleMovieImagesQuery(id)

	useEffect(() => {
		window.scrollTo({ behavior: 'smooth', left: 0, top: 0 })
	}, [])

	return (
		<div className='min-h-screen py-6 bg-gray-50 dark:bg-gray-900'>
			<div className='container mx-auto max-w-[1400px] px-4'>
				{/* Skeleton Loader or Main Content */}
				{isMovieLoading || isImagesLoading ? (
					// Skeleton Loader
					<div className='animate-pulse'>
						<Skeleton.Image
							active
							className='w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px]'
						/>
						<Skeleton active paragraph={{ rows: 4 }} className='mt-6' />
						<Row gutter={[16, 16]} className='mt-6'>
							{Array.from({ length: 3 }).map((_, index) => (
								<Col key={index} xs={24} sm={12} md={8}>
									<Skeleton.Image active className='w-full h-[200px]' />
								</Col>
							))}
						</Row>
					</div>
				) : (
					// Main Content
					<>
						{/* Backdrop Image */}
						<div className='relative rounded-xl overflow-hidden'>
							<Image
								className='w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] object-cover'
								src={import.meta.env.VITE_IMAGE_URL + data?.backdrop_path}
								alt={data?.title}
								preview={false}
							/>
						</div>

						{/* Movie Title and Description */}
						<Card className='mt-6 shadow-lg'>
							<Title level={2} className='text-center md:text-left'>
								{data?.title}
							</Title>
							<Divider />

							{/* Movie Description */}
							<Paragraph className='text-lg text-gray-700 dark:text-gray-300'>
								{data?.overview}
							</Paragraph>

							{/* Additional Movie Details */}
							<Row gutter={[16, 16]} className='mt-6'>
								<Col xs={24} sm={12} md={8}>
									<Title level={5}>Release Date</Title>
									<Paragraph className='text-gray-600 dark:text-gray-400'>
										{data?.release_date}
									</Paragraph>
								</Col>
								<Col xs={24} sm={12} md={8}>
									<Title level={5}>Rating</Title>
									<Paragraph className='text-gray-600 dark:text-gray-400'>
										{data?.vote_average}/10
									</Paragraph>
								</Col>
								<Col xs={24} sm={12} md={8}>
									<Title level={5}>Genres</Title>
									<div>
										{data?.genres?.map(genre => (
											<Tag key={genre.id} color='#C61F1F' className='mb-1'>
												{genre.name}
											</Tag>
										))}
									</div>
								</Col>
							</Row>
						</Card>

						{/* Movie Images Carousel */}
						<Card className='mt-6 shadow-lg'>
							<Title level={4} className='mb-4'>
								Movie Scenes
							</Title>
							<Carousel autoplay>
								{images?.backdrops?.slice(0, 5)?.map(image => (
									<div key={image.file_path}>
										<Image
											className='w-full rounded-lg'
											src={import.meta.env.VITE_IMAGE_URL + image.file_path}
											alt='Movie Scene'
											preview={false}
										/>
									</div>
								))}
							</Carousel>
						</Card>

						{/* Additional Movie Images Grid */}
						<Card className='mt-6 shadow-lg'>
							<Title level={4} className='mb-4'>
								More Images
							</Title>
							<Row gutter={[16, 16]}>
								{images?.backdrops?.slice(3, 9)?.map(image => (
									<Col key={image.file_path} xs={24} sm={12} md={8}>
										<Image
											className='w-full rounded-lg'
											src={import.meta.env.VITE_IMAGE_URL + image.file_path}
											alt='Movie Scene'
											preview={false}
										/>
									</Col>
								))}
							</Row>
						</Card>
					</>
				)}
			</div>
		</div>
	)
}

export default Detail
