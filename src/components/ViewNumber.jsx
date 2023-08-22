const ViewNumber = () => {
	return (
		<div>
			<label htmlFor='text'>Ko'rsatish </label>
			<select
				id='number'
				name='number'
				className=' rounded-md py-2 pl-2 pr-7 border border-gray-500 text-gray-900 '
			>
				<option>100</option>
				<option>200</option>
				<option>300</option>
			</select>
			<label htmlFor='text'> yozuvlar </label>
		</div>
	)
}

export default ViewNumber
