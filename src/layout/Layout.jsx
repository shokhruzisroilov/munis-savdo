import { Header, Sidebar } from '../components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<>
			<Header />
			<div className='flex justify-between'>
				<Sidebar />
				<div className='w-full min-h-screen flex items-start justify-start p-5 overflow-x-auto'>
					<Outlet />
				</div>
			</div>
		</>
	)
}

export default Layout
