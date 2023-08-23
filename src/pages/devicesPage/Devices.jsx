import { styles } from '../../utils/styles'
import { ListMain, ViewNumber, Search } from '../../components'
import { FooterBy } from '../../components/ui'
import { Link } from 'react-router-dom'
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
			<div className='flex justify-between'>
				<div>
					<h1 className={`${styles.heading2x} mr-5`}>Qurulmalar</h1>
				</div>
				<div className='flex gap-x-5'>
						<Link to='/add-devices' className='flex items-center gap-1 text-green-600 cursor-pointer'>
							<AiOutlinePlus className='text-[20px]' />
							<p className={`${styles.paragrafh2x}`}>Qurulma qo'shish</p>
						</Link>
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
						<p className={`${styles.paragrafh2x}`}>
							Hammasini o'chirib qo'yish
						</p>
					</span>
					<span className='flex items-center gap-1 text-gray-500 cursor-pointer'>
						<BsFillDoorOpenFill className='text-[20px]' />
						<p className={`${styles.paragrafh2x}`}>Hammasini ochish</p>
					</span>
				</div>
			</div>
			<div className='w-full border border-gray-500 rounded-lg mt-5 py-10 px-5'>
				<div className='flex justify-between'>
					<ViewNumber />
					<div className='flex gap-5 items-center'>
						<Search />
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
				<div className='flex flex-col overflow-x-auto mt-2'>
					<div className='sm:-mx-6 lg:-mx-8'>
						<div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
							<div className='overflow-x-auto'>
								<table className='min-w-full text-left text-sm font-light'>
									<thead className='border-b font-medium dark:border-neutral-500'>
										<tr>
											<th scope='col' className='px-6 py-4 flex gap-4'>
												<input type='checkbox' />
												<p>N</p>
											</th>
											<th scope='col' className='px-6 py-4'>
												Ismi
											</th>
											<th scope='col' className='px-6 py-4'>
												Ip
											</th>
											<th scope='col' className='px-6 py-4'>
												Port
											</th>
											<th scope='col' className='px-6 py-4'>
												Huquq
											</th>
											<th scope='col' className='px-6 py-4'>
												Parol
											</th>
											<th scope='col' className='px-6 py-4'>
												Turi
											</th>
											<th scope='col' className='px-6 py-4'>
												Holati
											</th>
											<th scope='col' className='px-6 py-4'></th>
										</tr>
									</thead>
									<tbody>
										<ListMain />
										<ListMain />
										<ListMain />
										<ListMain />
										<ListMain />
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
			<FooterBy />
		</div>
	)
}

export default Devices
