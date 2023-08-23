import { styles } from '../../utils/styles'
import { BiSolidLeftArrowAlt, BiFingerprint, BiImage } from 'react-icons/bi'
import { MdPhotoCamera } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Filter, Input } from '../../components/ui'

const AddEmployess = () => {
	return (
		<div className='w-full'>
			<Link
				to='/employees'
				className='flex w-20	mb-2 justify-start items-center'
			>
				<BiSolidLeftArrowAlt /> <p className={`${styles.paragrafh}`}>Orqaga</p>
			</Link>
			<div>
				<h1 className={`${styles.heading2x} mr-5`}>Xodim qo'shing</h1>
			</div>
			<div className='flex gap-x-5'>
				<div className='w-full border border-gray-500 rounded-lg mt-5 py-10 px-5 grid grid-cols-2 gap-5'>
					<div className='border border-gray-500 mx-10 flex items-center justify-center'>
						<BiFingerprint className='text-[120px] text-lightWithe' />{' '}
					</div>
					<div className='flex flex-col gap-5'>
						<Filter />
						<button
							type='submit'
							className='flex items-center gap-x-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '
						>
							<MdPhotoCamera className='text-[20px]' />
							<p>Saqlash</p>
						</button>
						<button
							type='submit'
							className='flex items-center gap-x-2 justify-center rounded-md bg-[#e5e5e5] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-[#e1dada] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '
						>
							<AiOutlineClose className='text-[20px]' />
							Bekor qilish
						</button>
					</div>
				</div>
				<div className='w-full border border-gray-500 rounded-lg mt-5 py-10 px-5 grid grid-cols-2 gap-5'>
					<div className='border border-gray-500 mx-10 flex items-center justify-center '>
						<BiImage className='text-[120px] text-lightWithe' />{' '}
					</div>
					<div>
						<div className='flex flex-col gap-5'>
							<Filter />
							<button
								type='submit'
								className='flex items-center gap-x-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '
							>
								<MdPhotoCamera className='text-[20px]' />
								<p>Saqlash</p>
							</button>
							<button
								type='submit'
								className='flex items-center gap-x-2 justify-center rounded-md bg-[#e5e5e5] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-[#e1dada] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '
							>
								<AiOutlineClose className='text-[20px]' />
								Bekor qilish
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full border border-gray-500 rounded-lg mt-5 py-10 px-5 grid grid-cols-3 gap-5'>
				<div className='flex flex-col gap-5'>
					<Input type='text' title='Ism' />
					<Input type='text' title='Karta' />
					<Filter title='Shablon' />
					<Filter title='Jinsi' />
					<Input type='text' title='Lavozim' />
				</div>
				<div className='flex flex-col gap-4'>
					<Filter title='Barmoq' />
					<Input type='file' title='Barmoq izi' />
					<Input type='file' title='Yuz' />
					<Input type='text' title='Telfon' />
					<Input type='text' title='Teligram' />
				</div>
				<div className='flex flex-col gap-5'>
					<Input type='date' title='qachondan boshlab' />
					<Input type='date' title='qachongacha' />
					<Filter title='Guruh tanlash' />
					<Input type='text' title='Manzil' />
				</div>
				<div className='flex mt-5 gap-x-5'>
					<button
						type='submit'
						className='flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '
					>
						Saqlash
					</button>
					<button
						type='submit'
						className='flex justify-center rounded-md bg-[#e5e5e5] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-[#e1dada] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '
					>
						Bekor qilish
					</button>
				</div>
			</div>
		</div>
	)
}

export default AddEmployess
