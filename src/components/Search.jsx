const Search = () => {
	return (
		<div>
			<input
				id='text'
				name='text'
				type='text'
				autoComplete='text'
				required
				className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-500 '
				placeholder='Qidirish ?'
			/>
		</div>
	)
}

export default Search
