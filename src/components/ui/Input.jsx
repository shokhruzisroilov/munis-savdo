import { styles } from '../../utils/styles'
const Input = ({ title, type = 'text' }) => {
	return (
		<div>
			<label
				htmlFor={type}
				className={`${styles.paragrafh} block text-gray-900 ml-2`}
			>
				{title}
			</label>
			<div >
				<input
					id={type}
					name={type}
					type={type}
					autoComplete={type}
					required
					className='block w-full bg-[#e5e5e5] rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset'
				/>
			</div>
		</div>
	)
}

export default Input
