import Header from '../components/Header'
import { useState } from "react"
import { useRouter } from "next/router"

export default function Home() {

	const router = useRouter();

	const [username, setUsername] = useState("");
	const [error, setError] = useState("");

	const handleChange = e => {
		setError("")
		setUsername(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault();

		if(username.trim() === '') {
            setError("GitHub username is required.");
            return;
        }

		router.push({
			pathname: '/me/[id]',
			query: { id: username }
		})
	}

	return (
		<>
			<Header
				iconDirection={false}
			/>
			
			<div className="flex justify-center flex-grow flex-shrink items-center">

				<form
					className="shadow-xl bg-white rounded-lg border-gray-100 border p-3 sm:p-6 dark:bg-gray-800 dark:border-gray-700 w-11/12 sm:w-96 mt-3"
					onSubmit={handleSubmit}
				>
					<div className="flex items-center flex-col sm:flex-row">
						
						<div className="flex items-stretch w-full relative mb-2 sm:mb-0 sm:mr-1 ">
							<div className="flex -mr-px">
								<span className="flex items-center leading-normal bg-gray-100 rounded rounded-r-none border border-r-0 border-gray-300 px-3 whitespace-no-wrap text-gray-500 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">@</span>
							</div>
							<input
								type="text"
								className="flex-shrink flex-grow flex-auto flex-1 border-gray-300 border rounded-md rounded-l-none p-2 h-10 hover:border-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" placeholder="octocat"
								value={username}
								onChange={handleChange}
							/>
						</div>					

						<button
							type="submit"
							className="bg-gray-800 rounded-md p-2 text-white font-medium cursor-pointer h-10 hover:bg-gray-700 dark:bg-gray-900 dark:hover:bg-gray-700 w-full sm:w-20"						
						>Go!</button>
					</div>
					
					{
						error != "" ? (
							<p className="flex-grow text-red-500 relative mt-3 text-sm dark:text-red-400">
								{error}
							</p>
						) : null
					}
				</form>
			</div>
		</>
	)
}
