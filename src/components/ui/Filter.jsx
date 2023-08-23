import { styles } from '../../utils/styles'
const Filter = ({ title }) => {
	return (
		<div>
			<label
				htmlFor='password'
				className={`${styles.paragrafh} block text-gray-900`}
			>
				{title}
			</label>
			<select
				id='number'
				name='number'
				className='block w-full bg-[#e5e5e5] rounded-md border-0 p-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset'
			>
				<option>Kirganlar</option>
				<option>Chiqishlar</option>
				<option>Yana qo'shiladi</option>
			</select>
		</div>
	)
}

export default Filter
