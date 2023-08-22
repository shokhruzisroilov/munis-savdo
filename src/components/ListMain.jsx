import { styles } from "../utils/styles"
import {AiOutlineMore} from 'react-icons/ai'
const ListMain = () => {
	return (
		<>
			<div className={`flex justify-between py-3 ${styles.paragrafh}`}>
			<div className='flex gap-x-4'>
					<input type='checkbox' className='cursor-pointer' />
					<span>1</span>
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
				<span><AiOutlineMore className="text-[24px] cursor-pointer"/></span>
			</div>
			<div className='w-full h-[1.5px] bg-gray-500'></div>
		</>
	)
}

export default ListMain
