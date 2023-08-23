import { styles } from '../../utils/styles'
import { FooterBy } from '../../components/ui'

const Tables = () => {
	return (
		<div className='w-full'>
			<h1 className={`${styles.heading2x} mr-5`}>Ish vaqti</h1>
			<div className='w-full border border-gray-500 rounded-lg mt-5 py-10 px-5 '>
				<div className='flex justify-between gap-x-5'>
					<div className='w-1/2'>
						<label htmlFor='text'>Kelish vaqti</label>
						<input
							id='time'
							name='time'
							type='time'
							autoComplete='time'
							required
							className='w-full rounded-md py-2 px-4 text-gray-900 shadow-sm bg-[#e5e5e5]'
						/>
					</div>
					<div className='w-1/2'>
						<label htmlFor='text'>Ketish vaqti</label>
						<input
							id='time'
							name='time'
							type='time'
							autoComplete='time'
							required
							className='w-full rounded-md py-2 px-4 text-gray-900 shadow-sm bg-[#e5e5e5]'
						/>
					</div>
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
			<FooterBy />
		</div>
	)
}

export default Tables
