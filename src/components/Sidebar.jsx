import { styles } from '../utils/styles'
import { NavLink } from 'react-router-dom'
import { HiDesktopComputer } from 'react-icons/hi'
import { BiCategory, BiTimeFive } from 'react-icons/bi'
import { FaUsersCog, FaUsers } from 'react-icons/fa'
import { RiRefreshFill, RiUserSettingsLine } from 'react-icons/ri'
import { AiFillStar } from 'react-icons/ai'
const Sidebar = () => {
	return (
		<nav className='w-72 min-h-screen bg-primary rounded-tr-[50px] px-5 py-20'>
			<ul className='w-full flex flex-col justify-center gap-5'>
				<li>
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive ? styles.clazzAcive : styles.clazz
						}
					>
						<HiDesktopComputer className='w-5 h-5 text-white' />
						<p className={`${styles.paragrafhWhite}`}>Qurulmalar</p>
					</NavLink>
				</li>

				<li>
					<NavLink
						to='/categories'
						className={({ isActive }) =>
							isActive ? styles.clazzAcive : styles.clazz
						}
					>
						<BiCategory className='w-5 h-5 text-white' />
						<p className={`${styles.paragrafhWhite}`}>Toifalar</p>
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/employees'
						className={({ isActive }) =>
							isActive ? styles.clazzAcive : styles.clazz
						}
					>
						<FaUsersCog className='w-5 h-5 text-white' />
						<p className={`${styles.paragrafhWhite}`}>Xodimlar</p>
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/groups'
						className={({ isActive }) =>
							isActive ? styles.clazzAcive : styles.clazz
						}
					>
						<FaUsers className='w-5 h-5 text-white' />
						<p className={`${styles.paragrafhWhite}`}>Guruhlar</p>
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/synchronization'
						className={({ isActive }) =>
							isActive ? styles.clazzAcive : styles.clazz
						}
					>
						<RiRefreshFill className='w-5 h-5 text-white' />
						<p className={`${styles.paragrafhWhite}`}>Sinxronizatsiya</p>
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/users'
						className={({ isActive }) =>
							isActive ? styles.clazzAcive : styles.clazz
						}
					>
						<RiUserSettingsLine className='w-5 h-5 text-white' />
						<p className={`${styles.paragrafhWhite}`}>Foydalanuvchilar</p>
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/tables'
						className={({ isActive }) =>
							isActive ? styles.clazzAcive : styles.clazz
						}
					>
						<BiTimeFive className='w-5 h-5 text-white' />
						<p className={`${styles.paragrafhWhite}`}>Jadvallar</p>
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/weekend'
						className={({ isActive }) =>
							isActive ? styles.clazzAcive : styles.clazz
						}
					>
						<AiFillStar className='w-5 h-5 text-white' />
						<p className={`${styles.paragrafhWhite}`}>Bayramlar</p>
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Sidebar
