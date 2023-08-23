import { Link } from 'react-router-dom'
import { styles } from '../../utils/styles'
import { BiSolidLeftArrowAlt } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { Input } from '../../components/ui'

const RoleUsers = () => {
	return (
		<div className='w-full'>
			<Link
				to='/users'
				className='flex w-20	mb-2 justify-start items-center'
			>
				<BiSolidLeftArrowAlt /> <p className={`${styles.paragrafh}`}>Orqaga</p>
			</Link>
			<div>
				<h1 className={`${styles.heading2x} mr-5`}>Foydalanuvchi huquqlari</h1>
			</div>
			<div className='w-full border border-gray-500 rounded-lg mt-5 py-10 px-5'>
				<div className='flex justify-between'>
					<div className='flex flex-col gap-2'>
						<p>ID: 1</p>
						<Input type='text' title='Ism' />
						<Input type='password' title='Parol' />
					</div>
					<div>
						<AiFillDelete className='text-[24px] text-red-500 cursor-pointer' />
					</div>
				</div>
				<div className='mt-10'>
					<label htmlFor='text' className={`${styles.heading2x} m-2`}>
						Huquqlar
					</label>
					<div className='w-1/2 border border-gray-500 rounded py-5 px-5 flex flex-col gap-5 mt-2'>
						<span className='flex gap-x-2'>
							<input type='checkbox' />
							<p className={styles.paragrafh2x}>Qurulmalar</p>
						</span>
						<span className='flex gap-x-2'>
							<input type='checkbox' />
							<p className={styles.paragrafh2x}>Toifalar</p>
						</span>
						<span className='flex gap-x-2'>
							<input type='checkbox' />
							<p className={styles.paragrafh2x}>Xodimlar</p>
						</span>
						<span className='flex gap-x-2'>
							<input type='checkbox' />
							<p className={styles.paragrafh2x}>Guruhlar</p>
						</span>
						<span className='flex gap-x-2'>
							<input type='checkbox' />
							<p className={styles.paragrafh2x}>Sinxronizatsiya</p>
						</span>
						<span className='flex gap-x-2'>
							<input type='checkbox' />
							<p className={styles.paragrafh2x}>Foydalanuvchilar</p>
						</span>
						<span className='flex gap-x-2'>
							<input type='checkbox' />
							<p className={styles.paragrafh2x}>Ish vaqti</p>
						</span>
						<span className='flex gap-x-2'>
							<input type='checkbox' />
							<p className={styles.paragrafh2x}>Bayramlar</p>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RoleUsers
