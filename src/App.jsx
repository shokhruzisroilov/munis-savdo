import { Routes, Route } from 'react-router-dom'
import {
	Categories,
	Devices,
	Employees,
	Groups,
	Login,
	Synchronization,
	Tables,
	Users,
	Weekend,
	ErrorPage,
	AddDevices,
} from './pages/index'
import { Layout } from './layout/index'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Devices />} />
				<Route path='/add-devices' element={<AddDevices />} />
				<Route path='/categories' element={<Categories />} />
				<Route path='/employees' element={<Employees />} />	
				<Route path='/groups' element={<Groups />} />
				<Route path='/synchronization' element={<Synchronization />} />
				<Route path='/users' element={<Users />} />
				<Route path='/tables' element={<Tables />} />
				<Route path='/weekend' element={<Weekend />} />
			</Route>
			<Route path='/login' element={<Login />} />
			<Route path='/*' element={<ErrorPage />} />
		</Routes>
	)
}

export default App
