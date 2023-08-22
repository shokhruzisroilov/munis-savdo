import { AiOutlineMore } from 'react-icons/ai'
const ListMain = () => {
	return (
		<>
			<tr className='border-b dark:border-neutral-500'>
				<td className='whitespace-nowrap px-6 py-4 font-medium flex gap-x-4'>
					<input type='checkbox' />
					<p>1</p>
				</td>
				<td className='whitespace-nowrap px-6 py-4'>Ism</td>
				<td className='whitespace-nowrap px-6 py-4'>Ism</td>
				<td className='whitespace-nowrap px-6 py-4'>Ism</td>
				<td className='whitespace-nowrap px-6 py-4'>Ism</td>
				<td className='whitespace-nowrap px-6 py-4'>Ism</td>
				<td className='whitespace-nowrap px-6 py-4'>Ism</td>
				<td className='whitespace-nowrap px-6 py-4'>Ism</td>
				<td className='whitespace-nowrap px-6 py-4'>
					<AiOutlineMore className='text-[20px] cursor-pointer' />
				</td>
			</tr>
		</>
	)
}

export default ListMain
