import { logo, logoFroma } from '../../assets'
import { styles } from '../../utils/styles'
import { Button } from '../../components/ui'

const Login = () => {	
	return (
		<div className='w-full min-h-screen flex items-center justify-between'>
			<div className='w-1/2 bg-primary min-h-screen sm:flex hidden justify-center items-center'>
				<img src={logo} alt='logo image' className='w-80 h-80' />
			</div>
			<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					<img className='mx-auto h-10 w-auto' src={logoFroma} />
					<h2 className={`mt-10 text-center ${styles.heading}`}>Kirish</h2>
				</div>
				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form className='space-y-6'>
						<div>
							<label htmlFor='text' className={`${styles.paragrafh} block text-gray-900`}>
								Ism
							</label>
							<div className='mt-2'>
								<input
									id='text'
									name='text'
									type='text'
									autoComplete='text'
									required
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
						<div>
							<label htmlFor='password' className={`${styles.paragrafh} block text-gray-900`}>
								Parol
							</label>
							<div className='mt-2'>
								<input
									id='password'
									name='password'
									type='password'
									autoComplete='password'
									required
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
						<div>
							<Button name={'Davom eting'}/>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
