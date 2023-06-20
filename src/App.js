import { useState } from 'react';
import './App.css';
function App() {
	const [email, setemail] = useState("")
	const [password, setpassword] = useState("")
	const [error, seterror] = useState(false)
	const handleChange = (e) => {
		e.preventDefault();
		if (email.length === 0 || password.length === 0) {
			seterror(true);
		}
		else if (password.length >= 5) {
			seterror(true)
		}
	}
	return (<>
		<div className="h-screen overflow-hidden flex items-center justify-center bg-white" >
			<div className="h-screen w-screen md:flex">
				<div
					className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 rounded-r-2xl justify-around items-center hidden">
					<div>
						<h1 className="text-white font-bold text-5xl font-sans">Welcome to login</h1>
						<p className="text-white text-lg mt-1">Don't have an account !!</p>
						<button type="submit" className="block w-28 bg-white text-indigo-800 hover:bg-gradient-to-bl from-purple-600 to-pink-300 mt-6 py-2 rounded-2xl font-bold mb-2">Sign Up</button>
					</div>
					<div className="absolute animate-pulse -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
					<div className="absolute animate-pulse -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
					<div className="absolute animate-pulse -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
					<div className="absolute animate-pulse -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
				</div>
				<div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
					<form className="bg-white" onSubmit={handleChange}>
						<h1 className="text-gray-800 font-bold text-3xl mb-1 p-6">Welcome back !!</h1>
						<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
								viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
									d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
							</svg>
							<input onChange={e => setemail(e.target.value)} className="pl-2 outline-none border-none" type="Email" placeholder="Email Address" />

						</div>
						<div className='mb-3'>
							{error&&email.length <= 0 ? <p className='text-red-600'>Email section can't be empty</p> : ""}
						</div>
						<div className="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fillRule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clipRule="evenodd" />
							</svg>
							<input onChange={e => setpassword(e.target.value)} className="pl-2 outline-none border-none" type="Password" placeholder="Password" />
						</div>
						<div className='mt-3'>
							{error&&password.length <= 5 ? <p className='text-red-600'>Password should be greater than 5 letters and numbers</p> : ""}</div>
						<button type="submit" className="block w-full bg-indigo-600 mt-8 py-2
               rounded-2xl text-white font-semibold mb-2">Login</button>
						<span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
					</form>
				</div>
			</div>
		</div>


	</>
	);
}
export default App;
