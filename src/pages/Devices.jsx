import { styles } from '../utils/styles'
import { ListHeader, ListMain } from '../components'
import {
	AiFillDelete,
	AiOutlinePlus,
	AiTwotoneCloseCircle,
} from 'react-icons/ai'
import { MdCategory } from 'react-icons/md'
import { BsFillDoorOpenFill } from 'react-icons/bs'

const Devices = () => {
	return (
		<div className='w-full'>
			<div className='flex items-center gap-5'>
				<div>
					<h1 className={`${styles.heading2x} mr-5`}>Qurilmalar</h1>
				</div>
				<span className='flex items-center gap-1 text-green-600 cursor-pointer'>
					<AiOutlinePlus className='text-[20px]' />
					<p className={`${styles.paragrafh2x}`}>Qurulma qo'shish</p>
				</span>
				<span className='flex items-center gap-1 text-red-600 cursor-pointer'>
					<AiFillDelete className='text-[20px]' />
					<p className={`${styles.paragrafh2x}`}>Qurilmani o'chirish</p>
				</span>
				<span className='flex items-center gap-1 text-primary cursor-pointer'>
					<MdCategory className='text-[20px]' />
					<p className={`${styles.paragrafh2x}`}>Toifani o'zgartirish</p>
				</span>
				<span className='flex items-center gap-1 text-green-500 cursor-pointer'>
					<AiTwotoneCloseCircle className='text-[20px]' />
					<p className={`${styles.paragrafh2x}`}>Hammasini o'chirib qo'yish</p>
				</span>
				<span className='flex items-center gap-1 text-gray-500 cursor-pointer'>
					<BsFillDoorOpenFill className='text-[20px]' />
					<p className={`${styles.paragrafh2x}`}>Hammasini ochish</p>
				</span>
			</div>
			<div className='w-full border border-gray-500 rounded-lg mt-5 py-10 px-5'>
				<div className='flex justify-between'>
					<div>
						<label htmlFor='text'>Ko'rsatish </label>
						<select
							id='number'
							name='number'
							className=' rounded-md py-2 pl-2 pr-7 border border-gray-500 text-gray-900 '
						>
							<option>100</option>
							<option>200</option>
							<option>300</option>
						</select>
						<label htmlFor='text'> yozuvlar </label>
					</div>
					<div className='flex gap-5 items-center'>
						<input
							id='text'
							name='text'
							type='text'
							autoComplete='text'
							required
							className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-500 '
							placeholder='Qidirish ?'
						/>
						<select
							id='number'
							name='number'
							className=' rounded-md py-2 pl-2 pr-7 border border-gray-500 text-gray-900 '
						>
							<option>Kirganlar</option>
							<option>Chiqishlar</option>
							<option>Yana qo'shiladi</option>
						</select>
					</div>
				</div>
				<ListHeader />
				<ListMain />
				<ListMain />
				<ListMain />
				<ListMain />
				<ListMain />
			</div>
			<p className={`text-center mt-10 ${styles.paragrafh2x}`}>@2023 MUNS SAVDO by Muns</p>
		</div>
	)
}

export default Devices
