import Head from 'next/head'
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
		e.preventDefault()
		/* if(e.key === 'Enter'){
			setUsername(e.target.value);
		} */

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
		<div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900">
			<Header />
			
			<main className="flex justify-center flex-grow flex-shrink items-center">
				<Head>
					<title>Octocard</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<meta name="description" content="Get your github information in card format" />
					<meta property="og:type" content="website" />
					<meta name="og:title" property="og:title" content="" />
					<meta name="og:description" property="og:description" content="" />
					<meta property="og:site_name" content="" />
					<meta property="og:url" content="" />  
					<meta name="twitter:card" content="summary" /> 
					<meta name="twitter:title" content="" />
					<meta name="twitter:description" content="" />
					<meta name="twitter:site" content="" />
					<meta name="twitter:creator" content="" />
					<link rel="icon" type="image/png" href="/favicon.ico" />
					<link rel="apple-touch-icon" href="/favicon.ico" />
					<meta property="og:image" content="" />  
					<meta name="twitter:image" content="" />   
					<link rel="canonical" href="" />
				</Head>

				<form
					className="w-96 shadow-xl bg-white rounded-lg border-gray-100 border p-6 dark:bg-gray-800 dark:border-gray-700"
					onSubmit={handleSubmit}
				>
					<div className="flex items-center">
						
						<div className="flex flex-wrap items-stretch w-full relative">
							<div className="flex -mr-px">
								<span className="flex items-center leading-normal bg-gray-100 rounded rounded-r-none border border-r-0 border-gray-300 px-3 whitespace-no-wrap text-gray-500 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">@</span>
							</div>
							<input
								type="text"
								className="flex-shrink flex-grow flex-auto flex-1 border-gray-300 border rounded-md rounded-l-none p-2 mr-1 h-10 hover:border-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" placeholder="octocat"
								value={username}
								onChange={handleChange}
								/* onKeyPress={handleEnter} */
							/>
						</div>					

						<button
							type="submit"
							className="bg-gray-800 rounded-md p-2 text-white font-medium cursor-pointer w-20 h-10 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"						
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
			</main>
		</div>
	)
}
