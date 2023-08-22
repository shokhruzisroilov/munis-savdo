import { logo } from '../assets'
import { Button } from './ui'
import { FiUser } from 'react-icons/fi'
import { IoMdArrowDropdown } from 'react-icons/io'
const Header = () => {
	return (
		<div className='h-[100px] bg-white shadow-headerShadow flex items-center justify-between px-5'>
			<div>
				<img src={logo} alt='logo' className='w-48 h-48 cursor-pointer' />
			</div>
			<div className='flex gap-4'>
				<Button name={'chiqish'}/>
			<div className='flex items-center cursor-pointer'>
				<div className='w-10 h-10 bg-[#e5e5e5] rounded-full flex items-center justify-center'>
				<img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
					{/* <FiUser className='text-[24px]' /> */}
				</div>
				<IoMdArrowDropdown />
			</div>
			</div>
		</div>
	)
}

export default Header
