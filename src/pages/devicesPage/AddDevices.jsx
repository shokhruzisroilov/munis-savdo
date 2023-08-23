import { Link } from 'react-router-dom'
import { styles } from '../../utils/styles'
import { Input, Filter } from '../../components/ui'
import { BiSolidLeftArrowAlt } from 'react-icons/bi'

const AddDevices = () => {
	return (
		<div className='w-full'>
			<Link to='/' className='flex w-20	mb-2 justify-start items-center'>
				<BiSolidLeftArrowAlt /> <p className={`${styles.paragrafh}`}>Orqaga</p>
			</Link>
			<div>
				<h1 className={`${styles.heading2x} mr-5`}>Qurulma qo'shing</h1>
			</div>
			<form className='w-full border border-gray-500 rounded-lg mt-5 py-10 px-5 grid grid-cols-2 gap-5'>
				<Input type={'text'} title={'Ism'}/>
				<Input type={'text'} title={'Ip'}/>
				<Input type={'text'} title={'Port'}/>
				<Input type={'text'} title={'foydalanuvchi'}/>
				<Input type={'password'} title={'Parol'}/>
				<Filter />
				<Filter /> <br />
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
			</form>
		</div>
	)
}

export default AddDevices
