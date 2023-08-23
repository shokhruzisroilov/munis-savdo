import { Link } from "react-router-dom"
const UsersList = () => {
	return (
		<>
			<tr className='border-b dark:border-neutral-500'>
				<td className='whitespace-nowrap px-6 py-4 font-medium flex gap-x-4'><input type="checkbox" /><p>1</p></td>
				<td className='whitespace-nowrap px-6 py-4'><Link to='/users/role-users' className="text-blue-500">admin</Link></td>
				<td className='whitespace-nowrap px-6 py-4'>ha</td>
				<td className='whitespace-nowrap px-6 py-4'>ha</td>
				<td className='whitespace-nowrap px-6 py-4'>ha</td>
				<td className='whitespace-nowrap px-6 py-4'>ha</td>
				<td className='whitespace-nowrap px-6 py-4'>ha</td>
				<td className='whitespace-nowrap px-6 py-4 '>ha</td>
				<td className='whitespace-nowrap px-6 py-4 '>ha</td>
				<td className='whitespace-nowrap px-6 py-4 '>ha</td>
			</tr>
		</>
	)
}

export default UsersList
