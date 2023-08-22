import { styles } from '../utils/styles'
import { ViewNumber, Search, EmployeList } from '../components'
import { FooterBy } from '../components/ui'
import { AiOutlinePlus, AiFillDelete } from 'react-icons/ai'
import { MdCategory } from 'react-icons/md'
const Employees = () => {
	return (
		<div className='w-full'>
			<div className='flex justify-between'>
				<div>
					<h1 className={`${styles.heading2x} mr-5`}>Xodimlar</h1>
				</div>
				<div className='flex gap-x-5'>
					<span className='flex items-center gap-1 text-green-600 cursor-pointer'>
						<AiOutlinePlus className='text-[20px]' />
						<p className={`${styles.paragrafh2x}`}>Xodim qo'shish</p>
					</span>
					<span className='flex items-center gap-1 text-red-600 cursor-pointer'>
						<AiFillDelete className='text-[20px]' />
						<p className={`${styles.paragrafh2x}`}>Xodimni o'chirish</p>
					</span>
					<span className='flex items-center gap-1 text-primary cursor-pointer'>
						<MdCategory className='text-[20px]' />
						<p className={`${styles.paragrafh2x}`}>Guruhini o'zgartirish</p>
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
												Ism
											</th>
											<th scope='col' className='px-6 py-4'>
												Karta
											</th>
											<th scope='col' className='px-6 py-4'>
												Barmoq izi
											</th>
											<th scope='col' className='px-6 py-4'>
												Yuz
											</th>
											<th scope='col' className='px-6 py-4'>
												Ishlagan vaqti
											</th>
											<th scope='col' className='px-6 py-4'>
												Shartnoma
											</th>
										</tr>
									</thead>
									<tbody>
										<EmployeList />
										<EmployeList />
										<EmployeList />
										<EmployeList />
										<EmployeList />
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

export default Employees
