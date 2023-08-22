import { styles } from '../utils/styles'
import { Button } from '../components/ui'
import { ViewNumber, Search, SynxronList, SynxronIdList } from '../components'
import { FooterBy } from '../components/ui'

const Synchronization = () => {
	return (
		<div className='w-full'>
			<div className='flex justify-between'>
				<div>
					<h1 className={`${styles.heading2x} mr-5`}>Sinxronizatsiya</h1>
				</div>
				<div className='flex gap-x-2'>
					<select
						id='number'
						name='number'
						className=' rounded-md py-2 pl-2 pr-7 border border-gray-500 text-gray-900 '
					>
						<option>Kirganlar</option>
						<option>Chiqishlar</option>
						<option>Yana qo'shiladi</option>
					</select>
					<select
						id='number'
						name='number'
						className=' rounded-md py-2 pl-2 pr-7 border border-gray-500 text-gray-900 '
					>
						<option>Kirganlar</option>
						<option>Chiqishlar</option>
						<option>Yana qo'shiladi</option>
					</select>
					<Button name={'Transfer'} />
				</div>
			</div>
			<div className='flex gap-5'>
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
													IP
												</th>
												<th scope='col' className='px-6 py-4'>
													Holati
												</th>
											</tr>
										</thead>
										<tbody>
											<SynxronList />
											<SynxronList />
										</tbody>
									</table>
								</div>
							</div>
						</div>
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
													ID
												</th>
												<th scope='col' className='px-6 py-4'>
													Ismi
												</th>
												<th scope='col' className='px-6 py-4'>
													O'rnatilgan
												</th>
											</tr>
										</thead>
										<tbody>
											<SynxronIdList />
											<SynxronIdList />
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<FooterBy />
		</div>
	)
}

export default Synchronization
