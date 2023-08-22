import { styles } from '../utils/styles'
const ListHeader = () => {
	return (
		<>
			<div className={`flex justify-between py-3 mt-4 ${styles.tables}`}>
				<div className='flex gap-x-4 '>
					<input type='checkbox' className='cursor-pointer' />
					<span>N</span>
					<span>Ism</span>
				</div>
				<div className='flex gap-x-32'>
					<span>IP</span>
					<span>Port</span>
					<span>Huquq</span>
				</div>
				<div className='flex gap-x-32'><span>Parol</span>
				<span>Turi</span>
				<span>Holati</span></div>
				<span className='w-8'></span>
			</div>
			<div className='w-full h-[1.5px] bg-gray-500'></div>
		</>
	)
}

export default ListHeader
