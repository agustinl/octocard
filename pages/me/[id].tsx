import Head from 'next/head'
import Card from '../../components/Card'
import Skeleton from '../../components/Skeleton'
import ErrorCard from '../../components/ErrorCard'
import Header from '../../components/Header'
import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from "react"
import { DirectionContext } from "../../contexts/DirectionContext"

export default function Profile() {
	
	const position = useContext(DirectionContext);
    const direction = position.state.position;

	const [user, setUser] = useState({});
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const router = useRouter()
	const username = router.query;

	useEffect(() => {
		// GET request using fetch inside useEffect React hook
		fetch(`https://api.github.com/users/${username.id}`)
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			}).then(function(response) {
				setUser(response);
				setLoading(false);
			}).catch(function(error) {
				setError(true);
				setLoading(false);
			});
	
	}, [username.id]);

	return (
		<div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900">
			<Head>
				<title>Searching... — Octocard</title>
			</Head>

			<Header />
			
			<main id={direction} className="flex justify-center flex-grow flex-shrink items-center">
				{
					loading ? <Skeleton /> : null
				}
				{
					Object.keys(user).length > 0 && !loading ? <Card {...user} /> : null
				}
				{
					error ? <ErrorCard /> : null
				}
			</main>
		</div>
	)
}