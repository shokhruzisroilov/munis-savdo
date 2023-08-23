import { styles } from '../../utils/styles'
import { ViewNumber, Search } from '../../components'
import { FooterBy } from '../../components/ui'
import { AiOutlinePlus, AiFillDelete } from 'react-icons/ai'
const Categories = () => {
	return (
		<div className='w-full'>	
			<div className='flex justify-between'>
				<div>
					<h1 className={`${styles.heading2x} mr-5`}>Toifalar</h1>
				</div>
				<div className='flex gap-x-5'>
					<span className='flex items-center gap-1 text-green-600 cursor-pointer'>
						<AiOutlinePlus className='text-[20px]' />
						<p className={`${styles.paragrafh2x}`}>Toifa qo'shish</p>
					</span>
					<span className='flex items-center gap-1 text-red-600 cursor-pointer'>
						<AiFillDelete className='text-[20px]' />
						<p className={`${styles.paragrafh2x}`}>Toifani o'chirish</p>
					</span>
				</div>
			</div>
			<div className='w-full border border-gray-500 rounded-lg mt-5 py-10 px-5'>
				<div className='flex justify-between'>
					<ViewNumber />
					<Search />
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
												Holati
											</th>
										</tr>
									</thead>
									<tbody>
										<tr className='border-b dark:border-neutral-500'>
											<td className='whitespace-nowrap px-6 py-4 font-medium flex gap-x-4'>
												<input type='checkbox' />
												<p>1</p>
											</td>
											<td className='whitespace-nowrap px-6 py-4'>Kirish</td>
										</tr>
										<tr className='border-b dark:border-neutral-500'>
											<td className='whitespace-nowrap px-6 py-4 font-medium flex gap-x-4'>
												<input type='checkbox' />
												<p>1</p>
											</td>
											<td className='whitespace-nowrap px-6 py-4'>Chiqish</td>
										</tr>
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

export default Categories
